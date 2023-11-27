// index.js
import React from "react";
import { View } from "react-native";
import ProfileItem from "./ProfileItem";

export default function Profile() {
  const user = {
    name: "Edson",
    photoUrl: "URL da Foto do Usuário",
    // Outras informações do usuário...
  };

  return (
    <View>
      <ProfileItem user={user} />
    </View>
  );
}
