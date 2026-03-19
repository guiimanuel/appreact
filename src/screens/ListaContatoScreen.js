import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../services/api';


function ListaContatoScreen({ navigation }) {

  const [dados, setDados] = useState({ contatos: [] });
  const [erro, setErro] = useState(false);

  useEffect(() => {
    api.get('/contatos')
      .then(res => {
        setDados(d => ({ ...d, contatos: res.data }));
      })
      .catch(erro => {
        console.log('Falha ao carregar contatos:', erro);
        setErro(true)
      })
  }, []);

  const renderContato = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        backgroundColor: '#00000016',
        borderBottomWidth: 2,
        borderColor: '#0555ffaf',
        alignItems: 'left',
        padding: 10,
      }}
      onPress={() => {
        navigation.navigate('AlteracaoContato', { id: item.id, nome: item.nome, telefone: item.telefone });
      }}
    >
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          borderWidth: 3,
          borderColor: '#0555ffaf'
        }}
        source={require('../../assets/images/fotoperfil.png')}
      />

      <View style={{ flexDirection: 'column', marginLeft: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.nome}</Text>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#0080ff' }}>{item.telefone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {/*Lista*/}
      <FlatList
        data={dados.contatos}
        renderItem={renderContato}
        keyExtractor={item => item.id.toString()}
      />


    </View>
  );
}
export default ListaContatoScreen;