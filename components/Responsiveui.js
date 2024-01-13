/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from "react-native";
import styles from "../styles/styles";

const Responsiveui = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={flexstyle.box}>
                <View style={flexstyle.box1}></View>
                <View style={[flexstyle.box1, flexstyle.box2]}></View>
                <View style={[flexstyle.box1, flexstyle.box3]}></View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
                <View style={[flexstyle.box1, flexstyle.box4]}></View>
                <View style={[flexstyle.box1, flexstyle.box4]}></View>
                <View style={[flexstyle.box1, flexstyle.box4]}></View>
                <View style={[flexstyle.box1, flexstyle.box4]}></View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
        </View>
    );
}

const flexstyle = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection: 'row'
    },
    box1: {
        flex: 1,
        margin: 10,
        backgroundColor: 'green'
    },
    box2: {
        backgroundColor: 'pink',
    },
    box3: {
        backgroundColor: 'purple',
    },
    box4: {
        backgroundColor: 'white',
    },
});

export default Responsiveui;