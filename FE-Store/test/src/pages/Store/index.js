import React, { useState, useEffect,useLayoutEffect } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Arrow from '../../assets/rightArrow.svg';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import PenButton from '../../assets/Pen.svg';

const Store = ({navigation, route}) => {
  const[data, setData] = useState([])
 
  // const {
  //       deskripsi_toko, 
  //       foto_toko, 
  //       kodepos_toko,
  //       nama_domain,
  //       nama_kecamatan,
  //       nama_kelurahan,
  //       nama_kota,
  //       nama_toko,
  //       toko_id
  //     } = data[0];

  useEffect(() => {
    getDataStore();
    console.log(data[0]);
  }, []);

  

  const getDataStore = () => {
    // axios.get(`http://192.168.1.8:8080/stores/${route.params.Domain}`)
    axios.get(`http://192.168.100.189:8080/stores/${route.params.Domain}`)
    
    .then(res => {
      // const dataStore= res.data[0]
      console.log('res: ', res.data)
      setData(res.data);
      // console.log(data[0]);
      
    })
  }
  
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {domain:route.params.Domain, id:data[0].toko_id})}>
          <PenButton width={30} height={30}/>
        </TouchableOpacity>
      ),
    });
  });

    return(
      
        <ScrollView style={styles.background}>
          {data.map((item, i) =>{
            return <>
            
            <View style={styles.PictureView}>
              {
                
                item.foto_toko == "" &&
                <Image source={require('../../assets/Profile.png')} style={styles.picture}/>
              }
              {
                item.foto_toko != "" &&
                <Image source={{uri:item.foto_toko}} style={styles.picture}/>
              }
                
                <Text style={styles.Title}>{item.nama_toko}</Text>
            </View>
            <View style={styles.border}/>
            <View style={styles.container} flexDirection="row">
                <Text style={{
                    fontSize: 18,
                    color: 'black'
                }}>Produk</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('DaftarProduk')}>
                  <Arrow style={{
                      marginStart: 280,
                      alignSelf: 'center'
                  }}/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerProduct}> 
              <View style={styles.produkContainer}>
                <Text>Toko anda belum menjual produk apapun!</Text>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('TambahProduk')}
                >
                  <Text style={{color: 'white'}}>Tambah Produk</Text>
                </TouchableOpacity>
              </View>
            </View>
            </>
          })}
            {/* <View style={styles.PictureView}>
                <Image source={require('../../assets/Profile.png')} style={styles.picture}/>
                <Text style={styles.Title}>Ontel {route.params.Domain}</Text>
            </View>
            <View style={styles.border}/>
            <View style={styles.container} flexDirection="row">
                <Text style={{
                    fontSize: 18,
                    color: 'black'
                }}>Produk</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('DaftarProduk')}>
                  <Arrow style={{
                      marginStart: 280,
                      alignSelf: 'center'
                  }}/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerProduct}> 
              <View style={styles.produkContainer}>
                <Text>Toko anda belum menjual produk apapun!</Text>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('TambahProduk')}
                >
                  <Text style={{color: 'white'}}>Tambah Produk</Text>
                </TouchableOpacity>
              </View>
            </View> */}
            
        </ScrollView>
    );
};

export default Store;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginTop: 15,
    marginStart: 15,
    marginEnd: 20,
  },
  containerProduct: {
    alignItems: 'center',
    marginTop: 8
   
  },
  produkContainer: {
    width:'95%',
    height: 520,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#0C8EFF",
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  Title: {
    fontSize: 22,
    color: 'black'
  },
  PictureView: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center'
  },
  input: {
    marginLeft: 20,
    marginEnd: 20,
    marginTop: 20,
    justifyContent: 'flex-start',
    //color: '#CBCBCB',
    //fontSize: 20,
    borderBottomColor: '#CECECE',
    borderBottomWidth: 1,
  },
  besidePicture: {
    justifyContent: "center",
    marginStart: 10,
    marginEnd: 50
  },
  picture: {
    width: 90,
    height: 90,
    borderRadius: 40,
    justifyContent: 'center',
    marginBottom: 5
  },
  border: {
    width: '100%',
    height: 9,
    backgroundColor: '#F4F4F4',
    marginTop: 20
  },
  pickerView: {
    marginLeft: 20,
    marginEnd: 20,
    marginTop: 20,
    borderBottomColor: '#CECECE',
    borderBottomWidth: 1
  },
  picker: {
    marginTop: 10,
    fontSize: 20,
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


