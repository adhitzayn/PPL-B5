import React, { useState, useEffect } from 'react';
import { View, ImageBackground} from 'react-native';

const SplashSuccess = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Store');
        }, 4000);
    });
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/Success.png')} resizeMode="cover" style={{
                flex: 1,
                justifyContent: "center"
            }}/>
        </View>
    );
};


export default SplashSuccess;