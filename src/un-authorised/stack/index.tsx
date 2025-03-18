import React, {lazy} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UnAuthorisedRoutes, UnAuthorisedStackRoutesAndParams} from '../routes';
import defaultHeaderOptions from '@xyz/defaults/defaultHeaderOptions';
import {Platform} from 'react-native';
import { SignUp } from '../screens';

const Login = lazy(() => import('../screens/Login'));
const Onboarding = lazy(() => import('../screens/Onboarding'));
const ClothsList = lazy(() => import('../screens/ClothsList'));

export default function UnAuthorisedStack() {
  const Stack = createStackNavigator<UnAuthorisedStackRoutesAndParams>();
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName={UnAuthorisedRoutes.ONBOARDING}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          borderBottomWidth: 0,
          ...(Platform.OS === 'ios'
            ? {shadowColor: 'transparent'}
            : {elevation: 0}),
        },
      }}>
      <Stack.Screen
        name={UnAuthorisedRoutes.LOGIN}
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={UnAuthorisedRoutes.SIGN_UP}
        component={SignUp}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={UnAuthorisedRoutes.ONBOARDING}
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={UnAuthorisedRoutes.CLOTHS_LIST}
        component={ClothsList}
        options={{
          ...defaultHeaderOptions,
          headerShown: true,
          animation: 'fade', // Fade animation for Details
          headerStyle: {
            borderWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              width: 0,
              height: 0
            },
            elevation: 0,
            
          }
        }}
      />
    </Stack.Navigator>
  );
}
