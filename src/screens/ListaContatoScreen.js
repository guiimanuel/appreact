import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import api from '../services/api';


function ListaContatoScreen({ navigation, route }) {

    const usuario = route?.params?.usuario;
    const [contatos, setContatos] = useState([]);
    useEffect(() => {
        api.get(`/contatos?usuario_id=${usuario.id}`)
        .then(res => {
            setContatos(res.data);
        })
        .catch(e => {
        console.log('Falha ao buscar contatos:', e);
      })
  }, [usuario]);

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
        navigation.navigate('AlteracaoContato', { contatos: item, usuario });
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
        data={contatos}
        renderItem={renderContato}
        keyExtractor={item => item.id.toString()}
      />


    </View>
  );
}
export default ListaContatoScreen;