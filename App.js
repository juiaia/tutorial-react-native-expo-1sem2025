import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Product from './src/components/Product';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Product />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
