import React, { ReactNode } from 'react';
import { Text as RNText, TextStyle } from 'react-native';

import styles from './styles';

export interface Props {
  testID?: string;
  children?: ReactNode;
  headline?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  bold?: boolean;
  numberOfLines?: number;
  center?: boolean;
  onPress?(): void;
  white?: boolean;
  /**
   * style: only pass in margin or color styles here!!!
   * You should never need to change the size / font etc.
   * This ensures we only use agreed Text styles from the designer.
   * If you need to add another, discuss with designer.
   */
  style?: TextStyle;
}

function Text({
  testID,
  children,
  onPress,
  headline = false,
  h1 = false,
  h2 = false,
  h3 = false,
  bold = false,
  numberOfLines = 99,
  center = false,
  white = false,
  style,
}: Props) {
  return (
    <RNText
      textBreakStrategy="simple"
      testID={testID}
      numberOfLines={numberOfLines}
      onPress={onPress}
      allowFontScaling={false}
      style={[
        styles.default,
        headline && styles.headline,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        bold && styles.bold,
        center && styles.center,
        white && styles.white,
        style && style,
      ]}>
      {children}
    </RNText>
  );
}

export default Text;
