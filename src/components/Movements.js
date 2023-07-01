import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useDispatch} from 'react-redux';

export default function Movements(props) {
 let data = props.data;
 const [showValue, setShowValue] = useState(false);
 let funcShow = () => {
   setShowValue(!showValue)
 }

 const dispatch = useDispatch();

 const handleDeleteList = (id) => {
  dispatch({
    type: 'DELETE_TASK',
    payload: {
        id,
    }
  });

 }
 return (
   <TouchableOpacity onPress={funcShow} style={styles.container}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}:</Text>
        {showValue === true ? (
            <Text style={data.type === 1 ? styles.value : styles.expensenses}>{data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}</Text>
        ): (
            <View style={styles.ocult}/>
        )}
        <TouchableOpacity onPress={() => handleDeleteList(data.id)}>
        <View style={styles.trash}><Feather size={24} name='trash'/></View>
        </TouchableOpacity>
      </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 18,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'

    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: "#DADADA",
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    expensenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    ocult: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8,
    }
})