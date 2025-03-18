import React, {useState, useRef, memo} from 'react';
import {Animated, StyleSheet, Dimensions, View, Easing} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import styles from './styles';

import Stack from '../Stack';
import { XYZ } from '@xyz/assets/Images';


const windowHeight = Dimensions.get('window').height;

function Initialiser() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasInitialised, setHasInitialised] = useState(false);

  const scale = useRef(new Animated.Value(0.4)); // Add scale animation
  const opacity = useRef(new Animated.Value(1));
  const blur = useRef(new Animated.Value(20)); // For blur animation
  const imageOpacity = useRef(new Animated.Value(0));

  const initialise = async () => {
    RNBootSplash.hide();

    const useNativeDriver = true;

    // New animation sequence
    Animated.sequence([
      // First fade in the blurred image
      Animated.timing(imageOpacity.current, {
        useNativeDriver,
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
      }),
      // Then slowly zoom in and remove blur
      Animated.parallel([
        Animated.timing(scale.current, {
          useNativeDriver,
          toValue: 1,
          duration: 3000, // Very slow zoom
          easing: Easing.bezier(0.23, 1, 0.32, 1),
        }),
        Animated.timing(blur.current, {
          useNativeDriver: false, // Blur doesn't support native driver
          toValue: 0,
          duration: 2500,
          easing: Easing.ease,
        }),
      ]),
      // Pause to show the clear image
      Animated.delay(300),
      // Finally fade out
      Animated.timing(opacity.current, {
        useNativeDriver,
        toValue: 0,
        duration: 1000,
        easing: Easing.ease,
      }),
    ]).start(() => {
      setHasInitialised(true);
      setIsLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      {hasInitialised && <Stack />}

      {isLoading && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.splash,
            {opacity: opacity.current},
          ]}>
          <Animated.Image
            source={XYZ}
            resizeMode={'contain'}
            fadeDuration={0}
            onLoadEnd={initialise}
            style={[
              styles.logo,
              {
                opacity: imageOpacity.current,
                transform: [{scale: scale.current}],
              },
            ]}
          />
        </Animated.View>
      )}
    </View>
  );
}

export default memo(Initialiser);
