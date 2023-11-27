import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Modal, TextInput, Button } from "react-native";
import { profileStyles } from "./estilos";
import * as ImagePicker from 'expo-image-picker';
import { estilos } from "../../../TelaInicial/estilos";

export default function ProfileItem({ user }) {
  const { name: initialName, photoUrl: initialPhotoUrl } = user;
  const [name, setName] = useState(initialName);
  const [photoUrl, setPhotoUrl] = useState(initialPhotoUrl);
  const [modalVisible, setModalVisible] = useState(false);

  const handleFollow = () => {
    // Lógica para seguir o usuário
  };

  const handleSchedule = () => {
    // Lógica para agendar serviço
  };

  const handleUpdateProfile = () => {
    setModalVisible(true);
  };

  const handleSave = () => {
    // Lógica para salvar as alterações do perfil
    // Isso pode envolver a atualização no armazenamento ou na API
    setModalVisible(false);
  };

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhotoUrl(result.uri);
    }
  };

  return (
    <View style={profileStyles.container}>
      <Image source={{ uri: photoUrl }} style={profileStyles.photo} />
      <Text style={profileStyles.name}>{name}</Text>

      <View style={profileStyles.buttons}>
        <TouchableOpacity style={profileStyles.button} onPress={handleFollow}>
          <Text style={profileStyles.textButton} > Seguir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={profileStyles.button} onPress={handleSchedule}>
          <Text style={profileStyles.textButton} >Agendar Serviço</Text>
        </TouchableOpacity>
        <TouchableOpacity style={profileStyles.button} onPress={handleUpdateProfile}>
          <Text style={profileStyles.textButton} >Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={profileStyles.modalContainer}>
          <View style={profileStyles.modalContent}>
            <Image source={{ uri: photoUrl }} style={{ width: 100, height: 100 }} />
            <Button title="Escolher Foto" onPress={handlePickImage} />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Novo Nome"
            />
            <Button title="Salvar" onPress={handleSave} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
