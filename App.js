import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Message from './src/components/Message';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Message avatar="https://github.com/renancavichi.png">Olá tudo bem?</Message>
      <Message avatar="https://avatars.githubusercontent.com/u/12842076?v=4">Por aqui beleza!</Message>
      <Message avatar="https://avatars.githubusercontent.com/u/4061891?v=4">Show!</Message>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD'
  }
});
