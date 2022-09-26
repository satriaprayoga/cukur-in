import React from 'react';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { HomeScreen } from './src/features/home/screens/home.screen';
import { theme } from './src/infrastructures/theme';
import { makeServer } from './src/services/mocks/mocks.server';


if(window.server){
  window.server.shutdown();
}

window.server=makeServer();

export default function App() {


  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded){
    return null;
  }

  

  return (
    <>
      <ThemeProvider theme={theme}>
        <HomeScreen/>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

