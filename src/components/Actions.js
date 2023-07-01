import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AddTask from './AddTask';

export default function Actions() {
 const [showAddTask, setShowAddTask] = useState(false);
 const [type, setType] = useState(0);
 const [typeName, setTypeName] = useState("Entrada");

 return (
    <>
   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
      <TouchableOpacity onPress={() => { setTypeName('Entrada'); setType(1); setShowAddTask(!showAddTask); }} style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name='addfolder' size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setTypeName('Compra'); setType(0); setShowAddTask(!showAddTask); }} style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name='tagso' size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setTypeName('Conta ganha'); setType(1); setShowAddTask(!showAddTask); }} style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name='creditcard' size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { setTypeName('Conta boleto'); setType(0); setShowAddTask(!showAddTask); }} style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name='barcode' size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name='setting' size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Settings</Text>
      </TouchableOpacity>

    </ScrollView>
    { showAddTask === true ? <AddTask type={type} typeName={typeName}/> : <View></View> }
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        maxHeight: 200,
        marginBottom: 5,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32,
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})