/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import styles from "../styles/styles";
import { useState } from "react";


const Modaldialogue = () => {

    const [isModal, setIsModal] = useState(false);

    return (
        <View style={styles.mainLogin}>
            <Modal
                visible={isModal}
                transparent={true}
                animationType="fade"
            >
                <View style={Modalstyle.centeredView}>
                    <View style={Modalstyle.modalWrapper}>
                        <Text style={Modalstyle.modalHeading}>Are you sure you want to delete?</Text>
                        <View style={Modalstyle.buttonsWrapper}>
                            <View style={Modalstyle.buttonInnerWrap}>
                                <Button color={'red'} title="No" onPress={() => setIsModal(false)} />
                            </View>
                            <View style={Modalstyle.buttonInnerWrap}>
                                <Button color={'green'} title="Yes" />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <Text style={styles.mainHeading}>React Native Modal</Text>
            <Button title="Open Modal" onPress={() => setIsModal(true)} />
        </View>
    );
}

const Modalstyle = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        opacity: 0.8
    },
    modalWrapper: {
        backgroundColor: '#fff',
        height: 200,
        width: 300,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        shadowColor: 'black',
        elevation: 25,
        padding: 15
    },
    modalHeading: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    },
    buttonInnerWrap: {
        margin: 6,
        justifyContent: 'center',
        height: 50
    }
});

export default Modaldialogue;