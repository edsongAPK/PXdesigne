import React from "react";
import { View, TextInput, FlatList } from "react-native";
import UserItem from "./UserItem";
import styles from "./estilos";

const userData = [
  {
    id: "1",
    username: "user1",
    image: require("./../../../../../assets/img1.jpeg"),
  },
  {
    id: "2",
    username: "user2",
    image: require("./../../../../../assets/img2.jpeg"),
  },
  // Adicione mais usuários conforme necessário
];

export default function Search() {
  const renderItem = ({ item }) => <UserItem item={item} />;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Procurar..."
        onChangeText={(text) => console.log(text)}
      />
      <FlatList
        style={styles.userList}
        data={userData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
