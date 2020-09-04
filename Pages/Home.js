/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Palavra</Text>
        <TextInput style={styles.input} value={''}/>
        <Text style={styles.label}>Dica</Text>
        <TextInput style={styles.input} value={''}/>
        <TouchableOpacity style={styles.button}>
          <Text>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  input: {
    width: '85%',
    height: 40,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 20,
    color: 'red',
  },
  label: {
    color: 'green',
    fontSize: 16,
    marginBottom: 7,
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: 'red',
    padding: 20,
  }
});

export default Home;
