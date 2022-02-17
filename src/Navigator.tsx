import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationRef} from '@src/utils/helpers';
import AuthView from '@src/views/AuthView';
import MainView from '@src/views/MainView';

const {Navigator, Screen} = createNativeStackNavigator();
const isAuthorized = false;

export const Navigation = () => (
  <NavigationContainer ref={navigationRef}>
    <Navigator initialRouteName={isAuthorized ? 'Home' : 'Auth'}>
      {!isAuthorized && <Screen name="Auth" component={AuthView} />}
      {isAuthorized && <Screen name="Home" component={MainView} />}
    </Navigator>
  </NavigationContainer>
);
