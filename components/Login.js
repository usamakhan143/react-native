import {Button, Text, TextInput, View} from 'react-native';
import styles from '../styles/styles';
import {useState} from 'react';

export default Login = () => {
  const [username, setUsername] = useState('required');
  const [password, setPassword] = useState('required');

  const clearAll = () => {
    setUsername('');
    setPassword('');
  };
  return (
    <View style={styles.mainLogin}>
      <Text style={styles.mainHeading}>Login</Text>
      <TextInput
        style={styles.textInputs}
        placeholder="Enter your username"
        onChangeText={val => setUsername(val)}
        value={username}
      />
      <Text style={styles.validationErrors}>This username is {username}</Text>
      <TextInput
        style={styles.textInputs}
        placeholder="Enter your password"
        onChangeText={val => setPassword(val)}
        value={password}
      />
      <Text style={styles.validationErrors}>This password is {password} </Text>
      <Button title="Login" onPress={clearAll} />
    </View>
  );
};
