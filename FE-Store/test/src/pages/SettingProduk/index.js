import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text, ScrollView, Image, Switch } from 'react-native';
import Setting from '../../assets/Pen.svg';

const SettingProduk = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const DATA = [
      {
        produk_id: '1',
        stok: '20',
        foto_Produk: 'https://www.polygonbikes.com/wp-content/uploads/2021/03/Thumbnail-Blog-Polygon-Bikes-1024x683.jpg',
        nama_produk: 'sepeda pacific',
        harga_produk: '2500000',
        rating_produk: '4.2',
      },
      {
        produk_id: '2',
        stok: '12',
        foto_Produk: 'https://reactnative.dev/img/tiny_logo.png',
        nama_produk: 'sepeda pacific',
        harga_produk: '20000',
        rating_produk: '4.2',
      },
      {
        produk_id: '3',
        stok: '13',
        foto_Produk: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/08/26/1441917955.png',
        nama_produk: 'sepeda united',
        harga_produk: '30000',
        rating_produk: '4.2',
      },
      
    ];

  return (
    <View style={styles.background}>
      <View flexDirection= 'row' justifyContent='space-between' style={styles.Container}>
        <Text style={{fontSize:12, left: 10, fontWeight:'bold'}}>Info Produk</Text>
        <Text style={{fontSize:12, left: 20, fontWeight:'bold'}}>Stock</Text>
        <Text style={{fontSize:12, left: -30, fontWeight:'bold'}}>Status</Text>
      </View>
      <View style={{
        width: '100%',
        height: 1,
        backgroundColor: '#E4E4E4'
      }}/>
      <View style={styles.Container}>
        <FlatList
            
            keyExtractor={( item ) => item.produk_id}
            data={DATA}
            renderItem={({ item }) => (
              <View flexDirection= 'row' alignItems='center' style={{marginVertical:5}}>
                <Text>{item.produk_id}.</Text>
                <Image source={require('../../assets/rating.png')} style={{width: 50, height: 50}}/>
                <View justifyContent='center' >
                  <Text style={{fontSize:12}}>{item.nama_produk}</Text>
                  <Text style={{fontSize:12}}>Rp. {item.harga_produk}</Text>
                </View>
                <Text style={{fontSize:12, left:60}}>{item.stok}</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={{left:130}}
                />
                <TouchableOpacity>
                  <Setting style={{left:130}}/>
                </TouchableOpacity>
              </View>
            )}
            />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    Container: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    cardProduk: {
        top: '3%',
        height: '90%',
        width: '49%',
        backgroundColor: 'white',
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        flexDirection: 'column',
        borderWidth: 0.5,
        borderColor: 'lightgrey'
    },
    stok: {
        top: -10
    },
    keterangan: {
        position: 'absolute',
        left: '10%',
        top: '108%',
        width: '100%',
    },
    ratingLogo: {
        position: 'absolute',
        left: '67%',
        width: 18,
        height: 18
    },
    gambar: {
        left: '10%',
        width: 80,
        height: 80,
    },
    nama: {
        fontSize: 8,
        color: 'black'
    },
    textStok: {
        color: 'black',
        fontSize: 10,
    },
    textHarga: {
        position: 'absolute',
        color: 'steelblue',
        fontSize: 12,
    },
    textRating: {
        color: 'gray',
        fontSize: 12,
        left: '80%',
    }
});

export default SettingProduk;