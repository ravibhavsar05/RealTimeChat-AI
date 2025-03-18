import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  UnAuthorisedRoutes,
  UnAuthorisedStackRoutesAndParams,
} from '@xyz/un-authorised/routes';
import {Animated, Easing, Image, SafeAreaView, Text, View} from 'react-native';
import Screen from '@xyz/components/Screen';

import {AccountStatus, TextForLines} from '@xyz/enum';
import {ButtonBlackWhite} from '@xyz/components';
import styles from './styles';
import {LogoTransparent} from '@xyz/assets/Images';
import {setAppAccountStatus} from '@xyz/common/slices/app';
import {useDispatch} from 'react-redux';

interface Props {
  navigation: StackNavigationProp<
    UnAuthorisedStackRoutesAndParams,
    UnAuthorisedRoutes.ONBOARDING
  >;
}

export default function Onboarding({navigation}: Props) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const dispatch: any = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, // half-second fade-in
      easing: Easing.inOut(Easing.ease), // Smooth easing
      useNativeDriver: true, // Better performance
    }).start();
  }, [fadeAnim]);

  const redirectToClothsList = () => {
    navigation.navigate(UnAuthorisedRoutes.CLOTHS_LIST);
  };

  const redirectToLogin = () => {
    navigation.navigate(UnAuthorisedRoutes.LOGIN);
  };
  const redirectToSignUp = () => {
    navigation.navigate(UnAuthorisedRoutes.SIGN_UP);
  };

  const redirectToChatWithAI = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      let accountStatus: any = AccountStatus.AUTHORISED;
      dispatch(setAppAccountStatus(accountStatus));
    }, 2000);
  };

  return (
    <>
      <Screen keyboardAware={false} disableScroll>
        <SafeAreaView style={{flex: 1}}>
          <Animated.View style={{opacity: fadeAnim, flex: 1}}>
            <View style={styles.mainView}>
              <Image source={LogoTransparent} style={styles.image} />
              <Text style={styles.text}>{TextForLines.TEXT_FOR_LINES_1}</Text>
              <View style={styles.btnView}>
                {/* <ButtonBlackWhite
                  text="TRY WITHOUT AN ACCOUNT"
                  loading={false}
                  onPress={redirectToClothsList}
                />
                <ButtonBlackWhite
                  text="SIGN UP"
                  loading={false}
                  onPress={redirectToSignUp}
                />
                <ButtonBlackWhite
                  text="LOGIN"
                  loading={false}
                  onPress={redirectToLogin}
                /> */}
                <ButtonBlackWhite
                  text="CHAT WITH AI"
                  loading={loading}
                  onPress={redirectToChatWithAI}
                />
              </View>
            </View>
          </Animated.View>
        </SafeAreaView>
      </Screen>
    </>
  );
}
