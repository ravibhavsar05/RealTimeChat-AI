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
    width: '100%',
    marginVertical: '2.5%',
  },
  gradientContainer: {
    width: '100%',
    marginVertical: '2.5%',
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
