import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

import {useSelector} from 'react-redux';
import Actions from '../../components/Actions';

const Home = ({ route }) => {
    const { nome }  = route.params;
    const listSt = useSelector(states => states);
  return (
    <View style={styles.container}>
      <Header name={nome}/>
      <Balance balance="15.000" expenses="-527.00"/>
      <Actions />
      <Text style={styles.title}>Últimas transações</Text>
      <FlatList style={styles.list} 
      data={listSt} keyExtractor={(item) => String(item.id)} 
      showsVerticalScrollIndicator={false} 
      renderItem={({item}) => <Movements data={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});

export default Home;