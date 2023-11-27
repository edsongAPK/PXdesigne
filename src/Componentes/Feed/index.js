/* import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { estilos } from './estilos';


const FeedScreen = () => {

  const feedItens = [
    { id: '1', texto: 'Postagem 1' },
    { id: '2', texto: 'Postagem 2' },
    { id: '3', texto: 'Postagem 3' },
    // Adicione mais itens conforme necessário
  ];

  const renderItem = ({ item }) => (
    <View style={estilos.item}>
      <Text>{item.texto}</Text>
    </View>
  );

  return (
    <View style={estilos.container}>
      <FlatList
        data={feedItens}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FeedScreen;
*/