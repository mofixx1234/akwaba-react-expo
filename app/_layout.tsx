/**
 * Ce fichier définit la structure de navigation principale de l’application avec React Navigation et Expo Router.
 * 
 * 1. Importations:
 *    - @react-navigation/native : Pour le gestionnaire de thèmes (clair/sombre) natif.
 *    - expo-router : Pour la déclaration et la gestion des écrans avec la navigation stackée.
 *    - expo-status-bar : Pour personnaliser la barre de statut de l’appareil.
 *    - react-native-reanimated : Pour activer les animations fluides dans l’app.
 *    - useColorScheme (hook personnalisé) : Pour détecter si le mode clair ou sombre est actif.
 * 
 * 2. Paramètre `unstable_settings` :
 *    Ceci ancre la navigation principale sur le groupe '(tabs)'.
 * 
 * 3. Fonction principale `RootLayout` :
 *    - Récupère le thème (clair/sombre) avec le hook personnalisé.
 *    - Fournit le thème à la navigation via `ThemeProvider` (Permet un look natif pour chaque mode).
 *    - Définit une Stack de navigation, déclarant explicitement les écrans clés de l’application, tous sans header pour un affichage personnalisé.
 *    - Le dernier écran utilise une présentation de type "modal" (pop-up).
 *    - `StatusBar` est global à l’app, le style "auto" s’adapte au mode.
 * 
 * Remarque : Ce composant encadre l’application et configure la racine de la navigation mobile.
 */

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';

import { useColorScheme } from '@/hooks/use-color-scheme';

// Ce paramètre ancre la navigation principale sur le groupe de tabs.
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  // Récupère si l'utilisateur préfère un thème sombre ou clair.
  const colorScheme = useColorScheme();

  return (
    // Applique le bon thème à toute l'arborescence de navigation.
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Ecran principal (onglets) sans header */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Ecran de connexion */}
        <Stack.Screen name="login" options={{ headerShown: false }} />
        {/* Ecran d'inscription */}
        <Stack.Screen name="inscription" options={{ headerShown: false }} />
        {/* Ecran de configuration du profil */}
        <Stack.Screen name="config-profil" options={{ headerShown: false }} />
        {/* Ecran de succès après inscription */}
        <Stack.Screen name="success" options={{ headerShown: false }} />
        {/* Modal générique */}
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      {/* Barre de statut adaptative */}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
