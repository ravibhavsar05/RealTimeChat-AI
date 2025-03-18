import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackRoutesAndParams } from '@xyz/authorised/routes';
import { HomeRoutes } from '@xyz/authorised/routes/enums';
import { Home } from '@xyz/authorised/screens';
import defaultHeaderOptions from '@xyz/defaults/defaultHeaderOptions';
import React from 'react';



const Stack = createStackNavigator<HomeStackRoutesAndParams>();

export default function HomeStack() {
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
            height: 0
          },
          elevation: 0,
          
        }
      }}
      initialRouteName={HomeRoutes.HOME}>
      <Stack.Screen
        name={HomeRoutes.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
}

