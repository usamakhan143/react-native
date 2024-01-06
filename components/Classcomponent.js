/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import styles from "../styles/styles";

class Classcomponent extends Component {
    pressMe = () => {
        // const msg = 'Hello';
        // return msg;
        console.warn('Hello');
    }
    render() {
        return (
            <View style={classCompo.box}>
                <Text style={styles.mainHeading}>Class Component</Text>
                <TextInput placeholder="Username" style={styles.textInputs} />
                <Button title='Submit' onPress={this.pressMe} />
            </View>
        );
    }
}

const classCompo = StyleSheet.create({
    box: {
        margin: 10
    }

});

export default Classcomponent;