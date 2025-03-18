import React, {useRef, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  UnAuthorisedRoutes,
  UnAuthorisedStackRoutesAndParams,
} from '@xyz/un-authorised/routes';
import styles from './styles';
import {Image, ImageBackground, View} from 'react-native';
import Screen from '@xyz/components/Screen';

import HeaderBackButton from '@xyz/components/HeaderBackButton';
import {colors} from '@xyz/style-guide';

import {ButtonBlackWhite} from '@xyz/components';
import {Input, InputField, Text} from '@xyz/component-library';
import {BG, XYZ} from '@xyz/assets/Images';
import {AccountStatus} from '@xyz/enum';
import {useDispatch} from 'react-redux';
import {setAppAccountStatus} from '@xyz/common/slices/app';

interface Props {
  navigation?: StackNavigationProp<
    UnAuthorisedStackRoutesAndParams,
    UnAuthorisedRoutes.LOGIN
  >;
}

export default function Login({navigation}: Props) {
  const [email, setEmail] = useState<string>('test@gmail.com');
  const [password, setPassword] = useState<string>('123456');
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch: any = useDispatch();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email?.length > 0 && password?.length > 0) {
        let accountStatus: any = AccountStatus.AUTHORISED;
        dispatch(setAppAccountStatus(accountStatus));
      }
    }, 2000);
  };

  return (
    <>
      <Screen keyboardAware={true} disableScroll removePadding>
        <View style={styles.constain}>
          <ImageBackground source={BG} style={styles.bg}>
            <HeaderBackButton
              tintColor={colors.greys.white}
              style={styles.backButton}
              iconSize={25}
            />

            <View style={styles.view}>
              <View style={styles.imgView}>
                <Image source={XYZ} style={styles.image} />
              </View>
              <View style={styles.subView}>
                <View style={styles.inputView}>
                  <Text h2>Login</Text>
                  <Input
                    ref={emailRef}
                    onChange={setEmail}
                    value={email}
                    keyboardType="email-address"
                    label="Email"
                    style={styles.inputEmial}
                    testID="email"
                  />
                  <InputField
                    ref={passwordRef}
                    onChange={setPassword}
                    value={password}
                    keyboardType="default"
                    label="Password"
                    style={styles.inputPassword}
                    secureTextEntry={true}
                    mode="outlined"
                    // textContentType="password"
                    testID="password"
                  />

                  <ButtonBlackWhite
                    text="LOGIN"
                    loading={loading}
                    onPress={handleLogin}
                    style={{marginTop: 30}}
                    blackBG
                    testID="login-button"
                  />

                  <Text style={styles.textDntHv}>
                    Don't have an account?{' '}
                    <Text style={styles.textDntHvSignUp}>Sign up</Text>
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Screen>
    </>
  );
}
