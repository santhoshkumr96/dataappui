import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import LoginProvider from './LoginAuthProvider/Provider';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <LoginProvider>
        <View >
          <Login/>
        </View>
      </LoginProvider>
    </PaperProvider>
  );
}