import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ImageBackground } from 'react-native';

export default function Contact() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:example@email.com');
  };

  return (
    <ImageBackground style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subText}>We'd love to hear from you!</Text>
        
        <Text style={styles.text}>Email: </Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={[styles.text, styles.email]}>example@email.com</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Phone: +123-456-7890</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginVertical: 5,
  },
  email: {
    textDecorationLine: 'underline',  
  },
});
