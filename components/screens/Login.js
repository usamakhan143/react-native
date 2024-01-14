/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Login = (props) => {

    const name = "Usama";
    const age = 24;
    const [martialStatus, setMartialStatus] = useState("Single");

    useEffect(() => {
        if (martialStatus === "Mingle") {
            props.navigation.navigate('Home', { name, age, martialStatus });
        }

        return () => {
            setMartialStatus("Single")
        }
    }, [martialStatus]);


    return (
        <View style={loginStyle.main}>
            <Text>Login Screen</Text>
            <Text>{martialStatus}</Text>
            <Button title="Goto Home Screen" onPress={() => setMartialStatus("Mingle")} />
        </View>
    );
}


const loginStyle = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

export default Login;