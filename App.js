import React from 'react';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { HomeScreen } from './src/features/home/screens/home.screen';
import { theme } from './src/infrastructures/theme';
import { makeServer } from './src/services/mocks/mocks.server';
import { BarberContextProvider } from './src/services/barbers/barbers.context';
import { Navigation } from './src/infrastructures/navigation';
import { AppNavigator } from './src/infrastructures/navigation/app.navigator';


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
        <BarberContextProvider>
          <AppNavigator/>
        </BarberContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

