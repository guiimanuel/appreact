import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import api from "../services/api";
import { getContatos } from "../functions/getContatos";

function AlteracaoContatoScreen({ navigation }) {
  const route = useRoute();
  const { id } = route.params;
  const [dados, setDados] = useState({ nome: '', email: '', telefone: '' });
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    api.get('/contatos/' + id)
      .then(res => setDados({ nome: res.data.nome, email: res.data.email, telefone: res.data.telefone }))
      .catch(erro => {
        console.log('Falha ao carregar contato:', erro);
        setErro(true);
      });
  }, [id])

  const EnviaDados = () => {
    api.put('/contatos/' + id, dados)
      .then(res => {
        getContatos(setDados, setLoading, setErro);
        console.log(dados);
        navigation.navigate('ListaContato');
      })
      .catch(e => console.log('Erro ao atualizar:', e))
  }

  const ExcluiDados = () => {
    api.delete('/contatos/' + id)
      .then(res => {
        getContatos(setDados, setLoading, setErro);
        console.log(dados);
        navigation.navigate('ListaContato');
      })
      .catch(e => console.log('Erro ao excluir:', e))
  }

  return (
    <View>
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
          onPress={() => {
            EnviaDados();
          }}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
          }}>
            Alterar
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          cursor: 'pointer',
          marginTop: 5,
          marginLeft: 110,
          marginRight: 110,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#fb2626b6',
            borderRadius: 10,
            padding: 10,
          }}
          onPress={() => {
            ExcluiDados();
          }}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
          }}>
            Excluir
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default AlteracaoContatoScreen;