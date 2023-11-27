import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', 
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
     // Margem inferior para afastar o texto abaixo da imagem
    tintColor: 'white',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    paddingBottom: 400,
  },
  content: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row', // Botões em linha
    justifyContent: 'center',
    
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10, // Borda mais arredondada
    marginHorizontal: 5, // Espaço entre os botões
    
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
