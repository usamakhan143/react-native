/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import styles from "../../styles/styles";

class Stateincomponent extends Component {

    constructor() {
        // Every time state should be defined in constructor
        super();
        this.state = {
            name: 'Name',
            age: null
        };
    }

    changeName = () => {
        this.setState({ name: 'Usama' });
        this.setState({ age: 24 });
    }

    render() {
        return (
            <View>
                <Text style={styles.mainHeading}>Using States In Class Components</Text>
                <Text style={Stateincomponentstyle.states}>Hello, {this.state.name}</Text>
                {this.state.age !== null ? <Text style={Stateincomponentstyle.states}>Your age is {this.state.age}</Text> : <Text></Text>}
                <Button title="Update" onPress={this.changeName} />
            </View>
        );
    }
}


const Stateincomponentstyle = StyleSheet.create({
    box: {
        margin: 10,
        backgroundColor: 'yellow'
    },
    states: {
        color: '#000',
        fontSize: 18,
        textAlign: "center"
    }
});

export default Stateincomponent;