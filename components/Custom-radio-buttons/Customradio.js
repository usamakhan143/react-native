/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/styles";

const Customradio = () => {

    const [selectedRadio, setSelectedRadio] = useState(1);

    return (
        <View>
            <Text style={styles.mainHeading}>Custom Radio Buttons</Text>
            <View style={radioStyle.main}>
                <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                    <View style={radioStyle.radioWrapper}>
                        <View style={radioStyle.radio}>
                            {selectedRadio === 1 ? <View style={radioStyle.radioBg}></View> : null}
                        </View>
                        <Text style={radioStyle.radioText}>Radio 1</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                    <View style={radioStyle.radioWrapper}>
                        <View style={radioStyle.radio}>
                            {selectedRadio === 2 ? <View style={radioStyle.radioBg}></View> : null}
                        </View>
                        <Text style={radioStyle.radioText}>Radio 2</Text>
                    </View>
                </TouchableOpacity>
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

export default Customradio;