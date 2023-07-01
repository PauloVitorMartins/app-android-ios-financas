import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function Balance(props) {
 let { balance, expenses } = props;
 const listSt = useSelector(states => states);

 const [totalExpense, setTotalExpense] = useState(0);
 const [totalBalance, setTotalBalance] = useState(0);
 

 const saldo = listSt.filter((el) => el.type === 1);
 const saldoTotal = saldo.map((el) => el.value);

 const despesa = listSt.filter((el) => el.type === 0);
 const despesasTotais = despesa.map((el) => el.value);

 useEffect(() => {
  if (despesasTotais.length === 0) {
    setTotalExpense(0)
  } else if (despesasTotais.length !== 0) {
    const totalI = despesasTotais.reduce(function(soma, i) {
    return soma + i;
   });
   setTotalExpense(totalI);
  }
 }, [listSt])


 useEffect(() => {
  if (saldoTotal.length === 0) {
    setTotalBalance(0)
  } else if (saldoTotal.length !== 0) {
    const totalI = saldoTotal.reduce(function(soma, i) {
    return soma + i;
   });
   setTotalBalance(totalI);
  }
 }, [listSt])

 const containerStyle = String(totalBalance).length < 6 && String(totalExpense).length < 6 && String(totalBalance - totalExpense).length < 6 ? styles.container : styles.containerFlex;

 console.log(String(totalExpense).length)

 
 return (
   <View style={containerStyle}>
    <View style={styles.item}>
      <Text style={styles.itemTitle}>Saldo</Text>
      <View style={styles.content}>
        <Text style={styles.currenceSymbol}>R$</Text>
        <Text style={styles.balance}>{totalBalance}</Text>
      </View>
    </View>

    <View style={styles.item}>
      <Text style={styles.itemTitle}>Gastos</Text>
      <View style={styles.content}>
        <Text style={styles.currenceSymbol}>R$</Text>
        <Text style={styles.expenses}>{totalExpense}</Text>
      </View>
    </View>

    <View style={styles.item}>
      <Text style={styles.itemTitle}>Saldo Final</Text>
      <View style={styles.content}>
        <Text style={styles.currenceSymbol}>R$</Text>
        {(totalBalance - totalExpense) >= 0 ? <Text style={styles.balance}>{totalBalance - totalExpense}</Text> : <Text style={styles.expenses}>{totalBalance - totalExpense}</Text>}
      </View>
    </View>
   </View> 
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        marginTop: -24,
        paddingEnd: 18,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    containerFlex: {
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingStart: 18,
      marginTop: -24,
      paddingEnd: 18,
      marginStart: 14,
      marginEnd: 14,
      borderRadius: 4,
      paddingTop: 22,
      paddingBottom: 22,
      zIndex: 99,
  },
    itemTitle: {
        fontSize: 20,
        color: '#DADADA',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currenceSymbol: {
        color: '#DADADA',
        marginRight: 6,
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71',
    },
    item: {
      marginBottom: 10,
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c',
    },
})