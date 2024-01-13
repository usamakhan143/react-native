/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from "react";
import { Button, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import styles from "../styles/styles";


const Custombutton = () => {
    return (
        <View>
            <Text style={styles.mainHeading}>Custom Buttons</Text>
            <TouchableHighlight>
                <Text style={Custombtnstyles.Custombtn}>Submit</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[Custombtnstyles.Custombtn, Custombtnstyles.danger]}>Danger</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[Custombtnstyles.Custombtn, Custombtnstyles.primary]}>Primary</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[Custombtnstyles.Custombtn, Custombtnstyles.warning]}>Primary</Text>
            </TouchableHighlight>
            <Button title="Done" />
        </View>
    );
}


const Custombtnstyles = StyleSheet.create({
    Custombtn: {
        backgroundColor: "#0c9",  //#0c9 is a shade of
        color: 'white',
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 600,
        margin: 10,
        borderRadius: 8,
        shadowColor: 'red',
        elevation: 10,
        shadowOpacity: 0.5
    },
    danger: {
        backgroundColor: 'red'
    },
    primary: {
        backgroundColor: 'blue'
    },
    warning: {
        backgroundColor: 'gold'
    }
});

export default Custombutton;