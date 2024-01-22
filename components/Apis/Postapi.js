/* eslint-disable jsx-quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Button, StyleSheet, Text, View } from "react-native";
import styles from "../../styles/styles";
import { useState } from "react";

const Postapi = () => {

    const [user, setUser] = useState(undefined);

    const addUser = async () => {

        const userData = {
            name: "Shakoor1",
            email: "1shakoor@admin.com",
            role: "admin",
            status: 1
        }

        const url = "https://test.visech.com/api/create-user";
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
        result = await result.json();
        console.warn(result.message);
        setUser(result.data);
    }

    return (
        <View style={{ margin: 20, flex: 1 }}>
            <Text style={styles.mainHeading}>Hardcoded Post API in React Native</Text>
            {user ? <User responseData={user} /> : null}
            <Button title='Add User' onPress={addUser} />
        </View>
    );
}

const User = (props) => {
    const { id, status, name, userName, email, role } = props.responseData;
    return (
        <View style={{ padding: 15, backgroundColor: 'orange', borderRadius: 15, marginBottom: 10 }}>
            <Text style={{ color: '#fff', fontWeight: '800', fontSize: 24, paddingBottom: 10 }}>User Data</Text>
            <Text style={UserStyle.data}>Name: {name}</Text>
            <Text style={UserStyle.data}>Username: {userName}</Text>
            <Text style={UserStyle.data}>Email: {email}</Text>
            <Text style={UserStyle.data}>Role: {role}</Text>
            <Text style={UserStyle.data}>Status: {status == 1 ? 'Enable' : 'Disable'}</Text>
        </View>
    );
}

const UserStyle = StyleSheet.create({
    data: {
        color: '#fff',
        fontSize: 20,
        paddingBottom: 5
    },
});

export default Postapi;