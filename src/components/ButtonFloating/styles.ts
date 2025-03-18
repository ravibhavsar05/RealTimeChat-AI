import { colors } from '@xyz/style-guide';
import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  buttonContainer: ViewStyle;
  gradientContainer: ViewStyle;
  gradientButtonContainer: ViewStyle;
  gradient: ViewStyle;
}

export default StyleSheet.create<Styles>({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  gradientContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  gradientButtonContainer: {
    backgroundColor: colors.greys.white,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  gradient: {
    height: 20,
    width: '100%',
  },
});
