import {StackNavigationProp} from '@react-navigation/stack';
import {Screen} from '@xyz/components';
import {ViewTypes} from '@xyz/enum';
import {
  UnAuthorisedRoutes,
  UnAuthorisedStackRoutesAndParams,
} from '@xyz/un-authorised/routes';
import React, {useState, useCallback, useEffect, useMemo, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';
import styles from './styles';
import { Icon } from '@xyz/component-library';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CONTAINER_PADDING = 16;
const ITEM_SPACING = 8;
const ITEMS_PER_PAGE = 20;
const PREFETCH_THRESHOLD = 10;

interface Props {
  navigation: StackNavigationProp<
    UnAuthorisedStackRoutesAndParams,
    UnAuthorisedRoutes.CLOTHS_LIST
  >;
}

interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  thumbnailUrl: string;
}

const generateMockData = (page: number, limit: number): Product[] => {
  return Array.from({length: limit}, (_, index) => {
    const itemIndex = (page - 1) * limit + index;
    return {
      id: `product-${itemIndex}`,
      title: `Product ${itemIndex + 1}`,
      price: Math.floor(Math.random() * 100) + 9.99,
      imageUrl: `https://picsum.photos/400/400?random=${itemIndex}`,
      thumbnailUrl: `https://picsum.photos/200/200?random=${itemIndex}`,
    };
  });
};

export default function ProductList() {
  const [viewType, setViewType] = useState(ViewTypes.GRID_2);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [transitioning, setIsTransitioning] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef<FlashList<Product>>(null);
  const isFetchingMore = useRef(false);
  const isPrefetching = useRef(false);
  const nextPageData = useRef<Product[]>([]);

  const columnCount = useMemo(() => {
    switch (viewType) {
      case ViewTypes.LIST:
        return 1;
      case ViewTypes.GRID_2:
        return 2;
      case ViewTypes.GRID_3:
        return 3;
      default:
        return 2;
    }
  }, [viewType]);

  const getItemDimensions = useMemo(() => {
    const screenWidth = Dimensions.get('window').width;
    const padding = CONTAINER_PADDING * 2;
    const spacing = ITEM_SPACING * (columnCount - 1);
    const availableWidth = screenWidth - padding - spacing;

    return {
      list: {
        width: screenWidth - padding,
        height: 120,
        imageSize: 100,
      },
      grid: {
        width: availableWidth / columnCount,
        height: availableWidth / columnCount + 70,
        imageSize: availableWidth / columnCount,
      },
    };
  }, [columnCount]);

  const prefetchNextPage = useCallback(
    async (pageNumber: number) => {
      if (isPrefetching.current || !hasMore) return;
      isPrefetching.current = true;

      try {
        const nextProducts = generateMockData(pageNumber, ITEMS_PER_PAGE);

        // Prefetch images in background
        Promise.all(
          nextProducts.map(product =>
            FastImage.preload([
              {
                uri: product.thumbnailUrl,
                priority: FastImage.priority.low,
              },
            ]),
          ),
        );

        nextPageData.current = nextProducts;
      } catch (error) {
        console.error('Error prefetching:', error);
      } finally {
        isPrefetching.current = false;
      }
    },
    [hasMore],
  );

  const fetchProducts = useCallback(
    async (pageNumber: number, shouldRefresh: boolean = false) => {
      if (isFetchingMore.current) return;
      isFetchingMore.current = true;

      try {
        let newProducts: Product[];

        if (nextPageData.current.length > 0 && !shouldRefresh) {
          // Use prefetched data if available
          newProducts = nextPageData.current;
          nextPageData.current = [];
        } else {
          // Generate new data if no prefetched data
          newProducts = generateMockData(pageNumber, ITEMS_PER_PAGE);

          // Prefetch images
          await Promise.all(
            newProducts.map(product =>
              FastImage.preload([
                {
                  uri: product.thumbnailUrl,
                  priority: FastImage.priority.high,
                },
              ]),
            ),
          );
        }

        setProducts(prev =>
          shouldRefresh ? newProducts : [...prev, ...newProducts],
        );
        setHasMore(pageNumber < 100);

        // Start prefetching next page
        prefetchNextPage(pageNumber + 1);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
        setRefreshing(false);
        isFetchingMore.current = false;
      }
    },
    [prefetchNextPage],
  );

  useEffect(() => {
    fetchProducts(1);
    return () => {
      FastImage.clearMemoryCache();
    };
  }, [fetchProducts]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    fetchProducts(1, true);
  }, [fetchProducts]);

  const handleLoadMore = useCallback(() => {
    if (!hasMore || loading || refreshing || isFetchingMore.current) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage);
  }, [hasMore, loading, refreshing, page, fetchProducts]);


  const handleViewChange = useCallback((newViewType: ViewTypes) => {
    if (viewType === newViewType) return;
    
    setIsTransitioning(true);

    // Force layout recalculation
    const currentProducts = [...products];
    setProducts([]); // Clear products temporarily

    requestAnimationFrame(() => {
      setViewType(newViewType);
      
      requestAnimationFrame(() => {
        if (listRef.current) {
          listRef.current.scrollToOffset({ offset: 0, animated: false });
        }
        
        // Restore products with new layout
        setProducts(currentProducts);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      });
    });
  }, [viewType, products]);

  const ViewSelector = React.memo(() => (
    <View style={styles.viewSelector}>
      <TouchableOpacity
        style={[
          styles.viewButton,
          viewType === ViewTypes.LIST && styles.activeViewButton,
        ]}
        onPress={() => handleViewChange(ViewTypes.LIST)}>
        <Icon
          name="view-list"
          size={24}
          color={viewType === ViewTypes.LIST ? '#000' : '#666'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.viewButton,
          viewType === ViewTypes.GRID_2 && styles.activeViewButton,
        ]}
        onPress={() => handleViewChange(ViewTypes.GRID_2)}>
        <Icon
          name="grid-view"
          size={24}
          color={viewType === ViewTypes.GRID_2 ? '#000' : '#666'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.viewButton,
          viewType === ViewTypes.GRID_3 && styles.activeViewButton,
        ]}
        onPress={() => handleViewChange(ViewTypes.GRID_3)}>
        <Icon
          name="grid-on"
          size={24}
          color={viewType === ViewTypes.GRID_3 ? '#000' : '#666'}
        />
      </TouchableOpacity>
    </View>
  ));

  const ProductCard = React.memo(
    ({item, index}: {item: Product; index: number}) => {
      const [imageLoaded, setImageLoaded] = useState(false);
      const isGrid = viewType !== ViewTypes.LIST;
      const dimensions = isGrid
        ? getItemDimensions.grid
        : getItemDimensions.list;

      const containerStyle = {
        width: dimensions.width,
        height: dimensions.height,
        marginRight:
          isGrid && (index + 1) % columnCount !== 0 ? ITEM_SPACING : 0,
        marginBottom: ITEM_SPACING,
      };

      useEffect(() => {
        FastImage.preload([
          {
            uri: item.thumbnailUrl,
            priority: FastImage.priority.high,
          },
        ]);
      }, [item.thumbnailUrl]);

      return (
        <View style={[styles.cardContainer, containerStyle]}>
          {isGrid ? (
            <View style={styles.gridCard}>
              <View
                style={[styles.imageContainer, {height: dimensions.imageSize}]}>
                {!imageLoaded && (
                  <View style={[styles.skeleton, {aspectRatio: 1}]} />
                )}
                <FastImage
                  source={{
                    uri: item.thumbnailUrl,
                    priority: FastImage.priority.high,
                    cache: FastImage.cacheControl.immutable,
                  }}
                  style={[
                    styles.image as any,
                    {width: '100%', height: '100%'},
                    !imageLoaded && styles.hiddenImage as any,
                  ]}
                  resizeMode={FastImage.resizeMode.cover}
                  onLoad={() => setImageLoaded(true)}
                />
              </View>
              <View style={styles.gridContent}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.listCard}>
              <View
                style={[
                  styles.imageContainer,
                  {width: dimensions.imageSize, height: dimensions.imageSize},
                ]}>
                {!imageLoaded && (
                  <View style={[styles.skeleton, {aspectRatio: 1}]} />
                )}
                <FastImage
                  source={{
                    uri: item.thumbnailUrl,
                    priority: FastImage.priority.high,
                    cache: FastImage.cacheControl.immutable,
                  }}
                  style={[
                    styles.image as any,
                    {width: '100%', height: '100%'},
                    !imageLoaded && styles.hiddenImage,
                  ]}
                  resizeMode={FastImage.resizeMode.cover}
                  onLoad={() => setImageLoaded(true)}
                />
              </View>
              <View style={styles.listContent}>
                <Text style={styles.title} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              </View>
            </View>
          )}
        </View>
      );
    },
    (prevProps, nextProps) => {
      return (
        prevProps.item.id === nextProps.item.id &&
        prevProps.index === nextProps.index
      );
    },
  );

  const SkeletonCard = React.memo(({isGrid}: {isGrid: boolean}) => {
    const dimensions = isGrid ? getItemDimensions.grid : getItemDimensions.list;

    const containerStyle = {
      width: dimensions.width,
      height: dimensions.height,
      marginRight: isGrid ? ITEM_SPACING : 0,
      marginBottom: ITEM_SPACING,
    };

    return (
      <View style={[styles.cardContainer, containerStyle]}>
        {isGrid ? (
          <View style={styles.gridCard}>
            <View style={[styles.skeleton, {height: dimensions.imageSize}]} />
            <View style={styles.gridContent}>
              <View
                style={[
                  styles.skeleton,
                  {height: 16, width: '80%', marginBottom: 8},
                ]}
              />
              <View style={[styles.skeleton, {height: 14, width: '40%'}]} />
            </View>
          </View>
        ) : (
          <View style={styles.listCard}>
            <View
              style={[
                styles.skeleton,
                {width: dimensions.imageSize, height: dimensions.imageSize},
              ]}
            />
            <View style={styles.listContent}>
              <View
                style={[
                  styles.skeleton,
                  {height: 16, width: '80%', marginBottom: 8},
                ]}
              />
              <View style={[styles.skeleton, {height: 14, width: '40%'}]} />
            </View>
          </View>
        )}
      </View>
    );
  });
  const renderFooter = () => {
    if (!loading || refreshing) return null;
    return (
      <View
        style={[
          styles.footer,
          {
            padding: CONTAINER_PADDING,
          },
        ]}>
        {Array(columnCount)
          .fill(0)
          .map((_, index) => (
            <SkeletonCard
              key={`footer-skeleton-${index}`}
              isGrid={viewType !== ViewTypes.LIST}
            />
          ))}
      </View>
    );
  };

  const renderSkeletons = () => {
    return (
      <FlashList
        data={Array(12).fill(0)}
        renderItem={() => <SkeletonCard isGrid={viewType !== ViewTypes.LIST} />}
        keyExtractor={(_, index) => `skeleton-${index}`}
        numColumns={columnCount}
        estimatedItemSize={
          viewType === ViewTypes.LIST
            ? getItemDimensions.list.height
            : getItemDimensions.grid.height
        }
        contentContainerStyle={{padding: CONTAINER_PADDING}}
      />
    );
  };

  return (
    <Screen keyboardAware={false} disableScroll removePadding>
      <SafeAreaView style={styles.container}>
        <ViewSelector />
        <View style={styles.content}>
          {loading && products.length === 0 ? (
            renderSkeletons()
          ) : (
            <FlashList
              ref={listRef}
              data={products}
              renderItem={({item, index}) => (
                <ProductCard item={item} index={index} />
              )}
              keyExtractor={item => item.id}
              numColumns={columnCount}
              estimatedItemSize={
                viewType === ViewTypes.LIST
                  ? getItemDimensions.list.height
                  : getItemDimensions.grid.height
              }
              contentContainerStyle={styles.listContainer}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.5}
              ListFooterComponent={renderFooter}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                />
              }
              
              showsVerticalScrollIndicator={false}
              estimatedListSize={{
                width: SCREEN_WIDTH,
                height: Dimensions.get('window').height,
              }}
              drawDistance={800}
              removeClippedSubviews={true}
              // key={viewType}
              overrideItemLayout={(layout, item, index) => {
                const isGrid = viewType !== ViewTypes.LIST;
                const dimensions = isGrid
                  ? getItemDimensions.grid
                  : getItemDimensions.list;
                layout.size = dimensions.height;
                layout.span = isGrid ? 1 : columnCount;
              }}
            />
          )}
        </View>
      </SafeAreaView>
    </Screen>
  );
}
