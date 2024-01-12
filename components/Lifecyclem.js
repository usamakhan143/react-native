/* eslint-disable prettier/prettier */
import { Button, Text, View } from "react-native";
import styles from "../styles/styles";

const { useEffect, useState } = require("react");


const Lifecyclem = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Methods');

    useEffect(() => {
        console.warn('mounted');
    }, [name]);
    return (
        <View style={{ margin: 10 }}>
            <Text style={styles.mainHeading}>Lifecycle {name}</Text>
            <Text style={{ fontSize: 22, textAlign: 'center', padding: 10 }}>The number is {count}</Text>
            <Button title="UP" onPress={() => setCount(count + 1)} />
            <Button title="Change Name" onPress={() => setName('Usama')} />
        </View>
    );
}

export default Lifecyclem;