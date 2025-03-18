import {colors} from '@xyz/style-guide';
import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  screen: ViewStyle;
  darkScreen: ViewStyle;
  screenWithoutTrapezoid: ViewStyle;
  scrollView: ViewStyle;
  removePadding: ViewStyle;
  trapezoidContainer: ViewStyle;
  rectangle: ViewStyle;
}

export default StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    backgroundColor: colors.greys.white,
  },
  darkScreen: {
    backgroundColor: colors.greys.darker,
  },
  screenWithoutTrapezoid: {
    backgroundColor: colors.greys.white,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  removePadding: {
    paddingHorizontal: 0,
  },
  trapezoidContainer: {
    position: 'absolute',
    top: -1,
  },
  rectangle: {
    width: '100%',
    marginBottom: -1, // Fix weird grey line
  },
});
