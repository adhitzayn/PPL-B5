import React, { useState } from 'react';
import { View, TouchableOpacity, Pressable, StyleSheet, Text, ScrollView, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

const TambahProduk = ({navigation}) => {
  const [pilihKategori, setPilihKategori] = useState();
  const [FotoProduk, setFotoProduk] = useState("");
  const [NamaProduk, setNamaProduk] = useState("");
  const [DeskripsiProduk, setDeskripsiProduk] = useState("");
  const [HargaProduk, setHargaProduk] = useState();
  const [StockProduk, setStockProduk] = useState();
  const [Ukuran, setUkuran] = useState("");
  const [Warna, setWarna] = useState("");

const submitProduk = () => {
    const data = {
      nama_produk: NamaProduk,
      deskripsi_produk: DeskripsiProduk,
      stok: StockProduk,
      harga_produk: HargaProduk,
      foto_produk: FotoProduk,
      ukuran: Ukuran,
      warna: Warna,
    }
    console.log('data before send: ', data);
    // axios.post('http://192.168.1.8:8080/stores', data)
    axios.post('http://192.168.100.189:8080/products', data)
    .then(res =>{
      console.log('resp: ', res)
      navigation.navigate('Store')
    })
    .catch(error => console.log('error', error))
  }

  const openGallery = () =>{
      const option ={
        mediaType : 'photo',
        qualitUkuran : 1
      }

  launchImageLibrary(option, (res)=>{
        if(res.didCancel){
          console.log('User cancelled image picker')
        }else if(res.errorCode){
         
          console.log(res.errorMessage)
        }else{
          const data = res.assets[0]
          setFotoProduk(data.uri)
          console.log(data)
        }
      })
    }

  return(
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <View flexDirection='row' justifyContent='space-between'>
          <Text style={styles.topTitle}>Foto Produk </Text>
          <Pressable onPress={openGallery}>
            <Text style={{
              fontSize: 14, 
              fontWeight: 'bold',
              color: "#0C8EFF"
            }}>Tambah Foto</Text>
          </Pressable>
        </View>
        {
          FotoProduk == "" &&
          <Image source={require('../../assets/photo.jpg')} style={styles.picture}/>
        }
        {
          FotoProduk != "" &&
          <Image source={{uri:FotoProduk}} style={styles.picture}/>
        }
        <Text style={{fontSize:12}}>Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px).</Text>
        
        {/* Detail produk */}

        <Text style={styles.Title}>Detail Produk</Text>
        <TextInput 
          value={NamaProduk}
          onChangeText={setNamaProduk}
          style={styles.input}
          placeholder="Nama Produk                                     "
        />
        <Text style={{
            fontSize:12,
            marginVertical: 10
        }}>Cantumkan min. 40 karakter agar semakin menarik dan mudah ditemukan oleh pembeli, terdiri dari jenis produk, merek, dan keterangan seperti warna, bahan, atau tipe.</Text>
        <View style={styles.picker}>
          <Picker
            mode="dropdown"
            selectedValue={pilihKategori}
            onValueChange={(itemValue, itemIndex) => setPilihKategori(itemValue)}>
            <Picker.item style={{
              color: '#A9A9A9',
              fontSize: 14,
              }} 
              label="Kategori Produk" value="kota"/>
            <Picker.item label="Aksesoris" value="Aksesoris"/>
            <Picker.item label="Sepeda" value="Sepeda"/>
          </Picker>
        </View>
        <View style={{marginVertical: 10}}/>
        <TextInput 
          value={DeskripsiProduk}
          onChangeText={setDeskripsiProduk}
          style={styles.input}
          multiline
          editable
          maxLength={240}
          placeholder="Deskripsi                                  "
        />
        <Text style={{
            fontSize:12,
            marginVertical: 10
        }}>Pastikan deskripsi produk memuat spesifikasi, ukuran, bahan, masa berlaku, dan lainnya. Semakin detail, semakin berguna bagi pembeli, cantumkan min. 260 karakter agar pembeli semakin mudah mengerti dan menemukan produk anda.</Text>
        
        {/* Harga */}
        
        <Text style={styles.TitleHarga}>Harga</Text>
        <View flexDirection='row' alignItems='center' style={styles.inputHarga}>
          <Text style={{
            marginStart: 10,
            fontWeight:'bold',
            fontSize: 14,
            color: 'black'
          }}>Rp</Text>
          <TextInput
            keyboardType='numeric'
            value={HargaProduk}
            onChangeText={setHargaProduk}
            style={{marginTop:5}}
            placeholder="                                                                                    "
          />
        </View>
        <Text style={styles.TitleHarga}>Stock</Text>
        <TextInput 
          keyboardType='numeric'
          value={StockProduk}
          onChangeText={setStockProduk}
          style={styles.inputHarga}
          placeholder="                                                                         "
        />

        {/* Variant  */}

        <Text style={styles.TitleHarga}>Variant Produk</Text>
        <View flexDirection='row'>
          <TextInput 
          value={Ukuran}
          onChangeText={setUkuran}
          style={styles.inputVariant}
          placeholder="ukuran"
          />
          <TextInput 
          value={Warna}
          onChangeText={setWarna}
          style={styles.inputVariant}
          placeholder="Warna                          "
          />
          <TextInput 
          style={styles.inputStock}
          placeholder="Stock              "
          />
        </View>
        
        <TouchableOpacity 
        style={styles.button}
        onPress={() =>  navigation.navigate('Store'),submitProduk}
        
        >
          <Text style={{
            fontSize: 18,
            color: "white",
            alignSelf: 'center'
            
          }}>Tambahkan</Text>
        </TouchableOpacity>
      </View>
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

export default TambahProduk;

