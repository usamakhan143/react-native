/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Button, Text, View } from "react-native";
import styles from "../styles/styles";
import { useEffect, useState } from "react";

const Togglecom = () => {

    const [show, setShow] = useState(true);

    return (
        <View style={{ margin: 10, backgroundColor: 'yellow', padding: 15 }}>
            <Text style={styles.mainHeading}>Show / Hide Component</Text>
            {show ? <User /> : null}
            <Button title="Show / Hide" onPress={() => setShow(!show)} />
        </View>
    );
}

const User = () => {

    useEffect(() => {
        console.warn('Mounted!');
        return () => {
            console.warn('Unmounted.');
        }
    });

    return (
        <View style={{ margin: 10, backgroundColor: 'blue', padding: 15 }}>
            <Text style={styles.text}>Users Details</Text>
        </View>
    );
}

export default Togglecom;