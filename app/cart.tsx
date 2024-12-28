import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { CART_ITEMS } from '@/data/cartItems'

export default function CartScreen() {
    return (
        <View>
            <FlatList
             data={CART_ITEMS}
             keyExtractor={(item) => item.id.toString()}
             renderItem={({ item }) => (
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                </View>
             )}

             />
        </View>                     
    )
}