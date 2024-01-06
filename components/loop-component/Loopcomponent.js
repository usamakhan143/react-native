/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from '../../styles/styles';
import User from './User';

const Loopcomponent = () => {
    const students = [
        { id: 1, name: 'Usama', email: 'usama@ab.com' },
        { id: 2, name: 'Mubbashir', email: 'mubbashir@ab.com' },
        { id: 3, name: 'Basit', email: 'basit@ab.com' },
        { id: 4, name: 'Ali', email: 'ali@ab.com' },
    ];

    return (
        <View>
            <Text style={styles.mainHeading}>Component in Loop with Flatlist</Text>
            <FlatList
                data={students}
                renderItem={({ item }) => <User item={item} />} />
        </View>
    );
};

// This is a component
// const UserData = (props) => {
//     return (
//         <View style={Loopstyle.box}>
//             <Text style={Loopstyle.item}>{props.name}</Text>
//             <Text style={Loopstyle.item}>{props.email}</Text>
//         </View>
//     );
// }


// const Loopstyle = StyleSheet.create({
//     box: {
//         flexDirection: 'row',
//         borderWidth: 1,
//         borderColor: 'red',
//         margin: 10
//     },

//     item: {
//         flex: 1,
//         fontSize: 18,
//         color: '#fff',
//         margin: 5,
//         textAlign: 'center',
//         backgroundColor: 'green',
//         padding: 10
//     }
// });

export default Loopcomponent;
