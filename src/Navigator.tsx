import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationRef} from '@src/utils/helpers';
import AuthView from '@src/views/AuthView';
import MainView from '@src/views/MainView';

const {Navigator, Screen} = createNativeStackNavigator();
const isAuthorized = true;

export const Navigation = () => (
  <NavigationContainer ref={navigationRef}>
    <Navigator initialRouteName="Home">
      <Screen name="Auth" component={AuthView} />
      <Screen name="Home" component={MainView} />
    </Navigator>
  </NavigationContainer>
);
