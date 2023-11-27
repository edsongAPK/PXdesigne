import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { estilos } from './estilos';
import { useNavigation } from '@react-navigation/native';
export function HomeScreen() {

  const navigation = useNavigation();

  // Navegar da tela inicial para a tela de Login
  const HomescreenTOlogin = () => {
    navigation.navigate('Login');
  }

  const Cadastrar = () => {
    navigation.navigate('Cadastrar')
  }

  ///const LoginTOfeed = () => {
    ///navigation.navigate('FeedScreen')
 /// }

  return (  
    <View style={estilos.container}>
      <Image
        source={require("../../../assets/login.png")}
        style={estilos.logo}
        
      />
      <Text style={estilos.subtitle}>Since 2023</Text>
      <View style={estilos.content}>
        <View style={estilos.buttonContainer}>
          <TouchableOpacity
            style={estilos.button}
            onPress={HomescreenTOlogin}
          >
            <Text style={estilos.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={estilos.button}
            onPress={Cadastrar}
          >
            <Text style={estilos.buttonText}>REGISTRAR-SE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
