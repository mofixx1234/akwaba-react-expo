import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PRIMARY = '#00569F';
const STONE = '#57534E';
const ACTIVE = '#1E3A8A';

export type AkwabaHomeTabName = 'index' | 'explore' | 'add' | 'sos' | 'profil';

type TabItem = {
  routeName: Exclude<AkwabaHomeTabName, 'add'>;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconFocused: keyof typeof Ionicons.glyphMap;
  activeColor: string;
};

const SIDE_TABS: TabItem[] = [
  { routeName: 'index', label: 'Accueil', icon: 'home-outline', iconFocused: 'home', activeColor: ACTIVE },
  { routeName: 'explore', label: 'Carte', icon: 'map-outline', iconFocused: 'map', activeColor: ACTIVE },
  { routeName: 'sos', label: 'SOS', icon: 'warning-outline', iconFocused: 'warning', activeColor: ACTIVE },
  { routeName: 'profil', label: 'Profil', icon: 'person-outline', iconFocused: 'person', activeColor: ACTIVE },
];

/** Depuis un écran stack : bascule vers l’onglet demandé (équivalent à la barre d’accueil). */
export function replaceWithHomeTab(name: AkwabaHomeTabName) {
  if (name === 'index') {
    router.replace('/(tabs)');
    return;
  }
  router.replace(`/(tabs)/${name}`);
}

export type AkwabaHomeBottomNavProps = {
  /** Onglet actif (`null` sur un écran stack comme contacts / conseils). */
  activeTab: string | null;
  onNavigateToTab: (name: AkwabaHomeTabName) => void;
};

/**
 * Barre du bas identique à l’accueil : même disposition, couleurs et icônes que {@link AkwabaHomeTabBar}.
 */
export function AkwabaHomeBottomNav({ activeTab, onNavigateToTab }: AkwabaHomeBottomNavProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute bottom-0 left-0 right-0 z-50 flex-row items-end justify-around bg-white/95 px-4 pt-2"
      style={{
        paddingBottom: Math.max(insets.bottom, 16),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -8 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
        elevation: 16,
      }}>
      {SIDE_TABS.slice(0, 2).map((tab) => {
        const focused = activeTab === tab.routeName;
        return (
          <Pressable
            key={tab.routeName}
            className="items-center justify-center rounded-2xl px-1 py-2 active:opacity-80"
            onPress={() => onNavigateToTab(tab.routeName)}>
            <Ionicons
              color={focused ? tab.activeColor : STONE}
              name={focused ? tab.iconFocused : tab.icon}
              size={24}
            />
            <Text
              className="mt-0.5 text-[11px] font-bold leading-none"
              style={{ color: focused ? tab.activeColor : STONE }}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}

      <View className="items-center pb-1">
        <Pressable
          accessibilityLabel="Ajouter"
          className="h-14 w-14 -translate-y-3 items-center justify-center rounded-full bg-[#00569F] shadow-lg active:opacity-90"
          style={{ shadowColor: PRIMARY, shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } }}
          onPress={() => onNavigateToTab('add')}>
          <Ionicons color="#FFFFFF" name="add" size={28} />
        </Pressable>
      </View>

      {SIDE_TABS.slice(2).map((tab) => {
        const focused = activeTab === tab.routeName;
        return (
          <Pressable
            key={tab.routeName}
            className="items-center justify-center rounded-2xl px-1 py-2 active:opacity-80"
            onPress={() => onNavigateToTab(tab.routeName)}>
            <Ionicons
              color={focused ? tab.activeColor : STONE}
              name={focused ? tab.iconFocused : tab.icon}
              size={24}
            />
            <Text
              className="mt-0.5 text-[11px] font-bold leading-none"
              style={{ color: focused ? tab.activeColor : STONE }}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
