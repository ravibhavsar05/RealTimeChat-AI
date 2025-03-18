import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import {AuthorisedRoutes, AuthorisedStackRoutesAndParams} from '../routes';
import defaultHeaderOptions from '@xyz/defaults/defaultHeaderOptions';

const Stack = createStackNavigator<AuthorisedStackRoutesAndParams>();

export default function AuthorisedStack() {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        ...defaultHeaderOptions,
        headerShown: false,
        animation: 'fade', // Fade animation for Details
        headerStyle: {
          borderWidth: 0,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          elevation: 0,
        },
      }}
      // initialRouteName={initialRoute}>
      initialRouteName={AuthorisedRoutes.TABS}>
      <Stack.Screen
        options={{headerShown: false}}
        name={AuthorisedRoutes.TABS}
        component={Tabs}
      />
    </Stack.Navigator>
  );
}
