
import { colors } from '@xyz/style-guide';
import {Platform, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  field: TextStyle;
  multilineField: TextStyle;
  fieldSuccess: ViewStyle;
  fieldError: TextStyle;
  icon: ViewStyle;
  control: ViewStyle;
  border: TextStyle;
  labelText: TextStyle;
  textInput: TextStyle;
  textInputFocussed: ViewStyle;
  textInputError: TextStyle;
  textMultiline: TextStyle;
  inputContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  control: {
    // marginBottom: '2%',
  },
  field: {
    width: '100%',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.36,
    borderColor: colors.greys.white,
    borderBottomWidth: 1.5,
    paddingBottom: 6,
  },
  multilineField: {
    backgroundColor: colors.greys.white,
    padding: 16,
    minHeight: 130,
    borderBottomWidth: 0,
    borderRadius: 6,
    textAlignVertical: 'top',
  },
  fieldSuccess: {
    // borderBottomColor: colors.eggBlue,
  },
  fieldError: {
    // borderBottomColor: colors.ticklePink,
  },
  icon: {
    // position: 'absolute',
    // flex: 1,
    // height:48,width:48,
    // bottom: 8,
    // right: 8,
    // justifyContent:'center',
    // backgroundColor:'red',
    // top:'25%',
    top: 4,
  },
  border: {
    borderColor: colors.greys.black,
  },
  labelText: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: '600',
    color: colors.greys.dark,
  },

  textInput: {
    borderRadius: 8,
    // borderWidth: 1,
    borderColor: colors.greys.light,
    backgroundColor: colors.greys.white,
    height: 48,
    // paddingHorizontal: 15,
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
  textMultiline: {
    paddingTop: 15,
    paddingBottom: 15,
    height: 144,
    textAlignVertical: 'top',
  },
  inputContainer: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.greys.white,
    overflow: 'hidden', // Important for shadow on iOS
  },
  
});

export default styles;
