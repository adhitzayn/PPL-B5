import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BackArrow from '../../assets/arrow.svg';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const RegisterAlamat = ({navigation, route}) => {
  const [pilihKota, setPilihKota] = useState();
  const [pilihKecamatan, setPilihKecamatan] = useState();
  const [pilihKodePos, setPilihKodePos] = useState();

  const submit = () => {
    const data = {
      nama_toko: route.params.Toko,
      nama_domain: route.params.Domain,
      nama_kota: pilihKota,
      nama_kecamatan: pilihKecamatan,
      kodepos_toko: pilihKodePos,
    }
    console.log('data before send: ', data);
    axios.post('http://192.168.1.8:8080/stores', data)
    .then(res =>{
      console.log('resp: ', res)
      navigation.navigate('Splash')
    })
    .catch(error => console.log('error', error))
  }

  return (
    <View style={styles.background}>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Biodata')}>
        <BackArrow width={35} height={35} style={styles.backarrow}/>
      </TouchableOpacity>
      <Text style={styles.judul}>Masukkan Alamat Toko{route.params.Toko}{route.params.Domain}</Text>
        <View style={styles.pickerView}>
          <Picker style={styles.pickerTop}
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
        style={styles.button2}
        onPress={() => navigation.navigate('Splash'), submit}
        >
          <Text style={{
            fontSize: 18,
            color: "white",
            
          }}>Selesai</Text>
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
    fontSize: 13,
    
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
  pickerTop: {
    marginTop: 55,
    fontSize: 20,
  },
  pickerView: {
    marginLeft: 20,
    marginEnd: 20,
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
    marginTop: 385,
    marginBottom: 6,
    //textAlign: "center",
  },
  bottom:{
    marginTop: 60,
    justifyContent: 'center',
  }
});

export default RegisterAlamat;