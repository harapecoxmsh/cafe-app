import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useRouter } from 'expo-router'; 



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Get navigation function from useNavigation hook
  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="cart" />
        <Stack.Screen 
          name="menu" 
          options={{
            headerRight: () => (
              <TouchableOpacity
                onPress={() => router.push('/cart') } // Navigate to "cart" screen
                style={{ marginRight: 15 }}
              >
                <Text style={{ color: 'orange' }}>Cart</Text>
              </TouchableOpacity>
            ),
          }}
        />
        
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
