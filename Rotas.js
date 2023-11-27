import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, Feather } from '@expo/vector-icons';

import Chat from "./src/Componentes/TabBar/pages/Chat";
import Home from "./src/Componentes/TabBar/pages/Home";
import Profile from "./src/Componentes/TabBar/pages/Profile";
import Search from "./src/Componentes/TabBar/pages/Search";

import { HomeScreen } from "./src/Componentes/TelaInicial";
import { Login } from "./src/Componentes/Registro";
import { Cadastrar } from "./src/Componentes/CadastrarLogin";
import FeedScreen from "./src/Componentes/Feed";

const Stack = createNativeStackNavigator();
const TabBar = createBottomTabNavigator();

export function Rotas() {
  return (
    
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Cadastrar' component={Cadastrar} options={{ headerShown: false }} />
        
        <Stack.Screen name='Routes' component={Routes} options={{headerShown: false}} />
        
      </Stack.Navigator>
      
  );
}

export function Routes() {
  return (
    
    <TabBar.Navigator
    screenOptions={{
        tabBarStyle:{
            backgroundColor: 'black',
            borderTopColor: 'transparent'
        },
            tabBarActiveTintColor: '#FFF',
            paddingBottom: 5,
            paddingTop: 5,
       
        
        }}>
        
        
        <TabBar.Screen
         name="Feed"
          component={Home}
          options={{
            tabBarIcon: ({size, color}) => (
                <Entypo name="home" size={size} color={color} />
            )
          }} />   


        <TabBar.Screen 
        name="Chat" 
        component={Chat}
        options={{
            tabBarIcon: ({size, color}) => (
                <Entypo name="chat" size={size} color={color} />
            )
          }} />


        <TabBar.Screen
         name="Pesquisar"
          component={Search}
          options={{
            tabBarIcon: ({size, color}) => (
                <Feather name="search" size={size} color={color} />
            )
          }} />


        <TabBar.Screen
         name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({size, color}) => (
                <Feather name="user" size={size} color={color} />
            )
          }} />


    </TabBar.Navigator>
    
  );
}
