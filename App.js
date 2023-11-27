import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Rotas, Routes } from './Rotas';
import { HomeScreen } from './src/Componentes/TelaInicial';
export default function App() {
  const shouldRenderTabs = true;

  return (

    <NavigationContainer>
      
      {shouldRenderTabs ? <Rotas /> : < Routes />}
    </NavigationContainer>
  );
}
