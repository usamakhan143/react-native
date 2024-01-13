/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { ActivityIndicator, Button, Text, View } from "react-native";
import styles from "../styles/styles";
import { useState } from "react";

const ActivityIndicatorloader = () => {
    const [loading, setLoading] = useState(false);

    const displayLoader = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }

    return (
        <View style={styles.textBox}>
            <Text style={[styles.mainHeading, { color: '#fff' }]}>Activity Indicator</Text>
            {loading ? <ActivityIndicator size={100} color={'#fff'} animating={loading} style={{ marginBottom: 30 }} /> : null}
            <Button title="Indicator" onPress={displayLoader} />
        </View >
    );
}

export default ActivityIndicatorloader;