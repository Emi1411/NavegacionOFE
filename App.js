import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Usuario from './screen/Usuario';
import Prueba from './screen/Prueba';

const Stack = createStackNavigator();

const App: () => React$Node = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Registro' component={Registro} />
        <Stack.Screen name='Usuario' component={Usuario} />
        <Stack.Screen name='Prueba' component={Prueba} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;