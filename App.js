import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { TouchableOpacity } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';   

import HomeScreen from './Screens/HomeScreen';
import ListaRestaurantes from './Screens/ListaRestaurantes';
import ListaPontosTuristicos from './Screens/ListaPontosTuristicos';
import Sobre from './Screens/SobreScreen';
import Contato from './Screens/ContatoScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Início" 
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: '#466a8b' },
          headerTintColor: '#fff',
          headerTitle: '', 
          headerTitleAlign: 'center',
          // Isso força o botão de menu a abrir a aba lateral ao ser clicado!
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.toggleDrawer()} 
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="menu" size={28} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Ionicons name="search" size={24} color="white" />
            </TouchableOpacity>
          ),
        })}
      >
        <Drawer.Screen name="Início" component={HomeScreen} />
        <Drawer.Screen name="Restaurantes" component={ListaRestaurantes} />
        <Drawer.Screen name="Pontos Turísticos" component={ListaPontosTuristicos} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Contato" component={Contato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}