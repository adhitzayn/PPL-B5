import React from "react";
import { TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterBiodata, RegisterAlamat, SplashSuccess, Store, EditStoreProfile, TambahProduk, DaftarProduk, SettingProduk } from "../pages";
import PenButton from '../assets/Pen.svg';
import Setting from '../assets/Setting.svg';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Biodata" component={RegisterBiodata} options={{ headerShown: false }}/>
            <Stack.Screen name="Alamat" component={RegisterAlamat} options={{ headerShown: false}}/>
            <Stack.Screen name="Splash" component={SplashSuccess} options={{ headerShown: false }}/>
            <Stack.Screen name="Store" component={Store} 
                options={({navigation}) => ({ 
                    headerTitle: 'Toko Saya',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                            <PenButton width={30} height={30}/>
                        </TouchableOpacity>
                        ),
                        })}
                        />
            <Stack.Screen name="Edit" component={EditStoreProfile} 
                options={({navigation}) => ({ 
                    headerTitle: 'Informasi Toko'
                        })}/>
            <Stack.Screen name="TambahProduk" component={TambahProduk} options={{headerTitle:"Tambah Produk"}}/>
            <Stack.Screen name="DaftarProduk" component={DaftarProduk}
                options={({navigation}) => ({ 
                    headerTitle: 'Daftar Produk',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('SettingProduk')}>
                            <Setting width={30} height={30}/>
                        </TouchableOpacity>
                        ),
                        })}
            />
            <Stack.Screen name="SettingProduk" component={SettingProduk} options={{headerTitle:"Setting Produk"}}/>
        </Stack.Navigator>
    );
};

export default Router;