// UpdateProfile.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UpdateProfile({ route, navigation }) {
  const { name: currentName, photoUrl: currentPhotoUrl } = route.params.user;
  const [name, setName] = useState(currentName);
  const [photoUrl, setPhotoUrl] = useState(currentPhotoUrl);

  const handleSave = () => {
    // Lógica para salvar as alterações do perfil
    
    navigation.goBack();
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
    <View>
      <Image source={{ uri: photoUrl }} style={{ width: 100, height: 100 }} />
      <Button title="Escolher Foto" onPress={handlePickImage} />
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Novo Nome"
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}


