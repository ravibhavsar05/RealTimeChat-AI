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
 
}

export default function ButtonBlackWhite({
  ...props
}: Props) {


  return (
    <View style={styles.buttonContainer}>
      <Button {...props} />
    </View>
  );
}
