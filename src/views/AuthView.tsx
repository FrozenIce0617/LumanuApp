import React from 'react';
import {View, Text} from 'react-native';

const AuthView: React.FC = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
        }}>
        Auth Screen
      </Text>
    </View>
  );
};

export default AuthView;
