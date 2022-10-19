import React from 'react';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as usePoppins, Poppins_300Light, Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { HomeScreen } from './src/features/home/screens/home.screen';
import { theme } from './src/infrastructures/theme';
import { makeServer } from './src/services/mocks/mocks.server';
import { BarberContextProvider } from './src/services/barbers/barbers.context';
import { Navigation } from './src/infrastructures/navigation';
import { AppNavigator } from './src/infrastructures/navigation/app.navigator';
import { OnboardContextProvider } from './src/services/onboarding/onboarding.context';
import { NavigationContainer } from '@react-navigation/native';


if (window.server) {
  window.server.shutdown();
}

window.server = makeServer();

export default function App() {


  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  const [poppinsLoaded] = usePoppins({
    Poppins_300Light, Poppins_400Regular, Poppins_700Bold
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }



  return (
    <>
      <ThemeProvider theme={theme}>
        <OnboardContextProvider>
          <BarberContextProvider>
           <NavigationContainer>
              <Navigation onboard={false}/>
           </NavigationContainer>
          </BarberContextProvider>
        </OnboardContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

