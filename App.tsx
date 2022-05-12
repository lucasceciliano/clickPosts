
import React from 'react';
import {useFonts, Inter_300Light, Inter_500Medium, Inter_700Bold} from "@expo-google-fonts/inter";
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import {User} from './src/screens/User';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_500Medium,
    Inter_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >
      <User />
    </ThemeProvider>
  );
}
