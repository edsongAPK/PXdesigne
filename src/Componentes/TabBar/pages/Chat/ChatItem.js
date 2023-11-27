import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./estilos";

export default function ChatItem({ item }) {
  return (
    <View style={styles.chatItem}>
      <Image source={item.image} style={styles.userImage} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
    </View>
  );
}
