import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BackArrow from '../../assets/arrow.svg';
import { Picker } from '@react-native-picker/picker';

const RegisterAlamat = ({navigation}) => {
  const [pilihKota, setPilihKota] = useState();
  const [pilihKecamatan, setPilihKecamatan] = useState();
  const [pilihKodePos, setPilihKodePos] = useState();
  return (
    <View style={styles.background}>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Biodata')}>
        <BackArrow width={35} height={35} style={styles.backarrow}/>
      </TouchableOpacity>
      <Text style={styles.judul}>Masukkan Alamat Toko</Text>
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
        style={styles.button2}
        onPress={() => navigation.navigate('Splash')}
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