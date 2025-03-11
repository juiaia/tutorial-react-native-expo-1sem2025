import {View, StyleSheet, Text} from 'react-native'
import { Image } from 'expo-image'
import Entypo from '@expo/vector-icons/Entypo';

export default function Header(){
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={'https://github.com/juiaia.png'}
            />
            <Text style={styles.nome}>Júlia Rodrigues</Text>
            <Entypo style={styles.menu} name="menu" size={44} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        backgroundColor: '#6495ed',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 35
    },
    nome: {
        fontSize: 22,
        fontWeight: '600'
    },
    menu: {
        marginLeft: 'auto'
    },
})