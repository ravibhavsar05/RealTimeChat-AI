import React from 'react';
import {TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';



import styles from './styles';
import { Text } from '@xyz/component-library';
import { colors } from '@xyz/style-guide';

interface Props extends BottomTabBarProps {
  index: number;
  route: any;
  animateSliderToIndex(index: number): void;
}

export default function TabButton({
  index,
  route,
  animateSliderToIndex,
  state,
  descriptors,
  navigation,
}: Props) {
  const {options} = descriptors[route.key];

  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
      animateSliderToIndex(index);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const label:any = options.tabBarLabel;
  const iconColor = isFocused ? colors.greys.black : colors.greys.light;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      // accessibilityStates={isFocused ? ['selected'] : []}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      // testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <>
        {options.tabBarIcon({
          focused: isFocused,
          size: 20,
          color: iconColor,
        })}
        <Text style={styles.text}>{label}</Text>
      </>
    </TouchableOpacity>
  );
}
