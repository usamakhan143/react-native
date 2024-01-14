/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
const { View, Text, StyleSheet } = require("react-native");

const Home = () => {
    return (
        <View style={homeStyle.main}>
            <Text>Home Screen</Text>
        </View>
    );
}

const homeStyle = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

export default Home;