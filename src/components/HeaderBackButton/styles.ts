import { colors } from '@xyz/style-guide';
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';



interface Styles {
  headerBackButton: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<Styles>({
  headerBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  text: {
    marginLeft: 5,
    color: colors.greys.default,
  },
});
