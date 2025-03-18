import {gray} from './../../../node_modules/colorette/index.d';
import {colors, textSizes} from '@xyz/style-guide';
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  button: ViewStyle;
  primary: ViewStyle;
  secondary: ViewStyle;
  tertiary: ViewStyle;
  danger: ViewStyle;
  text: TextStyle;
  dangerText: TextStyle;
  row: ViewStyle;
  leftIcon: ViewStyle;
  rightIcon: ViewStyle;
}

export default StyleSheet.create<Styles>({
  button: {
    borderRadius: 8,
    borderWidth: 1,
    height: 48,
    // borderColor: colors.yellows.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    borderColor: colors.greys.black,
    backgroundColor: colors.greys.white,
  },
  secondary: {
    borderColor: colors.yellows.default,
    backgroundColor: colors.yellows.light,
  },
  tertiary: {
    borderColor: colors.greys.white,
    backgroundColor: colors.greys.white,
  },
  danger: {
    borderColor: colors.reds.lighter,
    backgroundColor: colors.reds.light,
  },
  text: {
    color: colors.greys.darkest,
    fontSize: textSizes.h3,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  dangerText: {
    color: colors.reds.default,
  },
  row: {
    flexDirection: 'row',
  },
  leftIcon: {
    marginRight: 10,
    width: 20,
  },
  rightIcon: {
    marginLeft: 10,
    width: 20,
  },
});
