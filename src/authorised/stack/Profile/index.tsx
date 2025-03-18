import { createStackNavigator } from '@react-navigation/stack';
import {ProfileStackRoutesAndParams} from '@xyz/authorised/routes';
import {ProfileRoutes} from '@xyz/authorised/routes/enums';
import {Profile} from '@xyz/authorised/screens';

import defaultHeaderOptions from '@xyz/defaults/defaultHeaderOptions';
import React from 'react';


const Stack = createStackNavigator<ProfileStackRoutesAndParams>();

export default function ProfileStack() {
  return (
    <Stack.Navigator
    id={undefined}
      screenOptions={{
        ...defaultHeaderOptions,
        headerShown: true,
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
      initialRouteName={ProfileRoutes.PROFILE}>
      <Stack.Screen
        name={ProfileRoutes.PROFILE}
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
