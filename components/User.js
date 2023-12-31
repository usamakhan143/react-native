/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import styles from '../styles/styles';

// Working on flatlist.

const usersData = [
  {id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com'},
  {id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com'},
  {id: 3, name: 'Bob Johnson', age: 28, email: 'bob.johnson@example.com'},
  {id: 4, name: 'Alice Brown', age: 22, email: 'alice.brown@example.com'},
  {id: 5, name: 'Charlie Davis', age: 35, email: 'charlie.davis@example.com'},
  {id: 6, name: 'Eva Wilson', age: 29, email: 'eva.wilson@example.com'},
  {id: 7, name: 'Frank Miller', age: 32, email: 'frank.miller@example.com'},
  {id: 8, name: 'Grace Robinson', age: 27, email: 'grace.robinson@example.com'},
  {id: 9, name: 'Henry Turner', age: 31, email: 'henry.turner@example.com'},
  {id: 10, name: 'Ivy White', age: 26, email: 'ivy.white@example.com'},
  {id: 11, name: 'Jack Taylor', age: 24, email: 'jack.taylor@example.com'},
  {id: 12, name: 'Kelly Harris', age: 33, email: 'kelly.harris@example.com'},
  {id: 13, name: 'Leo Martinez', age: 28, email: 'leo.martinez@example.com'},
  {id: 14, name: 'Mia Clark', age: 23, email: 'mia.clark@example.com'},
  {id: 15, name: 'Nathan Walker', age: 30, email: 'nathan.walker@example.com'},
  {id: 16, name: 'Olivia Reed', age: 29, email: 'olivia.reed@example.com'},
  {id: 17, name: 'Peter King', age: 34, email: 'peter.king@example.com'},
  {id: 18, name: 'Quinn Carter', age: 27, email: 'quinn.carter@example.com'},
  {id: 19, name: 'Ryan Foster', age: 26, email: 'ryan.foster@example.com'},
  {id: 20, name: 'Sara Hill', age: 31, email: 'sara.hill@example.com'},
  // Add more user objects as needed
];

const User = props => {
  return (
    <View style={{backgroundColor: 'yellow', padding: 10}}>
      <FlatList
        data={usersData}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={[styles.column, {width: '80%'}]}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.email}</Text>
            </View>
            <View style={[styles.column, {width: '20%'}]}>
              <Button title="GO" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default User;
