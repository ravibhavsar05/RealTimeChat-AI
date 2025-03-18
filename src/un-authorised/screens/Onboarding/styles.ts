import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface Styles {
image:ImageStyle,
mainView:ViewStyle,
text:TextStyle,
btnView:ViewStyle
}

const styles = StyleSheet.create<Styles>({
  image: {
   height: 300,
   width: 300,
  },
  mainView:{alignItems: 'center', flex: 1},
  text:{
    fontWeight: '500',
    textAlign: 'center',
    width: '90%',
    fontSize: 36,
    fontFamily:"DancingScript-Regular"
  },
  btnView:{flex: 1, justifyContent: 'flex-end', width: '100%'}
 
});

export default styles;
