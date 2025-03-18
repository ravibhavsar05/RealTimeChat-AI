import { colors, textSizes } from '@xyz/style-guide';
import { StyleSheet, TextStyle } from 'react-native';


interface Styles {
  default: TextStyle;
  headline: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  bold: TextStyle;
  center: TextStyle;
  white: TextStyle;
}

export default StyleSheet.create<Styles>({
  default: {
    fontSize: textSizes.default,
    lineHeight: 18,
    color: colors.greys.darkest,
  },
  headline: {
    fontSize: textSizes.headline,
    lineHeight: 50,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: textSizes.h1,
    lineHeight: 50,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: textSizes.h2,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: textSizes.h3,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
  white: {
    color: colors.greys.white,
  },
});
