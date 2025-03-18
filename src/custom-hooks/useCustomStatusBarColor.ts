import {useCallback} from 'react';
import {Platform, StatusBar, StatusBarStyle} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';


/**
 * Custom React hook that sets the status bar content to white
 */
export default function useCustomStatusBarColor(barStyle: StatusBarStyle) {
  useFocusEffect(
    useCallback(() => {
      if (Platform?.OS === 'ios') {
        StatusBar.setBarStyle(barStyle);
      }
    }, [barStyle]),
  );
}
