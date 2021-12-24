import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const EditStoreProfile = ({navigation}) => {
    const [pilihKota, setPilihKota] = useState();
    const [pilihKecamatan, setPilihKecamatan] = useState();
    const [pilihKodePos, setPilihKodePos] = useState();  
    return(
      <ScrollView style={styles.background}>

        {/* Gambar Profil */}

          <View flexDirection="row" style={styles.container}>
              <Image source={require('../../assets/Profile.png')} style={styles.picture}/>
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
                  <TouchableOpacity>
                      <Text style={{
                          fontSize: 13,
                          fontWeight: 'bold',
                          color: "#0C8EFF"
                      }}>Ganti Gambar</Text>
                  </TouchableOpacity>
                </View>
            </View>

        {/* Nama Toko dan domain */}

          <View style={styles.input}>
            <Text style={{marginStart: 5, fontSize:14}}>Nama Toko</Text>
            <TextInput
              style={{ 
              fontSize: 20,
              }}
              placeholder="Ontel                                  "
            />
          </View>
          <View style={styles.input}>
            <Text style={{marginStart: 5, fontSize:14}}>Nama Domain</Text>
            <TextInput style={{ 
              fontSize: 20,
              }}
              placeholder="Ontel                                        "
            />
          </View>
          <View style={styles.border}/>

        {/* Deskripsi Toko */}

          <View style={styles.input}>
            <Text style={{marginStart: 5, fontSize:14}}>Deskripsi Toko</Text>
            <TextInput style={{ 
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
            <Picker.item label="Bandung" value="bdg"/>
            <Picker.item label="Kab. Bandung" value="kbdg"/>
            <Picker.item label="Jakarta Pusat" value="jktp"/>
            <Picker.item label="Jakarta Utara" value="jktu"/>
            <Picker.item label="Jakarta Selatan" value="jkts"/>
            <Picker.item label="Jakarta Barat" value="jktb"/>
            <Picker.item label="Jakarta Timur" value="jktt"/>
            <Picker.item label="Garut" value="grt"/>
            <Picker.item label="Semarang" value="smr"/>
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
            <Picker.item label="Cempaka Putih" value="CP"/>
            <Picker.item label="Gambir" value="Ga"/>
            <Picker.item label="Kemayoran" value="Ke"/>
            <Picker.item label="Menteng" value="Me"/>
            <Picker.item label="Kelapa Gading" value="KG"/>
            <Picker.item label="Kebon Jeruk" value="KJ"/>
            <Picker.item label="Geger Kalong" value="GK"/>
            <Picker.item label="Ciwaruga" value="Cw"/>
            <Picker.item label="Soreang" value="So"/>
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
            <Picker.item label="40911" value="s1"/>
            <Picker.item label="40912" value="s2"/>
            <Picker.item label="40913" value="s3"/>
            <Picker.item label="40914" value="s4"/>
            <Picker.item label="40915" value="s5"/>
            <Picker.item label="40916" value="s6"/>
            <Picker.item label="40917" value="s7"/>
            <Picker.item label="40918" value="s8"/>
            <Picker.item label="40919" value="s9"/>
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