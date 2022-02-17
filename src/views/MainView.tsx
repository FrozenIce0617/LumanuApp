import React from 'react';
import {View, Text} from 'react-native';

const MainView: React.FC = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
        }}>
        Main Screen
      </Text>
    </View>
  );
};

export default MainView;
