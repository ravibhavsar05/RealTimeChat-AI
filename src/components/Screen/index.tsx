import React, {ReactNode, ReactElement} from 'react';
import {View, ScrollView, RefreshControlProps} from 'react-native';
import styles from './styles';
import { colors } from '@xyz/style-guide';
import { useCustomStatusBarColor } from '@xyz/custom-hooks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Props {
  children: ReactNode;
  hideTrapezoid?: boolean;
  distanceFromTop?: number;
  color?: string;
  disableScroll?: boolean;
  removePadding?: boolean;
  keyboardAware?: boolean;
  bottomPadding?: number;
  lightStatusBarText?: boolean;
  RefreshControl?: ReactElement<RefreshControlProps>;
  dark?: boolean;
  keyboardShouldPersistTaps?: 'always' | 'never' | 'handled';
}

function Screen({
  children,
  hideTrapezoid = false,
  distanceFromTop = 40,
  color = colors.greys.white,
  disableScroll = false,
  removePadding = false,
  keyboardAware = false,
  /**
   * Add additional padding to bottom of the screen, useful for floating buttons
   */
  bottomPadding = 0,
  lightStatusBarText = false,
  RefreshControl,
  dark = false,
  keyboardShouldPersistTaps = 'never',
}: Props) {
  const barStyle = lightStatusBarText ? 'light-content' : 'dark-content';
  useCustomStatusBarColor(barStyle);
  return (
    <View
      style={[
        styles.screen,
        hideTrapezoid && [
          styles.screenWithoutTrapezoid,
          color && {backgroundColor: color},
        ],
        dark && styles.darkScreen,
      ]}>
      {!hideTrapezoid && (
        <View style={styles.trapezoidContainer}>
          <View
            style={[
              styles.rectangle,
              {height: distanceFromTop, backgroundColor: color},
            ]}
          />
          
        </View>
      )}
      {keyboardAware ? (
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          style={[styles.scrollView, removePadding && styles.removePadding]}>
          {children}
          <View style={{height: bottomPadding}} />
        </KeyboardAwareScrollView>
       
      ) : (
        <>
          {disableScroll ? (
            <View
              style={[
                styles.scrollView,
                removePadding && styles.removePadding,
              ]}>
              {children}
              <View style={{height: bottomPadding}} />
            </View>
          ) : (
            <ScrollView
              keyboardShouldPersistTaps={keyboardShouldPersistTaps}
              style={[styles.scrollView, removePadding && styles.removePadding]}
              refreshControl={RefreshControl}>
              {children}
              <View style={{height: bottomPadding}} />
            </ScrollView>
          )}
        </>
      )}
    </View>
  );
}

export default Screen;
