import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { AkwabaHomeBottomNav, type AkwabaHomeTabName } from '@/components/home/akwaba-home-bottom-nav';

export function AkwabaHomeTabBar({ state, navigation }: BottomTabBarProps) {
  const activeRouteName = state.routes[state.index]?.name ?? null;

  const onNavigateToTab = (name: AkwabaHomeTabName) => {
    navigation.navigate(name as never);
  };

  return <AkwabaHomeBottomNav activeTab={activeRouteName} onNavigateToTab={onNavigateToTab} />;
}
