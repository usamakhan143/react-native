/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Button, StyleSheet, Text, View } from "react-native";

const Login = (props) => {
    return (
        <View style={loginStyle.main}>
            <Text>Login Screen</Text>
            <Button title="Goto Home Screen" onPress={() => props.navigation.navigate('Home')} />
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