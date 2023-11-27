import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./estilos";

export default function UserItem({ item }) {
  return (
    <View style={styles.userItem}>
      <Image source={item.image} style={styles.userImage} />
      <Text style={styles.username}>{item.username}</Text>
    </View>
  );
}
