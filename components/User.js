/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles';

const User = props => {
  return (
    <View style={{backgroundColor: 'yellow', padding: 10}}>
      <Text style={styles.textBox}>Name: {props.name}</Text>
      <Text style={styles.textBox}>Age: {props.age}</Text>
    </View>
  );
};

export default User;
