/* eslint-disable react/react-in-jsx-scope */

import styles from "../../styles/styles";

/* eslint-disable prettier/prettier */
const { View, Text, StyleSheet } = require("react-native");

const Home = (props) => {

    const { name, age, martialStatus } = props.route.params;
    return (
        <View style={homeStyle.main}>
            <Text>Home Screen</Text>
            <Text style={homeStyle.text}>Name: {name}</Text>
            <Text style={homeStyle.text}>Age: {age}</Text>
            <Text style={homeStyle.text}>Martial Status: {martialStatus}</Text>
        </View>
    );
}

const homeStyle = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        color: '#000',
        fontSize: 22
    }
});

export default Home;