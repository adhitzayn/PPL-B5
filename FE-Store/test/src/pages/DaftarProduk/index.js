import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView, Image, FlatList } from 'react-native';

const DaftarProduk = ({navigation}) => {

   const [dataProduk, setDataProduk] = useState([]);


    const DATA = [
      {
        produk_id: '1',
        stok: '20',
        foto_Produk: 'https://www.polygonbikes.com/wp-content/uploads/2021/03/Thumbnail-Blog-Polygon-Bikes-1024x683.jpg',
        nama_produk: 'sepeda polygon',
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
      <View style={styles.container}>
            <FlatList
            numColumns={2}
            keyExtractor={( item ) => item.produk_id}
            data={DATA}
            renderItem={({ item }) => (
                <View style={styles.cardProduk}>
                    <View style={styles.stok}>
                        <Text style={styles.textStok}>Stok {item.stok}</Text>
                    </View>
                    <View>
                        <Image source={{uri:`${item.foto_produk}`}} style={styles.gambar}/>
                    </View>
                    <View>
                        <Text style={styles.nama}>{item.nama_produk}</Text>
                    </View>
                    <View style={styles.keterangan}>
                        <Text style={styles.textHarga}>Rp.{item.harga_produk}</Text>
                        <Image source={require('../../assets/rating.png')} style={styles.ratingLogo}/>
                        <Text style={styles.textRating}>{item.rating_produk}</Text>
                    </View>
                    
                </View>
            )}
            />
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        alignItems: 'center'
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

export default DaftarProduk;

