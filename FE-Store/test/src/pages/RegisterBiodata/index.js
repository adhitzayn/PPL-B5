import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import BackArrow from '../../assets/arrow.svg';

const RegisterBiodata = ({navigation}) => {
  //
  return (
    <View style={styles.background}>
    <TouchableOpacity>
      <BackArrow width={35} height={35} style={styles.backarrow}/>
    </TouchableOpacity>
      <Text style={styles.judul}>Masukkan Nama Toko dan Domain</Text>
        <View style={styles.input}>
          <TextInput 
            mode = {"flat"}
            label='namatoko'
            style={{ 
            fontSize: 20,
            }}
            placeholder="Apa Nama Tokomu                                  "
          />
        </View>
      <Text style={styles.reminder}>Nama yang menarik lebih mudah diingat pembeli</Text>
      <Text style={styles.reminder}>Nama yang sudah dipilih tidak dapat diubah</Text>
        <View style={styles.fixToText}>
          <TextInput style={{ 
            fontSize: 20,
            }}
            placeholder="Nama Domain                                        "
          />
        </View>
      <Text style={styles.reminder}>Nama domain berupa ShadleX.com/store/...</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Alamat')}
        >
          <Text style={{
            fontSize: 18,
            color: "white",
            
          }}>Lanjut</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    marginTop: 50,
  },
  backarrow: {
    marginTop: 20,
    marginLeft: 20,
  },
  reminder: {
    marginLeft: 20,
    marginEnd: 20,
    color: '#737373',
    fontSize: 13
  },
  input: {
    marginLeft: 20,
    marginEnd: 20,
    marginTop: 55,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //color: '#CBCBCB',
    //fontSize: 20,
    borderBottomColor: '#CECECE',
    borderBottomWidth: 1,
  },
  picker: {
    marginTop: 10,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    fontSize: 20,
  },
  judul: {
    marginTop: 20,
    marginLeft: 30,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  fixToText: {
    marginLeft: 20,
    marginEnd: 20,
    marginTop: 60,
    //marginBottom: 400,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //alignContent: 'space-around',
    borderBottomColor: '#CECECE',
    borderBottomWidth: 1,
  },
  button: {
    paddingHorizontal: 160,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#0C8EFF",
    alignSelf: "center",
    marginTop: 370,
    marginBottom: 6,
    //textAlign: "center",
  },
  button2: {
    paddingHorizontal: 160,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#0C8EFF",
    alignSelf: "center",
    marginTop: 370,
    marginBottom: 6,
    //textAlign: "center",
  },
  bottom:{
    marginTop: 60,
    justifyContent: 'center',
  }
  
});

export default RegisterBiodata;