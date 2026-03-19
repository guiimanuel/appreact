import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import api from '../services/api';



function LoginScreen({ navigation }) {

  const [dados, setDados] = useState({ usuarios: [], email: '', senha: '' });
  const [erro, setErro] = useState(false);

  useEffect(() => {
    api.get('/usuarios')
      .then(res => setDados(d => ({ ...d, usuarios: res.data })))
      .catch(erro => {
        console.log('Falha ao carregar usuários:', erro);
        setErro(true);
      });
  }, []);

  const BuscaDados = () => {
    if (!dados.email || !dados.senha) {
      alert('Email ou senha incorretos');
      setErro(true);
      return;
    }

    const usuario = dados.usuarios.find(u => u.email === dados.email && u.senha === dados.senha);
    if (usuario) {
      navigation.navigate('ListaContato');
    } else {
      alert('Email ou senha incorretos');
      setErro(true);
    }
  }

  useEffect(() => {
    console.log(dados);
  }, []);

  return (
    <View>
      <StatusBar style="auto" />

      <View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '600',
            textAlign: 'center',
            marginTop: 30,
            color: '#0080ff'
          }}>
          Seja, Bem-Vindo!
        </Text>
      </View>
      {/*Foto perfil*/}
      <View
        style={{
          margin: 'auto',
          marginTop: 50,
          marginBottom: 70
        }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 50
          }}
          source={require('../../assets/images/fotoperfil.png')}
        />
      </View>


      {/*Login*/}
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
          onChangeText={(texto) => { setDados(d => ({ ...d, email: texto })) }}
          value={dados.email}
          placeholder='Digite seu email...' />
      </View>


      {/*Senha*/}
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
          Senha
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
          onChangeText={(texto) => { setDados(d => ({ ...d, senha: texto })) }}
          value={dados.senha}
          placeholder='Digite sua senha...'
          secureTextEntry
        />
      </View>


      {/*Buttons*/}
      <View style={{
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
          onPress={() => { BuscaDados() }}>

          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
          }}>
            Login
          </Text>

        </TouchableOpacity>

      </View>

      <View
        style={{
          cursor: 'pointer',
          marginLeft: 110,
          marginRight: 110,
          marginBottom: 15,
        }}>

        <TouchableOpacity
          style={{
            backgroundColor: '#0080ff',
            borderRadius: 10,
            padding: 10,
          }}
          onPress={() => {
            navigation.navigate('CadastroUsuario');
          }}
        >

          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
          }}>
            Cadastre-se
          </Text>

        </TouchableOpacity>
      </View>


    </View>
  );
}
export default LoginScreen;