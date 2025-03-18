import { colors } from '@xyz/style-guide';
import {StyleSheet, ViewStyle, ImageStyle} from 'react-native';


interface Styles {
  container: ViewStyle;
  splash: ViewStyle;
  logo: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.greys.white,
  },
  logo: {
    // height: 350,
    // width: 350,
  },
});

export default styles;
