/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/styles";
import { useState } from "react";


const Modalcustom = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <View style={{ flex: 1 }}>

            {openModal ?
                <View style={customModalStyle.modal}>
                    <View style={customModalStyle.modalBody}>
                        <Text style={customModalStyle.modalHeading}>Custom Modal</Text>
                        <Text style={customModalStyle.descriptionText}>Are you sure you want to proceed?</Text>

                        <TouchableOpacity onPress={() => setOpenModal(false)} style={customModalStyle.closeButton}>
                            <Text style={customModalStyle.closeButtonText}>X</Text>
                        </TouchableOpacity>
                        <Button title="Close Modal" onPress={() => setOpenModal(false)} />
                    </View>
                </View>
                : null}
            <Text style={styles.mainHeading}>Custom Modal in React Native</Text>
            <Button title="Open Modal" onPress={() => setOpenModal(true)} />
        </View>
    );
}

const customModalStyle = StyleSheet.create({
    modal: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBody: {
        backgroundColor: '#fff',
        height: 200,
        width: 300,
        borderRadius: 10,
        shadowColor: 'blue',
        elevation: 5,
        padding: 20
    },
    modalHeading: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 600
    },
    descriptionText: {
        fontSize: 18,
        color: 'gray',
        fontWeight: 400,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 5,
    },
    closeButtonText: {
        fontSize: 18,
        fontFamily: 'poppins',
        fontWeight: 'bold',
    },
});

export default Modalcustom;