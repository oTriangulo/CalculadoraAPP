import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('');

  const handleCalculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result;

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'X':
        result = num1 * num2;
        break;
      case '÷':
        result = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero!';
        break;
      default:
        result = 'Escolha uma operação';
    }

    navigation.navigate('Result', {
      number1: num1,
      number2: num2,
      operation,
      result,
    });
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Trabalho 01 - Cálculos</Text>

      <Text>Primeiro Valor</Text>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />
      <Text>Segundo Valor</Text>
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />

      <Text style={styles.info}>Informe a Operação</Text>
      <View style={styles.buttonContainer}>
        {['+', '-', 'X', '÷'].map(op => (
          <Button
            key={op}
            title={op}
            onPress={() => setOperation(op)}
          />
        ))}
      </View>
      <Button title="Efetuar Cálculo" onPress={handleCalculate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    columnGap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  info: {
    fontSize: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
});


export default HomeScreen;
