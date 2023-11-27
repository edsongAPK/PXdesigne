import React from "react";
import { FlatList } from "react-native";
import ChatItem from "./ChatItem";
import styles from "./estilos";

const chatData = [
  {
    id: "1",
    user: "User 1",
    image: require("./../../../../../assets/img1.jpeg"),
    lastMessage: "Bom dia!",
  },
  {
    id: "2",
    user: "User 2",
    image: require("./../../../../../assets/img2.jpeg"),
    lastMessage: "Olá!",
  },

  {
    id: "3",
    user: "User 3",
    image: require("./../../../../../assets/img3.jpeg"),
    lastMessage: "Vocë poderia fazer a logo da minha empresa?",
  },

  // Adicione mais usuários conforme necessário
];

export default function Chat() {
  const renderItem = ({ item }) => <ChatItem item={item} />;

  return (
    <FlatList
      style={styles.container}
      data={chatData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}
