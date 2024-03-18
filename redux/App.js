import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Product from './src/Componants/Product';
import Header from './src/Componants/Header';

// Import images
const samgsum = require('./src/Assets/s1.jpeg');
const iphon = require('./src/Assets/iphon.jpeg');
const reno = require('./src/Assets/reno.jpeg');
const oppo = require('./src/Assets/oppo.png');
const oneplus = require('./src/Assets/one.jpeg');
const mobileImage6 = require('./src/Assets/oppo.png');

const App = () => {

  const products = [
    {
      name: 'Samsung Mobile',
      color: "white",
      price: 30000,
      image: samgsum
    },
    {
      name: 'Apple iPhone',
      color: "white",
      price: 113000,
      image: iphon
    },
    {
      name: 'Reno Phone',
      color: "white",
      price: 13000,
      image: reno
    },
    {
      name: 'Oppo Phone',
      color: "white",
      price: 31000,
      image: oppo
    },
    {
      name: 'OnePlus Mobile',
      color: "white",
      price: 35000,
      image: oneplus
    },
    {
      name: 'Samsung Mobile',
      color: "white",
      price: 30000,
      image: mobileImage6
    },
  ];

  return (
    
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {products.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold"
  }
});
