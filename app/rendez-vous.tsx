import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const DR_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCA1Dq7PNiFpDfzKnR_707MaASNofXYIgo-1DeWgmkY99noRlekcy2r6yniwwswmw7HEdjNifFEzVfBaX5v2DmW_0RLqUfyXxBEvv-oeUBdjg9r3eKq3olffcb4sJv_zix-jNfBNb1DjNkq3pC02I_ZSAR-Ac-s9pICW1R4ICvZzxgU2E_-qN5LncaHrGegPN_qKT3TPuc5oULeySUNM32xuWrJ8UPny8B-2SqqJ3z9MYIMkNypT_u81hss8VqkbM28GfvfB0Z7ZVY';

const DATES = [
  { d: 'Lun', n: '23' },
  { d: 'Mar', n: '24' },
  { d: 'Mer', n: '25' },
  { d: 'Jeu', n: '26' },
] as const;

const TIMES = [
  { t: '09:30', icon: 'sunny-outline' as const, iconActive: 'sunny-outline' as const, accent: false },
  { t: '14:00', icon: 'sunny-outline' as const, iconActive: 'sunny' as const, accent: true },
  { t: '16:30', icon: 'partly-sunny-outline' as const, iconActive: 'partly-sunny-outline' as const, accent: false },
  { t: '18:00', icon: 'moon-outline' as const, iconActive: 'moon-outline' as const, accent: false },
] as const;

export default function RendezVousScreen() {
  const insets = useSafeAreaInsets();
  const [selectedDay, setSelectedDay] = useState<string>('23');
  const [selectedTime, setSelectedTime] = useState<string>('14:00');

  const partnerCardShadow = Platform.select({
    ios: { shadowColor: '#00569F', shadowOpacity: 0.04, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
    android: { elevation: 2 },
    default: { shadowColor: '#00569F', shadowOpacity: 0.04, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
  });

  const bottomBarShadow = Platform.select({
    ios: { shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 15, shadowOffset: { width: 0, height: -10 } },
    android: { elevation: 8 },
    default: { shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 15, shadowOffset: { width: 0, height: -10 } },
  });

  const confirmShadow = Platform.select({
    ios: { shadowColor: '#1e3a8a', shadowOpacity: 0.2, shadowRadius: 12, shadowOffset: { width: 0, height: 6 } },
    android: { elevation: 4 },
    default: { shadowColor: '#1e3a8a', shadowOpacity: 0.2, shadowRadius: 12, shadowOffset: { width: 0, height: 6 } },
  });

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="min-h-[88px] flex-row items-center justify-between border-b border-[#E8E8E8] bg-[#FAFAF9] px-5 pt-3 pb-2">
        <View className="min-w-0 flex-1 flex-row items-center gap-3">
          <Pressable
            className="items-center justify-center rounded-full bg-[#EEEEEE] p-3 active:opacity-70"
            hitSlop={6}
            onPress={() => router.back()}>
            <Ionicons color="#1E40AF" name="arrow-back" size={26} />
          </Pressable>
          <Text className="min-w-0 flex-1 text-xl font-bold leading-tight tracking-tight text-blue-800" numberOfLines={2}>
            Prendre rendez-vous
          </Text>
        </View>
        <Text className="ml-2 shrink-0 text-2xl font-black text-blue-900">Akwaba</Text>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 200 }} showsVerticalScrollIndicator={false}>
        <View className="mx-auto w-full max-w-2xl px-6 py-8">
          <View className="mb-10 flex-row gap-2 overflow-hidden px-1">
            <View className="h-3 flex-1 rounded-full bg-[#00569F]" />
            <View className="h-3 flex-1 rounded-full bg-[#00569F]" />
            <View className="h-3 flex-1 rounded-full bg-[#E2E2E2]" />
          </View>

          <View className="mb-12">
            <Text className="mb-6 text-2xl font-bold text-[#1A1C1C]">Votre partenaire sélectionnée</Text>
            <View className="flex-row items-center gap-5 rounded-xl bg-white p-6" style={partnerCardShadow}>
              <View className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-[#EEEEEE]">
                <Image className="h-full w-full" resizeMode="cover" source={{ uri: DR_IMG }} />
              </View>
              <View className="min-w-0 flex-1">
                <Text className="mb-1 text-xl font-bold text-[#1A1C1C]">Dr. Sylvie Moreau</Text>
                <Text className="text-sm font-medium text-[#40493D]">Kinésithérapeute spécialisée</Text>
                <View className="mt-2 flex-row items-center gap-2">
                  <Ionicons color="#106D20" name="checkmark-circle" size={20} />
                  <Text className="text-sm font-bold text-[#106D20]">Profil vérifié Akwaba</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="mb-12">
            <View className="mb-6 flex-row items-end justify-between gap-3">
              <View className="min-w-0 flex-1">
                <Text className="text-2xl font-bold text-[#1A1C1C]">Choisissez la date</Text>
                <Text className="mt-1 text-sm text-[#40493D]">Sélectionnez un jour de visite</Text>
              </View>
              <Text className="shrink-0 text-base font-bold text-[#00569F]">Octobre 2023</Text>
            </View>
            <View className="flex-row flex-wrap gap-3">
              {DATES.map((x) => {
                const active = selectedDay === x.n;
                return (
                  <Pressable
                    key={x.n}
                    className={`min-w-[22%] flex-1 flex-col items-center justify-center rounded-xl py-5 ${active ? 'bg-[#00569F]' : 'border border-[#F0F0F0] bg-white'}`}
                    onPress={() => setSelectedDay(x.n)}
                    style={
                      active
                        ? Platform.select({
                            ios: { shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
                            android: { elevation: 4 },
                            default: { shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
                          })
                        : undefined
                    }>
                    <Text
                      className={`text-xs font-medium uppercase tracking-wider ${active ? 'text-white/80' : 'text-[#40493D]'}`}>
                      {x.d}
                    </Text>
                    <Text className={`mt-1 text-3xl font-black ${active ? 'text-white' : 'text-[#1A1C1C]'}`}>{x.n}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View className="mb-12">
            <Text className="mb-6 text-2xl font-bold text-[#1A1C1C]">{`Choisissez l'heure`}</Text>
            <View className="flex-row flex-wrap gap-3">
              {TIMES.map((slot) => {
                const selected = selectedTime === slot.t;
                const isAccent = slot.accent && selected;
                return (
                  <Pressable
                    key={slot.t}
                    className={`w-[47%] flex-row items-center justify-center gap-3 rounded-full py-5 ${
                      isAccent
                        ? 'border-2 border-[#106D20] bg-[#9DF898]'
                        : selected
                          ? 'border-2 border-[#00569F] bg-[#E8F2FC]'
                          : 'border-2 border-transparent bg-[#F3F3F3]'
                    }`}
                    onPress={() => setSelectedTime(slot.t)}>
                    <Ionicons
                      color={isAccent ? '#1A7425' : '#1A1C1C'}
                      name={isAccent || selected ? slot.iconActive : slot.icon}
                      size={22}
                    />
                    <Text
                      className={`text-lg ${isAccent ? 'font-black text-[#1A7425]' : selected ? 'font-bold text-[#00569F]' : 'font-bold text-[#1A1C1C]'}`}>
                      {slot.t}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View className="mb-10 flex-row gap-4 rounded-xl bg-[#D4E3FF] p-5">
            <Ionicons color="#00569F" name="information-circle" size={28} />
            <View className="min-w-0 flex-1">
              <Text className="font-bold text-[#004786]">Confirmation instantanée</Text>
              <Text className="mt-1 text-base leading-relaxed text-[#004786]/90">
                Le Dr Moreau a validé ces créneaux pour les membres Akwaba.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        className="absolute bottom-0 left-0 right-0 rounded-t-[48px] bg-[#FAFAF9] px-6 pt-6"
        style={{ paddingBottom: Math.max(insets.bottom, 28), ...bottomBarShadow }}>
        <View className="mx-auto w-full max-w-2xl">
          <Pressable
            className="w-full flex-row items-center justify-center gap-3 rounded-full bg-[#00569F] py-7 active:opacity-95"
            style={confirmShadow}
            onPress={() => router.push('/confirmation-rdv')}>
            <Text className="text-lg font-black text-white">Confirmer le rendez-vous</Text>
            <Ionicons color="#FFFFFF" name="checkmark-circle" size={26} />
          </Pressable>
          <Text className="mt-4 text-center text-sm font-medium leading-relaxed text-[#40493D]">
            {`Modification gratuite jusqu'à 24h avant.`}
          </Text>
        </View>
      </View>

      <Pressable
        className="absolute bottom-32 right-6 z-40 h-20 w-20 items-center justify-center rounded-full bg-[#993300] shadow-xl active:opacity-90"
        onPress={() => router.push('/(tabs)/sos')}>
        <Ionicons color="#FFFFFF" name="warning" size={32} />
        <Text className="text-xs font-black uppercase text-white">SOS</Text>
      </Pressable>
    </SafeAreaView>
  );
}
