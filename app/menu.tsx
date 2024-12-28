import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MENU_ITEMS } from '@/data/menuItems'
const handlePress = (itemName: string) => {
      // ここでボタンがクリックされたときのアクションを実行します
    console.log(`${itemName} button clicked!`);
};

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}  
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetail}>{item.detail}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handlePress(item.name)}>
                <Text style={styles.buttonText}>add cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  listContainer: {
    paddingHorizontal: 20,  
    paddingBottom: 20,      
  },
  itemContainer: {
    backgroundColor: 'white', 
    marginBottom: 15,         
    padding: 15,              
    borderRadius: 8,          
    shadowColor: '#000',     
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.1,       
    shadowRadius: 4,          
    elevation: 3,            
  },
  itemName: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333', 
  },
  itemDetail: {
    fontSize: 16, 
    color: '#777', 
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

