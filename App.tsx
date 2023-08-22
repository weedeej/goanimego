import { Colors } from '@/constants';
import { Home } from '@/screens';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3DarkTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DrawerItems = [
  {
      name: 'Profile',
      icon: <Feather name="user"/>
  },
  {
      name: 'Settings',
      icon: <Feather name="settings"/>
  },
  {
      name: 'Playlist',
      icon: <Feather name="play-circle"/>
  },
  {
      name: '',
      icon: <Feather name="settings"/>
  }
] // TODO: add drawer items

export default function App() {
  const theme = {
    ...MD3DarkTheme,
    fonts: {
      ...MD3DarkTheme.fonts
    },
    colors: Colors
  }

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Home />
      </PaperProvider>
    </SafeAreaProvider>
  );
}