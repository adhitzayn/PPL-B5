import React, { useState, useEffect } from 'react';
import { View, ImageBackground} from 'react-native';

const SplashSuccess = ({navigation, route}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Store' ,{Domain:route.params.Domain});
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