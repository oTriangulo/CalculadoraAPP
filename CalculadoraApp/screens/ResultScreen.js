import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = ({ route }) => {
  const { number1, number2, operation, result } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabalho 01 - Calculadora</Text>
      <Text>Valor 1: {number1}</Text>
      <Text>Valor 2: {number2}</Text>
      <Text>Operação: {operation}</Text>
      <Text>Cálculo: {`${number1} ${operation} ${number2}`}</Text>
      <Text>Resultado: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ResultScreen;
