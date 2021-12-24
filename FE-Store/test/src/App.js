import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './router';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}
export default App;
