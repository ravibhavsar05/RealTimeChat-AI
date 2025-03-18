import {colors} from '@xyz/style-guide';
import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

interface Styles {
  constain: ViewStyle;
  bg: ImageStyle;
  backButton: ViewStyle;
  view: ViewStyle;
  subView: ViewStyle;
  image: ImageStyle;
  imgView: ViewStyle;
  inputView: ViewStyle;
  inputEmial:ViewStyle;
  inputPassword:ViewStyle;
  textDntHv:TextStyle;
  textDntHvSignUp:TextStyle;
}

const styles = StyleSheet.create<Styles>({
  constain: {
    backgroundColor: colors.greys.black,
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  backButton: {
    marginRight: 'auto',
    paddingTop: '15%', // Pushes ViewSelector to the right
  },
  view: {flex: 1, justifyContent: 'flex-end'},
  subView: {
    backgroundColor: colors.greys.white,
    height: '70%',
    borderTopLeftRadius: 100,
    
  },
  image: {
    height: 200,
    width: 200,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 50,
    marginBottom: 40,
  },
  imgView: {
    alignItems: 'center',
  },
  inputView: {
    // justifyContent: 'center',
    marginHorizontal: '4%',
    marginTop: '16%',
    alignItems: 'center',
  },
  inputEmial:{width: '100%',marginTop: "20%",},
  inputPassword:{width: '100%',marginTop: "10%",},
  textDntHv:{textAlign: 'center',marginTop: 20,fontSize: 16,},
  textDntHvSignUp:{color: colors.greys.black,fontSize: 16,},
});

export default styles;
