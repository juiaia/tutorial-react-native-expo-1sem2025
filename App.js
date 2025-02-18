import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Olá Mundo React Native! (Expo)</Text>
      <Text>Descrição: esse é meu app.</Text>
      <Logo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
