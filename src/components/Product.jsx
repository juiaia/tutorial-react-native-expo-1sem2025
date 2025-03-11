import {Image} from 'expo-image'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


export default function Product() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.products}>
          <Image
            style={styles.product}
            source="https://thumbs.dreamstime.com/b/retrato-do-cavalo-10488976.jpg"
          />

          <View style={styles.infos}>
            <Text style={styles.nomeproduto}>Cavalo Marrom</Text>
            <Text style={styles.precoproduto}>R$ 10.000,00</Text>
          </View>

          <View>
            <Text style={styles.descricao}>
              Este cavalo é muito bonito e muito bem cuidado.
            </Text>
          </View>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>

  
        <View style={styles.products}>
          <Image
            style={styles.product}
            source="https://img.freepik.com/fotos-gratis/foto-vertical-de-um-lindo-cavalo-branco-em-pe-perto-de-uma-grade-de-metal-em-um-rancho_181624-29542.jpg"
          />

          <View style={styles.infos}>
            <Text style={styles.nomeproduto}>Cavalo Branco</Text>
            <Text style={styles.precoproduto}>R$ 8.000,00</Text>
          </View>

          <View>
            <Text style={styles.descricao}>
              Este cavalo é muito bonito e muito bem cuidado.
            </Text>
          </View>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.products}>
          <Image
            style={styles.product}
            source="https://thumbs.dreamstime.com/b/retrato-do-cavalo-da-ra%C3%A7a-do-knabstrupper-branco-com-pontos-marrons-51888171.jpg"
          />
          <View style={styles.infos}>
            <Text style={styles.nomeproduto}>Cavalo Malhado</Text>
            <Text style={styles.precoproduto}>R$ 15.000,00</Text>
          </View>

          <View>
            <Text style={styles.descricao}>
              Este cavalo é muito bonito e muito bem cuidado.
            </Text>
          </View>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.products}>
          <Image
            style={styles.product}
            source="https://thumbs.dreamstime.com/b/as-corridas-pretas-do-cavalo-galopam-no-ver%C3%A3o-retrato-no-movimento-32904347.jpg"
          />
          <View style={styles.infos}>
            <Text style={styles.nomeproduto}>Cavalo Preto</Text>
            <Text style={styles.precoproduto}>R$ 50.000,00</Text>
          </View>

          <View>
            <Text style={styles.descricao}>
              Este cavalo é muito bonito e muito bem cuidado.
            </Text>
          </View>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', // Itens organizados em linha
        flexWrap: 'wrap', // Permite que os itens quebrem linha
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    products: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    product: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    infos: {
        alignItems: 'center',
        marginBottom: 20,
    },
    nomeproduto: {
        fontSize: 23,
        fontWeight: '700',
        lineHeight: 30,
    },
    precoproduto: {
        fontSize: 20,
        color: '#191970',
    },
    descricao: {
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
    },
    botao: {
        marginTop: 30,
        backgroundColor: '#6495ed',
        padding: 13,
        borderRadius: 10,
        alignItems: 'center',
    },
})