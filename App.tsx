import { Home } from '@/screens';
import { PaperProvider, MD3DarkTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const theme = {
    ...MD3DarkTheme,
    fonts: {
      ...MD3DarkTheme.fonts
    }
  }
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Home/>
      </PaperProvider>
    </SafeAreaProvider>
  );
}