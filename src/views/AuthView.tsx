import React from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
  View,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';

const AuthView: React.FC = () => {
  const onLoginPress = () => {};

  const onFbLoginPress = async () => {};
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Lumanu Git App</Text>
            <TextInput
              placeholder="Github Username"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Github Password"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Login"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: 'center',
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});
export default AuthView;
