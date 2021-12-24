import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';

const DaftarProduk = ({navigation}) => {
  return(
    <ScrollView style={styles.background}>
      <Text>KOSONG</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  container: {
    margin: 20,
    
  },
  containerSeparator: {
    margin: 10,

  },

  topTitle: {
    fontSize: 16,
    color: 'black',
  },
  Title: {
    fontSize: 16,
    color: 'black',
    marginVertical: 10
  },
    TitleHarga: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,

  },
  input: {
    justifyContent: 'flex-start',
    fontSize: 14,
    borderColor: '#CECECE',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  inputHarga: {
    justifyContent: 'flex-start',
    fontSize: 14,
    borderColor: '#CECECE',
    borderRadius: 5,
    borderBottomWidth: 2
  },
  inputVariant: {
    justifyContent: 'flex-start',
    fontSize: 14,
    borderColor: '#CECECE',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    marginVertical:10
  },
  inputStock: {
    justifyContent: 'flex-start',
    fontSize: 14,
    borderColor: '#CECECE',
    borderBottomWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    marginVertical:10
  },
  picker: {
    justifyContent: 'flex-start',
    fontSize: 14,
    borderColor: '#CECECE',
    borderWidth: 1,
    borderRadius: 5,
  },
  besidePicture: {
    justifyContent: "center",
    marginStart: 10,
    marginEnd: 50
  },
  picture: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginVertical: 10
    
  },
  border: {
    width: '100%',
    height: 9,
    backgroundColor: '#F4F4F4',
    marginTop: 20
  },

  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#0C8EFF",
    marginTop: 15,
    //textAlign: "center",
  },
  
  produk: {
    height: '20%',
    backgroundColor: "red",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
   
  },
});

export default DaftarProduk;

