import { colors } from '@xyz/style-guide';
import {StyleSheet, ViewStyle, TextStyle, Platform} from 'react-native';


interface Styles {
  container: ViewStyle;
  textInput: ViewStyle;
  textInputFocussed: ViewStyle;
  textInputError: ViewStyle;
  errorText: TextStyle;
  labelText: TextStyle;
  textMultiline: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    margin: 1,
  },
  textInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.greys.light,
    backgroundColor: colors.greys.white,
    height: 48,
    paddingHorizontal: 15,
  },
  textInputFocussed: {
    borderColor:  '#00000000',
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOpacity: 1,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 1,
        },
      },
    }),
  },
  textInputError: {
    borderColor: colors.reds.default,
  },
  errorText: {
    marginTop: 10,
    color: colors.reds.default,
  },
  labelText: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: '600',
    color: colors.greys.dark,
  },
  textMultiline: {
    paddingTop: 15,
    paddingBottom: 15,
    height: 144,
    textAlignVertical: 'top',
  },
});
