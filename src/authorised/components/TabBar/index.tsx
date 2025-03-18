import React, {useRef, useEffect, useCallback} from 'react';
import {Dimensions, Animated} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import TabButton from './TabButton';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

export default function TabBar(props: BottomTabBarProps) {
  const sliderXPos = useRef<Animated.Value>(new Animated.Value(0)).current;
  const tabsContainerYPos = useRef<Animated.Value>(new Animated.Value(0))
    .current;

  const {routes, index} = props.state;
  const tabWidth = Math.round(screenWidth / routes.length);

  const sliderStyles = {
    width: tabWidth - 10,
    transform: [{translateX: sliderXPos}],
  };

  const tabsContainerStyles = {
    transform: [{translateY: tabsContainerYPos}],
  };

  const animateSliderToIndex = useCallback(
    (slideIndex: number) => {
      Animated.spring(sliderXPos, {
        toValue: slideIndex * tabWidth,
        velocity: 10,
        speed: 25,
        useNativeDriver: true,
      }).start();
    },
    [sliderXPos, tabWidth],
  );

  const animateTabBar = useCallback(
    (yVal: number) => {
      Animated.spring(tabsContainerYPos, {
        toValue: yVal,
        velocity: 10,
        speed: 5,
        useNativeDriver: true,
      }).start();
    },
    [tabsContainerYPos],
  );

  useEffect(() => {
    animateSliderToIndex(index);
  }, [index, animateSliderToIndex]);

  useEffect(() => {
    // Only show tab bar if top level navigation
    const isNotTopLevelScreen = routes[index]?.state?.index > 0;
    if (isNotTopLevelScreen) {
      animateTabBar(100);
    } else {
      animateTabBar(0);
    }
  }, [animateTabBar, routes, index]);

  return (
    <Animated.View style={[styles.container, tabsContainerStyles]}>
      <Animated.View style={[styles.slider, sliderStyles]} />
      {routes.map((route, routeIndex) => (
        <TabButton
          key={routeIndex}
          index={routeIndex}
          route={route}
          {...props}
          animateSliderToIndex={animateSliderToIndex}
        />
      ))}
    </Animated.View>
  );
}
