import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const TambahProduk = ({navigation}) => {
  const [pilihKategori, setPilihKategori] = useState();
  return(
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <View flexDirection='row' justifyContent='space-between'>
          <Text style={styles.topTitle}>Foto Produk </Text>
          <TouchableOpacity>
            <Text style={{
              fontSize: 14, 
              fontWeight: 'bold',
              color: "#0C8EFF"
            }}>Tambah Foto</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../assets/photo.jpg')} style={styles.picture}/>
        <Text style={{fontSize:12}}>Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px).</Text>
        
        {/* Detail produk */}

        <Text style={styles.Title}>Detail Produk</Text>
        <TextInput 
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
            style={{marginTop:5}}
            placeholder="                                                                                    "
          />
        </View>
        <Text style={styles.TitleHarga}>Stock</Text>
        <TextInput 
          style={styles.inputHarga}
          placeholder="                                                                         "
        />

        {/* Variant  */}

        <Text style={styles.TitleHarga}>Variant Produk</Text>
        <View flexDirection='row'>
          <TextInput 
          style={styles.inputVariant}
          placeholder="ukuran"
          />
          <TextInput 
          style={styles.inputVariant}
          placeholder="Warna                          "
          />
          <TextInput 
          style={styles.inputStock}
          placeholder="Stock              "
          />
        </View>
        <View flexDirection='row'>
          <TextInput 
          style={styles.inputVariant}
          placeholder="ukuran"
          />
          <TextInput 
          style={styles.inputVariant}
          placeholder="Warna                          "
          />
          <TextInput 
          style={styles.inputStock}
          placeholder="Stock              "
          />
        </View>
        <View flexDirection='row'>
          <TextInput 
          style={styles.inputVariant}
          placeholder="ukuran"
          />
          <TextInput 
          style={styles.inputVariant}
          placeholder="Warna                          "
          />
          <TextInput 
          style={styles.inputStock}
          placeholder="Stock              "
          />
        </View>
        <View flexDirection='row'>
          <TextInput 
          style={styles.inputVariant}
          placeholder="ukuran"
          />
          <TextInput 
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
        
        >
          <Text style={{
            fontSize: 18,
            color: "white",
            alignSelf: 'center'
            
          }}>Simpan</Text>
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

