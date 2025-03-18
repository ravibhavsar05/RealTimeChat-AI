import React, {useRef, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  UnAuthorisedRoutes,
  UnAuthorisedStackRoutesAndParams,
} from '@xyz/un-authorised/routes';

import {Image, ImageBackground, View} from 'react-native';
import Screen from '@xyz/components/Screen';

import HeaderBackButton from '@xyz/components/HeaderBackButton';
import {colors} from '@xyz/style-guide';

import {ButtonBlackWhite} from '@xyz/components';
import {Icon, Input, InputField, Text} from '@xyz/component-library';
import styles from './styles';
import {BG} from '@xyz/assets/Images';

interface Props {
  navigation: StackNavigationProp<
    UnAuthorisedStackRoutesAndParams,
    UnAuthorisedRoutes.SIGN_UP
  >;
}

export default function SignUp({navigation}: Props) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState<boolean>(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  return (
    <>
      <Screen keyboardAware={true} removePadding>
        <View style={styles.constain}>
          <ImageBackground source={BG} style={styles.bg}>
            <HeaderBackButton
              tintColor={colors.greys.white}
              style={styles.backButton}
              iconSize={25}
            />

            <View style={styles.view}>
              <View style={styles.imgView}>
                <Text h1 style={{color: colors.greys.white}}>
                  Sign Up
                </Text>
              </View>
              <View style={styles.subView}>
                <View style={styles.inputView}>
                  <Input
                    ref={firstNameRef}
                    onChange={setFirstName}
                    value={firstName}
                    keyboardType="default"
                    label="First name"
                    style={styles.inputEmial}
                  />
                  <Input
                    ref={lastNameRef}
                    onChange={setLastName}
                    value={lastName}
                    keyboardType="default"
                    label="Last name"
                    style={styles.inputPassword}
                  />
                  <Input
                    ref={emailRef}
                    onChange={setEmail}
                    value={email}
                    keyboardType="email-address"
                    label="E-mail"
                    style={styles.inputPassword}
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
                  />
                  <InputField
                    ref={confirmPasswordRef}
                    onChange={setConfirmPassword}
                    value={confirmPassword}
                    keyboardType="default"
                    label="Confirm password"
                    style={styles.inputPassword}
                    secureTextEntry={true}
                    mode="outlined"
                    // textContentType="password"
                  />

                  <ButtonBlackWhite
                    text="SIGN UP"
                    loading={false}
                    onPress={() => {}}
                    style={{marginTop: 20}}
                    blackBG
                  />

                  <Text style={styles.textDntHv}>
                    Already have an account?{' '}
                    <Text style={styles.textDntHvSignUp}>Sign in</Text>
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
