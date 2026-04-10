import { Tabs } from 'expo-router';
import React from 'react';

import { AkwabaHomeTabBar } from '@/components/home/akwaba-home-tab-bar';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <AkwabaHomeTabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: 'Accueil' }} />
      <Tabs.Screen name="explore" options={{ title: 'Carte' }} />
      <Tabs.Screen name="add" options={{ title: 'Ajouter' }} />
      <Tabs.Screen name="sos" options={{ title: 'SOS' }} />
      <Tabs.Screen name="profil" options={{ title: 'Profil' }} />
    </Tabs>
  );
}
