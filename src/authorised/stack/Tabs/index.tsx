import {TabRoutes, TabStackRoutesAndParams} from '@xyz/authorised/routes';
import React from 'react';
import {View} from 'react-native';

import {Icon} from 'react-native-paper';
import {colors} from '@xyz/style-guide';
import styles from './styles';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {TabBar} from '@xyz/authorised/components';
import ProfileStack from '../Profile';
import DetailsStack from '../Details';
import HomeStack from '../Home';

const Tab = createBottomTabNavigator<TabStackRoutesAndParams>();

export default function TabsStack() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        id={undefined}
        // tabBarOptions={{ activeTintColor: colors.yellows.default }}
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
        <Tab.Screen
          name={TabRoutes.HOME}
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon size={20} source="home" color={color} />
            ),
          }}
        />

        <Tab.Screen
          name={TabRoutes.PROFILE}
          component={ProfileStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <Icon size={20} source="account" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={TabRoutes.DETAILS}
          component={DetailsStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Details',
            tabBarIcon: ({color}) => (
              <Icon size={20} source="clipboard-text-outline" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
