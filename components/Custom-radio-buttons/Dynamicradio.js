/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/styles";

const Dynamicradio = () => {

    let radioButtons = [
        { id: 1, name: 'Radio 1' },
        { id: 2, name: 'Radio 2' },
        { id: 3, name: 'Radio 3' },
        { id: 4, name: 'Radio 4' },
        { id: 5, name: 'Radio 5' }
    ];

    const [selectedRadio, setSelectedRadio] = useState(1);

    return (
        <View>
            <Text style={styles.mainHeading}>Dynamic Radio Buttons</Text>
            <View style={radioStyle.main}>
                {radioButtons.map(item => {
                    return (<TouchableOpacity onPress={() => setSelectedRadio(item.id)}>
                        <View style={radioStyle.radioWrapper}>
                            <View style={radioStyle.radio}>
                                {selectedRadio === item.id ? <View style={radioStyle.radioBg}></View> : null}
                            </View>
                            <Text style={radioStyle.radioText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>);
                })}
            </View>
        </View>
    );
}

const radioStyle = StyleSheet.create({

    main: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radio: {
        borderWidth: 2,
        borderColor: '#000',
        width: 30,
        height: 30,
        borderRadius: 15,
        margin: 10
    },
    radioBg: {
        backgroundColor: 'red',
        height: 22,
        width: 22,
        borderRadius: 12.5,
        margin: 2
    },
    radioText: {
        fontSize: 18
    },

});

export default Dynamicradio;