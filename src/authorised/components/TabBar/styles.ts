import { gray } from './../../../../node_modules/colorette/index.d';
import { colors } from '@xyz/style-guide';
import {StyleSheet, ViewStyle} from 'react-native';



interface Styles {
  container: ViewStyle;
  slider: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: colors.greys.white,
    elevation: 10,
    flexDirection: 'row',
  },
  slider: {
    height: 4,
    position: 'absolute',
    top: 2,
    marginHorizontal: 5,
    backgroundColor: colors.greys.black,
    borderRadius: 4,
  },
});
