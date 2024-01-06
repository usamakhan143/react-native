/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';

const User = (props) => {

    const item = props.item;

    return (

        <View style={Loopstyle.box}>
            <Text style={Loopstyle.item}>{item.name}</Text>
            <Text style={Loopstyle.item}>{item.email}</Text>
        </View>
    );
}

const Loopstyle = StyleSheet.create({
    box: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'red',
        margin: 10
    },

    item: {
        flex: 1,
        fontSize: 18,
        color: '#fff',
        margin: 5,
        textAlign: 'center',
        backgroundColor: 'green',
        padding: 10
    }
});

export default User;