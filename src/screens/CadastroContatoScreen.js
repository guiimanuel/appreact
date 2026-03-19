import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { getContatos } from "../functions/getContatos";
import api from "../services/api";

function CadastroContatoScreen({ navigation }) {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    telefone: '',
  })
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    console.log(dados);
  }, [dados]);

  const EnviaDados = () => {
    api.post('/contatos', dados)
      .then(res => {
        getContatos(setDados, setLoading, setErro);
        console.log(dados);
        navigation.navigate('ListaContato');
      })
      .catch(e => console.log(e))
  }
  return (
    <View
      style={{
      }}>
      <StatusBar style="auto" />

      <View
        style={{
          marginTop: 30,
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 15,
          alignItems: 'left',
          gap: 3,
        }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'left',
            fontWeight: '600'
          }}>
          Nome
        </Text>
        <TextInput
          style={{
            fontSize: 14,
            height: 50,
            backgroundColor: '#00000018',
            borderWidth: 3,
            borderRadius: 10,
            borderColor: '#0080ff',
            fontWeight: 500
          }}
          onChangeText={(texto) => { setDados({ ...dados, nome: texto }) }}
          value={dados.nome}
          placeholder='Digite o nome do contato...' />
      </View>

      <View
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 15,
          alignItems: 'left',
          gap: 3,
        }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'left',
            fontWeight: '600'
          }}>
          Email
        </Text>
        <TextInput
          style={{
            fontSize: 14,
            height: 50,
            backgroundColor: '#00000018',
            borderWidth: 3,
            borderRadius: 10,
            borderColor: '#0080ff',
            fontWeight: 500
          }}
          onChangeText={(texto) => { setDados({ ...dados, email: texto }) }}
          value={dados.email}
          placeholder='Digite o Email do contato...' />
      </View>


      <View
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 15,
          alignItems: 'left',
          gap: 3,
        }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'left',
            fontWeight: '600'
          }}>
          Telefone
        </Text>
        <TextInput
          style={{
            fontSize: 14,
            height: 50,
            backgroundColor: '#00000018',
            borderWidth: 3,
            borderRadius: 10,
            borderColor: '#0080ff',
            fontWeight: 500
          }}
          onChangeText={(texto) => { setDados({ ...dados, telefone: texto }) }}
          value={dados.telefone}
          placeholder='Digite o telefone do contato...' />
      </View>

      <View
        style={{
          cursor: 'pointer',
          marginTop: 15,
          marginLeft: 110,
          marginRight: 110,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0080ff',
            borderRadius: 10,
            padding: 10,
          }}
          onPress={EnviaDados}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
          }}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
export default CadastroContatoScreen;