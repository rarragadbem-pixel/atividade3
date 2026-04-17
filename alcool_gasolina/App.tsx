//Atividade Avaliativa 3
//Raísa Vieira Gadbem e Samara da Silva Santos
//17.04


// Importa React e useState para armazenar dados digitados
import React, { useState } from 'react';

// Importa componentes usados na tela
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
} from 'react-native';

// Função principal do aplicativo
export default function App() {

  // Guarda preço da gasolina
  const [gasolina, setGasolina] = useState('');

  // Guarda preço do álcool
  const [alcool, setAlcool] = useState('');

  // Guarda mensagem de resposta
  const [resultado, setResultado] = useState('');

  // Função chamada ao apertar botão
  function calcular() {

    // Verifica campos vazios
    if (gasolina === '' || alcool === '') {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    // Converte gasolina para número
    const g = parseFloat(gasolina.replace(',', '.'));

    // Converte álcool para número
    const a = parseFloat(alcool.replace(',', '.'));

    // Verifica números inválidos
    if (isNaN(g) || isNaN(a)) {
      Alert.alert('Erro', 'Digite valores válidos');
      return;
    }

    // Se álcool compensar
    if (a / g < 0.7) {
      setResultado('Abasteça com Álcool');
    } else {

      // Se gasolina compensar
      setResultado('Abasteça com Gasolina');
    }
  }

  // Parte visual do app
  return (
    <View style={styles.container}>

      {/* Logo do app */}
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
      />

      {/* Título */}
      <Text style={styles.titulo}>Gasolina ou Álcool?</Text>

      {/* Campo gasolina */}
      <TextInput
        style={styles.input}
        placeholder="Preço gasolina"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
      />

      {/* Campo álcool */}
      <TextInput
        style={styles.input}
        placeholder="Preço álcool"
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
      />

      {/* Botão calcular */}
      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      {/* Resultado final */}
      <Text style={styles.resultado}>{resultado}</Text>

    </View>
  );
}

// Estilos visuais
const styles = StyleSheet.create({

  // Tela principal
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },

  // Logo
  logo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 20
  },

  // Título
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

  // Campos de digitação
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 10
  },

  // Botão azul
  botao: {
    backgroundColor: '#c74e61',
    padding: 15,
    borderRadius: 10
  },

  // Texto botão
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },

  // Resultado mostrado
  resultado: {
    marginTop: 20,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});