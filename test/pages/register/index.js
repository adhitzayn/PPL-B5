// function RegisterBiodata({navigation}) {
//   return (
//     <View>
//       <BackArrow width={35} height={35} style={styles.backarrow}/>
//       <Text style={styles.judul}>Masukkan Nama Toko dan Domain</Text>
//         <View style={styles.input}>
//           <TextInput style={{ 
//             fontSize: 20,
//             }}
//             placeholder="Apa Nama Tokomu                                  "
//           />
//         </View>
//       <Text style={styles.reminder}>Nama yang menarik lebih mudah diingat pembeli</Text>
//       <Text style={styles.reminder}>Nama yang sudah dipilih tidak dapat diubah</Text>
//         <View style={styles.fixToText}>
//           <TextInput style={{ 
//             fontSize: 20,
//             }}
//             placeholder="Nama Domain                                        "
//           />
//         </View>
//       <Text style={styles.reminder}>Nama domain berupa ShadleX.com/store/...</Text>
//         <TouchableOpacity 
//         style={styles.button}
//         onPress={() => navigation.navigate('RegisterAlamat')}
//         >
//           <Text style={{
//             fontSize: 18,
//             color: "white",
            
//           }}>Lanjut</Text>
//         </TouchableOpacity>
//     </View>
//   );
// }





// function RegisterAlamat({navigation}) {
//   const [selectedValue, setSelectedValue] = useState();
//   return (
//     <ScrollView>
//     <View>
//       <BackArrow width={35} height={35} style={styles.backarrow}/>
//       <Text style={styles.judul}>Masukkan Alamat Toko</Text>
//         <View style={styles.pickerView}>
//           <Picker style={styles.picker}
//             selectedValue={selectedValue}
//             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//           >
//             <Picker.item label="Nama Kota" value="name"/>
//             <Picker.item label="Bandung" value="bdg"/>
//             <Picker.item label="Kab. Bandung" value="kbdg"/>
//             <Picker.item label="Jakarta Pusat" value="jktp"/>
//             <Picker.item label="Jakarta Utara" value="jktu"/>
//             <Picker.item label="Jakarta Selatan" value="jkts"/>
//             <Picker.item label="Jakarta Barat" value="jktb"/>
//             <Picker.item label="Jakarta Timur" value="jktt"/>
//             <Picker.item label="Garut" value="grt"/>
//             <Picker.item label="Semarang" value="smr"/>
//           </Picker>
//         </View>
//         <View style={styles.pickerView}>
//           <Picker style={styles.picker}
//             selectedValue={selectedValue}
//             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//           >
//             <Picker.item label="Nama Kecamatan" value="name"/>
//             <Picker.item label="Cempaka Putih" value="CP"/>
//             <Picker.item label="Gambir" value="Ga"/>
//             <Picker.item label="Kemayoran" value="Ke"/>
//             <Picker.item label="Menteng" value="Me"/>
//             <Picker.item label="Kelapa Gading" value="KG"/>
//             <Picker.item label="Kebon Jeruk" value="KJ"/>
//             <Picker.item label="Geger Kalong" value="GK"/>
//             <Picker.item label="Ciwaruga" value="Cw"/>
//             <Picker.item label="Sukajadi" value="Su"/>
//           </Picker>
//         </View>
//         <View style={styles.pickerView}>
//           <Picker style={styles.picker}
//             selectedValue={selectedValue}
//             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//           >
//             <Picker.item label="Kode Pos" value="name"/>
//             <Picker.item label="40911" value="s1"/>
//             <Picker.item label="40912" value="s2"/>
//             <Picker.item label="40913" value="s3"/>
//             <Picker.item label="40914" value="s4"/>
//             <Picker.item label="40915" value="s5"/>
//             <Picker.item label="40916" value="s6"/>
//             <Picker.item label="40917" value="s7"/>
//             <Picker.item label="40918" value="s8"/>
//             <Picker.item label="40919" value="s9"/>
//           </Picker>
//         </View>
//           <TouchableOpacity 
//         style={styles.button2}
//         onPress={() => navigation.navigate('RegisterAlamat')}
//         >
//           <Text style={{
//             fontSize: 18,
//             color: "white",
            
//           }}>Selesai</Text>
//         </TouchableOpacity>
//     </View>
//     </ScrollView>
//   );
// }