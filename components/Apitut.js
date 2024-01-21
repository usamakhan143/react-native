/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import styles from "../styles/styles";


const Apitut = () => {

    const [data, setData] = useState(undefined);

    const getData = async () => {

        const apiUrl = "https://test.visech.com/api/jobs";
        const result = await fetch(apiUrl);
        let response = await result.json();
        setData(response.data);

    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View>
            <Text style={styles.mainHeading}>APIs In React Native</Text>
            {data ?
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Jobs list={item} />}
                /> :
                <ActivityIndicator animating={true} size={'large'} />}
        </View>
    );
}


const Jobs = (props) => {
    const data = props.list;
    return (
        <View style={Loopstyle.box}>
            <Text style={Loopstyle.item}>{data.jobNumber}</Text>
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

export default Apitut;