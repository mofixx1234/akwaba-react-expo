import { Ionicons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PRIMARY = '#00569F';
const STONE = '#57534E';

type TabItem = {
  routeName: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconFocused: keyof typeof Ionicons.glyphMap;
  activeColor: string;
};

const ACTIVE = '#1E3A8A';

const TABS: TabItem[] = [
  { routeName: 'index', label: 'Accueil', icon: 'home-outline', iconFocused: 'home', activeColor: ACTIVE },
  { routeName: 'explore', label: 'Carte', icon: 'map-outline', iconFocused: 'map', activeColor: ACTIVE },
  { routeName: 'sos', label: 'SOS', icon: 'warning-outline', iconFocused: 'warning', activeColor: ACTIVE },
  { routeName: 'profil', label: 'Profil', icon: 'person-outline', iconFocused: 'person', activeColor: ACTIVE },
];

export function AkwabaHomeTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const activeRouteName = state.routes[state.index]?.name;

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
      {TABS.slice(0, 2).map((tab) => {
        const focused = activeRouteName === tab.routeName;
        return (
          <Pressable
            key={tab.routeName}
            className="items-center justify-center rounded-2xl px-1 py-2 active:opacity-80"
            onPress={() => navigation.navigate(tab.routeName as never)}>
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
          onPress={() => navigation.navigate('add' as never)}>
          <Ionicons color="#FFFFFF" name="add" size={28} />
        </Pressable>
      </View>

      {TABS.slice(2).map((tab) => {
        const focused = activeRouteName === tab.routeName;
        return (
          <Pressable
            key={tab.routeName}
            className="items-center justify-center rounded-2xl px-1 py-2 active:opacity-80"
            onPress={() => navigation.navigate(tab.routeName as never)}>
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
