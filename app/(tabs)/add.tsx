import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { useCallback, useMemo, useRef } from 'react';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { replaceWithHomeTab } from '@/components/home/akwaba-home-bottom-nav';

const PRIMARY = '#00569F';
/** Fond révélé par l’animation + zone contenu */
const REVEAL_BG = '#FFFFFF';

const OPEN_DURATION = 560;
const CLOSE_DURATION = 480;

const OPEN_EASING = Easing.out(Easing.cubic);
const CLOSE_EASING = Easing.in(Easing.cubic);

type ActionItem = {
  key: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  useHandshake?: boolean;
};

const CIRCLE_SIZE = 80;
/** Même largeur pour toutes les pastilles (évite SOS trop petit vs les autres) */
const LABEL_WIDTH = 132;
const SHORTCUTS_PER_ROW = 2;

function PebbleShortcut({ item }: { item: ActionItem }) {
  const r = CIRCLE_SIZE / 2;

  return (
    <Pressable
      className="active:opacity-90"
      style={{ width: LABEL_WIDTH, alignItems: 'center' }}
      onPress={() => {
        void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        item.onPress();
      }}>
      <View
        className="items-center justify-center"
        style={{
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          borderRadius: r,
          backgroundColor: PRIMARY,
          shadowColor: PRIMARY,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.35,
          shadowRadius: 8,
          elevation: 6,
        }}>
        {item.useHandshake ? (
          <MaterialCommunityIcons color="#FFFFFF" name="handshake" size={38} />
        ) : (
          <Ionicons color="#FFFFFF" name={item.icon} size={38} />
        )}
      </View>
      <View
        className="rounded-full border border-[#E8EEF4] bg-[#F7FAFC] px-2 py-1.5"
        style={{ width: LABEL_WIDTH, marginTop: 8 }}>
        <Text className="text-center text-[12px] font-bold leading-snug text-[#1A1C1C]" numberOfLines={2}>
          {item.label}
        </Text>
      </View>
    </Pressable>
  );
}

export default function AddTabScreen() {
  const { width, height } = useWindowDimensions();
  const closingRef = useRef(false);

  const baseRadius = 44;
  const maxScale = useMemo(() => {
    const halfDiag = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
    return halfDiag / baseRadius + 0.08;
  }, [width, height]);

  const progress = useSharedValue(0);

  const playOpen = useCallback(() => {
    cancelAnimation(progress);
    progress.value = 0;
    progress.value = withTiming(1, {
      duration: OPEN_DURATION,
      easing: OPEN_EASING,
    });
  }, [progress]);

  useFocusEffect(
    useCallback(() => {
      playOpen();
      return () => {
        cancelAnimation(progress);
        progress.value = 0;
        closingRef.current = false;
      };
    }, [playOpen, progress])
  );

  const goHome = useCallback(() => {
    router.replace('/(tabs)');
    closingRef.current = false;
  }, []);

  const handleClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    cancelAnimation(progress);
    progress.value = withTiming(
      0,
      {
        duration: CLOSE_DURATION,
        easing: CLOSE_EASING,
      },
      (finished) => {
        if (finished) {
          runOnJS(goHome)();
        } else {
          runOnJS(() => {
            closingRef.current = false;
          })();
        }
      }
    );
  }, [goHome, progress]);

  const circleStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [0.02, maxScale]);
    return {
      transform: [{ scale }],
    };
  });

  const contentStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 0.38, 0.68], [0, 0, 1]),
  }));

  const titleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 0.48, 0.78], [0, 0, 1]),
    transform: [
      {
        translateY: interpolate(progress.value, [0, 0.52, 1], [14, 14, 0]),
      },
    ],
  }));

  const shortcutsStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 0.45, 0.75], [0, 0, 1]),
    transform: [
      {
        translateY: interpolate(progress.value, [0, 0.55, 1], [20, 20, 0]),
      },
    ],
  }));

  /** Espace horizontal entre les deux raccourcis d’une ligne (cercles plus proches) */
  const shortcutGapH = 18;
  const shortcutGapV = 22;

  const actions: ActionItem[] = useMemo(
    () => [
      {
        key: 'souvenirs',
        label: 'Espace souvenirs',
        icon: 'images',
        onPress: () => router.push('/souvenirs'),
      },
      {
        key: 'sos',
        label: 'SOS',
        icon: 'warning',
        onPress: () => replaceWithHomeTab('sos'),
      },
      {
        key: 'prendre-rdv',
        label: 'Prendre rendez-vous',
        icon: 'medkit',
        onPress: () => router.push('/partenaires'),
      },
      // {
      //   key: 'partenaires',
      //   label: 'Partenaires',
      //   icon: 'people',
      //   onPress: () => router.push('/partenaires'),
      //   useHandshake: true,
      // },
      // {
      //   key: 'carte',
      //   label: 'Ma carte',
      //   icon: 'map',
      //   onPress: () => replaceWithHomeTab('explore'),
      // },
    ],
    []
  );

  const actionRows = useMemo(() => {
    const rows: ActionItem[][] = [];
    for (let i = 0; i < actions.length; i += SHORTCUTS_PER_ROW) {
      rows.push(actions.slice(i, i + SHORTCUTS_PER_ROW));
    }
    return rows;
  }, [actions]);

  return (
    <View className="flex-1" style={{ backgroundColor: PRIMARY }}>
      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: 'absolute',
            width: baseRadius * 2,
            height: baseRadius * 2,
            borderRadius: baseRadius,
            backgroundColor: REVEAL_BG,
            top: height / 2 - baseRadius,
            left: width / 2 - baseRadius,
          },
          circleStyle,
        ]}
      />

      <SafeAreaView className="flex-1" edges={['top', 'bottom']} style={{ zIndex: 2 }}>
        <Animated.View style={[contentStyle, { flex: 1, backgroundColor: REVEAL_BG }]}>
          <View className="flex-row items-center justify-between px-4 pt-1">
            <Pressable
              accessibilityLabel="Fermer"
              className="h-11 w-11 items-center justify-center rounded-full bg-white active:opacity-80"
              hitSlop={12}
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.12,
                shadowRadius: 6,
                elevation: 4,
              }}
              onPress={handleClose}>
              <Ionicons color={PRIMARY} name="close" size={26} />
            </Pressable>
            <View className="h-11 w-11" />
          </View>

          <View className="flex-1 px-5 pb-8">
            <Animated.View style={titleStyle}>
              <Text className="mt-1 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-[#00569F]/75">
                Raccourcis
              </Text>
              <Text className="mt-1.5 text-center text-3xl font-black tracking-tight text-[#1A1A1A]">Accès rapide</Text>
            </Animated.View>

            <Animated.View
              className="flex-1 justify-center"
              style={[
                shortcutsStyle,
                {
                  marginTop: 100,
                },
              ]}>
              <View style={{ alignItems: 'center', gap: shortcutGapV }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: shortcutGapH }}>
                  {actions.slice(0, 2).map((item) => (
                    <PebbleShortcut key={item.key} item={item} />
                  ))}
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: shortcutGapH }}>
                  {actions.slice(2, 4).map((item) => (
                    <PebbleShortcut key={item.key} item={item} />
                  ))}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                  {actions.slice(4, 5).map((item) => (
                    <PebbleShortcut key={item.key} item={item} />
                  ))}
                </View>
              </View>
            </Animated.View>
          </View>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}
