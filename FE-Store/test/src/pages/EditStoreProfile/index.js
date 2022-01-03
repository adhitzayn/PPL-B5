import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EditStoreProfile = ({navigation}) => {
    const [NamaToko, setNamaToko] = useState("");
    const [NamaDomain, setNamaDomain] = useState("");
    const [Deskripsi, setDeskripsi] = useState("");
    const [pilihKota, setPilihKota] = useState();
    const [pilihKecamatan, setPilihKecamatan] = useState();
    const [pilihKodePos, setPilihKodePos] = useState();  
    const [FotoToko, setFotoToko] = useState(null);

    const openGallery = () =>{
      const option ={
        mediaType : 'photo',
        quality : 1
      }

      launchImageLibrary(option, (res)=>{
        if(res.didCancel){
          console.log('User cancelled image picker')
        }else if(res.errorCode){
          console.log(res.errorMessage)
        }else{
          const data = res.assets[0]
          setFotoToko(data.uri)
          console.log(data)
        }
      })
    }

    return(
      <ScrollView style={styles.background}>

        {/* Gambar Profil */}

          <View flexDirection="row" style={styles.container}>
              
              {
                FotoToko == null &&
                <Image source={require('../../assets/Profile.png')} style={styles.picture}/>
              }
              {
                FotoToko != null &&
                <Image source={{uri:FotoToko}} style={styles.picture}/>
              }
              <View style={styles.besidePicture}>
                  <Text style={{
                      fontWeight: 'bold',
                      color: 'black'
                  }}>Gambar Profil </Text>
                  <Text style={{
                      fontSize: 13,
                      marginTop:5,
                      marginBottom: 5
                  }}>Besar file maks. -MB dengan format .JPG, JPEG atau PNG</Text>
                  <Pressable
                    onPress={openGallery}
                  >
                      <Text style={{
                          fontSize: 13,
                          fontWeight: 'bold',
                          color: "#0C8EFF"
                      }}>Ganti Gambar</Text>
                  </Pressable>
                </View>
            </View>

        {/* Nama Toko dan domain */}

          <View style={styles.input}>
            <Text style={{marginStart: 5, fontSize:14}}>Nama Toko</Text>
            <TextInput
              value={NamaToko}
              onChangeText={setNamaToko}
              style={{ 
                fontSize: 20,
              }}
              placeholder="Ontel                                  "
            />
          </View>
          <View style={styles.input}>
            <Text style={{marginStart: 5, fontSize:14}}>Nama Domain</Text>
            <TextInput 
              value={NamaDomain}
              onChangeText={setNamaDomain}
              style={{ 
                fontSize: 20,
              }}
              placeholder="Ontel                                        "
            />
          </View>
          <View style={styles.border}/>

        {/* Deskripsi Toko */}

          <View style={styles.input}>
            <Text style={{marginStart: 5, fontSize:14}}>Deskripsi Toko</Text>
            <TextInput 
              value={Deskripsi}
              onChangeText={setDeskripsi}
              style={{ 
                fontSize: 20,
              }} 
              multiline
              editable
              maxLength={100}
              placeholder="Deskripsi                                        "
            />
          </View>
          <View style={styles.border}/>

        {/* Alamat */}

          <View style={styles.pickerView}>
          <Text style={{marginStart: 5, fontSize:14}}>Alamat Toko</Text>
          <Picker style={{fontSize: 20}}
            mode="dropdown"
            selectedValue={pilihKota}
            onValueChange={(itemValue, itemIndex) => setPilihKota(itemValue)}
          >
            <Picker.item style={{
              color: '#A9A9A9',
              fontSize: 20,
              }} 
              label="Nama Kota" value="kota"/>
            <Picker.item label="Bandung" value="Bandung"/>
            <Picker.item label="Kab. Bandung" value="Kab. Bandung"/>
            <Picker.item label="Jakarta Pusat" value="Jakarta Pusat"/>
            <Picker.item label="Jakarta Utara" value="Jakarta Utara"/>
            <Picker.item label="Jakarta Selatan" value="Jakarta Selatan"/>
            <Picker.item label="Jakarta Barat" value="Jakarta Barat"/>
            <Picker.item label="Jakarta Timur" value="Jakarta Timur"/>
            <Picker.item label="Garut" value="Garut"/>
            <Picker.item label="Semarang" value="Semarang"/>
          </Picker>
        </View>
        <View style={styles.pickerView}>
          <Picker style={styles.picker}
            mode="dropdown"
            selectedValue={pilihKecamatan}
            onValueChange={(itemValue, itemIndex) => setPilihKecamatan(itemValue)}
          >
            <Picker.item style={{
              color: '#A9A9A9',
              fontSize: 20,
              }} 
              label="Nama Kecamatan" value="kecamatan"/>
            <Picker.item label="Cempaka Putih" value="Cempaka Putih"/>
            <Picker.item label="Gambir" value="Gambir"/>
            <Picker.item label="Kemayoran" value="Kemayoran"/>
            <Picker.item label="Menteng" value="Menteng"/>
            <Picker.item label="Kelapa Gading" value="Kelapa Gading"/>
            <Picker.item label="Kebon Jeruk" value="Kebon Jeruk"/>
            <Picker.item label="Geger Kalong" value="Geger Kalong"/>
            <Picker.item label="Ciwaruga" value="Ciwaruga"/>
            <Picker.item label="Soreang" value="Soreang"/>
          </Picker>
        </View>
        <View style={styles.pickerView}>
          <Picker style={styles.picker}
            mode="dropdown"
            selectedValue={pilihKodePos}
            onValueChange={(itemValue, itemIndex) => setPilihKodePos(itemValue)}
          >
            <Picker.item style={{
              color: '#A9A9A9',
              fontSize: 20,
              }} 
              label="Kode Pos" value="pos"/>
            <Picker.item label="40911" value="40911"/>
            <Picker.item label="40912" value="40912"/>
            <Picker.item label="40913" value="40913"/>
            <Picker.item label="40914" value="40914"/>
            <Picker.item label="40915" value="40915"/>
            <Picker.item label="40916" value="40916"/>
            <Picker.item label="40917" value="40917"/>
            <Picker.item label="40918" value="40918"/>
            <Picker.item label="40919" value="40919"/>
          </Picker>
        </View>
        <TouchableOpacity 
        style={styles.button}
        >
          <Text style={{
            fontSize: 18,
            color: "white",
            
          }}>Simpan</Text>
        </TouchableOpacity>
      </ScrollView>
        
    );
};

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
    width: 70,
    height: 70,
    borderRadius: 40
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
    paddingHorizontal: '37%',
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#0C8EFF",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    //textAlign: "center",
  },
});

export default EditStoreProfile;