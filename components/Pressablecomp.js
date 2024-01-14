/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
const { View, Text, Pressable, StyleSheet } = require("react-native");
const { default: styles } = require("../styles/styles");

const Pressablecomp = () => {
    return (
        <View style={styles.mainLogin}>
            <Text style={styles.mainHeading}>Pressable in React Native</Text>
            <Pressable
                onPress={() => console.warn('Normal Press')}
            >
                <Text style={stylePressable.pressableBtn}>Normal Press</Text>
            </Pressable>

            <Pressable
                onLongPress={() => console.warn('Long Press')}
            >
                <Text style={stylePressable.pressableBtn}>Long Press</Text>
            </Pressable>

            <Pressable
                onPressIn={() => console.warn('Press In')}
            >
                <Text style={stylePressable.pressableBtn}>Press In</Text>
            </Pressable>


            <Pressable
                onPressOut={() => console.warn('Press Out')}
            >
                <Text style={stylePressable.pressableBtn}>Press Out</Text>
            </Pressable>
        </View>
    );
}

const stylePressable = StyleSheet.create({
    pressableBtn: {
        backgroundColor: 'blue',
        color: '#fff',
        fontSize: 20,
        padding: 10,
        borderRadius: 4,
        margin: 10,
        textAlign: 'center',
        shadowColor: '#000',
        elevation: 10
    }
});

export default Pressablecomp;