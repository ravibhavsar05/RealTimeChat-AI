//import liraries
import {NavigationContainer} from '@react-navigation/native';
import {getActiveRouteName} from '@xyz/helpers';
import React, {Component, useMemo, useRef} from 'react';
import navigationRef from '../navigationRef';
import UnAuthorisedStack from '@xyz/un-authorised/stack';
import {AccountStatus} from '@xyz/enum';
import AuthorisedStack from '@xyz/authorised/stack';
import {useSelector} from 'react-redux';
import { RootState } from '../rootReducer';

// create a component
const AppStack = () => {
  const routeNameRef = useRef(null);
  const {accountStatus} = useSelector((state: RootState) => state.app);
  console.log('accountStatus', accountStatus);

  const onStateChange = (state: any) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);
    if (previousRouteName !== currentRouteName && currentRouteName) {
    }
    routeNameRef.current = currentRouteName;
  };

  const renderStackOrScreen = useMemo(() => {
    switch (accountStatus) {
      case AccountStatus.AUTHORISED:
        return <AuthorisedStack />;
      default:
        return <UnAuthorisedStack />;
    }
  }, [accountStatus]);

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      {renderStackOrScreen}
    </NavigationContainer>
  );
};

export default AppStack;
