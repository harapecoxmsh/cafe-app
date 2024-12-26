import { View, Text, StyleSheet, ImageBackground, ImageSourcePropType, Pressable } from 'react-native';
import { Link } from 'expo-router'

import icedCofeImg from '@/assets/images/icedcoffee.jpg';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCofeImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Coffee Shop</Text>
        <Link href="/menu" style={{ marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.menubutton}>
        <Text style={styles.menubuttonText}>Menu</Text>
        </Pressable>
        </Link>

        <Link href="/contact" style={{ marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact Us</Text>
        </Pressable>
        </Link>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menubutton : {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgb(0,0,0)',
    marginTop: 30,
    marginBottom: 30
  },
  menubuttonText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  },
  contactButton: {
    height: 30,
    borderRadius: 20,
    backgroundColor: 'rgb(0,0,0)'
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    textDecorationLine: 'underline'
  }
});

export default App;
