import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { AntDesign } from '@expo/vector-icons';


export default function AddTask(props) {
  const listSt = useSelector(states => states);
  const type = props.type;
  const typeName = props.typeName;
  const dispatch = useDispatch();
 
  let [label, setLabel] = useState(undefined);
  let [value,setValue] = useState(undefined);
  let [date, setDate] = useState(undefined);

  const handleLabel = (event) => {
    setLabel(event);
  }

  const handleValue = (event) => {
    setValue(Number(event));
  }

  const handleType = (event) => {
    setType(Number(event));
  }

  const handleDate = (event) => {
    setDate(event);
  }

  const handlSub = (id) => {
    if (label === undefined && date === undefined) {
      alert('prencha a label ou a date');
      return 'gg';
    }
    if (value === undefined || 0 || '') {
      alert('prencha o value');
      return 'gg';
    }
    else {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          id: listSt.length + 2,
          label,
          value,
          date,
          type,
        }
      })
      setLabel('')
      setValue('')
      setDate('')
    }
    }

 return (
  <ScrollView horizontal={true}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Adicione uma {typeName}</Text>
      <TextInput value={label} onChangeText={handleLabel} placeholder={typeName} style={styles.inputOne}/>
      <TextInput value={date} onChangeText={handleDate} placeholder='Data use formato DD/MM/YY' style={styles.inputOne}/>
      <TextInput value={value} onChangeText={handleValue} placeholder='valor, use numeros camarada' style={styles.inputOne}/>
      <TouchableOpacity style={styles.buttonPlus}onPress={handlSub}>
        <View><AntDesign name='pluscircle' size={26} color="#000"/></View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    width: 250,
    marginStart: 14,
    borderRadius: 22,
    borderColor: "#DADADA",
    marginEnd: 14,
    borderWidth: 1,
    padding: 5,
  },
  title: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  buttonPlus: {
    marginBottom: 5,
  },
  inputOne: {
    marginBottom: 5,
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
  }
});