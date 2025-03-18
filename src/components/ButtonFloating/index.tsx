import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {colors} from '@xyz/style-guide';
import Button, {Props as ButtonProps} from '@xyz/component-library/Button';

/**
 *
 * Use this Button wrapper if you need the button to float
 * at the bottom of the screen
 */

interface Props extends ButtonProps {
  gradientBackground?: boolean;
}

export default function ButtonFloating({
  gradientBackground = false,
  ...props
}: Props) {
  if (gradientBackground) {
    return (
      <View style={styles.gradientContainer}>
        <LinearGradient
          colors={[colors.reds.default, '#ffffff00']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={styles.gradient}
        />
        <View style={styles.gradientButtonContainer}>
          <Button {...props} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Button {...props} />
    </View>
  );
}
