import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderButtonProps} from '@react-navigation/elements';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '@xyz/style-guide';


interface Props extends Partial<HeaderButtonProps> {
  onPress?: () => void;
  tintColor?: string;
  style?: ViewStyle;
  iconSize?: number;
}

export default function HeaderBackButton({
  onPress,
  tintColor=colors.greys.black,
  style,
  iconSize = 20,
  ...rest
}: Props) {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  if (!canGoBack) {
    return null;
  }

  const onPressHeaderBackButton = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity
      onPress={onPressHeaderBackButton}
      activeOpacity={0.5}
      style={[styles.headerBackButton, style]}>
      <Icon
        name="chevron-left"
        size={iconSize}
        color={tintColor}
      />
    </TouchableOpacity>
  );
}
