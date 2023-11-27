// estilos.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width - 40; // Define o tamanho da imagem baseado na largura da tela

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  image: {
    width: imageSize,
    height: imageSize * 0.7, // Mantém a proporção da imagem
    resizeMode: 'cover',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: imageSize,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 5,
  },
});
