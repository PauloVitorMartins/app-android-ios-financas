import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, Text } from 'react-native';
const LoginScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const handleLogin = () => {
    navigation.navigate('Home', { nome });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8000ff',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
export default LoginScreen;