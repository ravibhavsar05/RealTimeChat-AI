import React from 'react';
import {
  Text as RNText,
  TouchableOpacity,
  View,
  ViewStyle,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

import Icon from '../Icon';

import styles from './styles';
import {colors} from '@xyz/style-guide';

export interface Props extends TouchableOpacityProps {
  text: string;
  type?: 'primary' | 'secondary' | 'danger' | 'tertiary';
  onPress(): void;
  loading?: boolean;
  style?: ViewStyle;
  leftIcon?: string;
  rightIcon?: string;
  blackBG?: boolean; // Add bl
}

function Button({
  text,
  type = 'primary',
  onPress,
  loading = false,
  style,
  leftIcon,
  rightIcon,
  disabled = false,
  blackBG = false,
}: Props) {
  const onPressButton = loading ? () => {} : onPress;
  const iconColor = blackBG ? colors.greys.white : colors.greys.black;
  const textColor = blackBG ? colors.greys.white : colors.greys.black;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[type],
        style,
        {backgroundColor: blackBG ? colors.greys.black : colors.greys.white},
      ]}
      onPress={onPressButton}
      activeOpacity={0.5}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size="small" color={iconColor} />
      ) : (
        <View style={styles.row}>
          <View style={styles.leftIcon}>
            {leftIcon && <Icon name={leftIcon} size={18} color={iconColor} />}
          </View>
          <RNText
            textBreakStrategy="simple"
            allowFontScaling={false}
            style={[
              styles.text,
              type === 'danger' && styles.dangerText,
              {color: textColor},
            ]}>
            {text}
          </RNText>
          <View style={styles.rightIcon}>
            {rightIcon && <Icon name={rightIcon} size={18} color={iconColor} />}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default Button;
