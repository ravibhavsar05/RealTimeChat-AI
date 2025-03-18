import { createStackNavigator } from '@react-navigation/stack';
import { DetailsStackRoutesAndParams } from '@xyz/authorised/routes';
import { DetailsRoutes } from '@xyz/authorised/routes/enums';

import { Details } from '@xyz/authorised/screens';
import defaultHeaderOptions from '@xyz/defaults/defaultHeaderOptions';
import React from 'react';
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


const Stack = createStackNavigator<DetailsStackRoutesAndParams>();

export default function DetailsStack() {
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
      initialRouteName={DetailsRoutes.DETAILS}>
      <Stack.Screen
        name={DetailsRoutes.DETAILS}
        component={Details}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
}

