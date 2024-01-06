/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { SectionList, StyleSheet, Text, View } from 'react-native';
import styles from '../../styles/styles';

const Sectionlistcustom = () => {
    const teachers = [
        {
            id: 1,
            name: 'Ustaad',
            data: ['I-B', 'I-A', 'I-C'],
        },
        {
            id: 2,
            name: 'Ustaad 2',
            data: ['II-B', 'II-A', 'II-C'],
        },
        {
            id: 3,
            name: 'Ustaad 3',
            data: ['III-B', 'III-A', 'III-C'],
        },
    ];

    return (
        <View>
            <Text style={styles.mainHeading}>Section List in React Native</Text>
            <SectionList
                style={sectionListStyle.box}
                sections={teachers}
                renderItem={({ item }) => <Text style={sectionListStyle.classes}>{item}</Text>}
                renderSectionHeader={({ section: { name } }) => <Text style={sectionListStyle.header}>{name}</Text>}
            />
        </View>
    );
};


const sectionListStyle = StyleSheet.create({
    box: {
        margin: 10,
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 15
    },

    header: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 800,
        paddingTop: 10
    },

    classes: {
        color: 'black',
        fontSize: 18
    }
});

export default Sectionlistcustom;
