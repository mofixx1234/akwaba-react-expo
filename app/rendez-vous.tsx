import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const DR_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCA1Dq7PNiFpDfzKnR_707MaASNofXYIgo-1DeWgmkY99noRlekcy2r6yniwwswmw7HEdjNifFEzVfBaX5v2DmW_0RLqUfyXxBEvv-oeUBdjg9r3eKq3olffcb4sJv_zix-jNfBNb1DjNkq3pC02I_ZSAR-Ac-s9pICW1R4ICvZzxgU2E_-qN5LncaHrGegPN_qKT3TPuc5oULeySUNM32xuWrJ8UPny8B-2SqqJ3z9MYIMkNypT_u81hss8VqkbM28GfvfB0Z7ZVY';

export default function RendezVousScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="h-24 flex-row items-center justify-between bg-stone-50 px-8 pt-4">
        <View className="flex-row items-center gap-4">
          <Pressable
            className="items-center justify-center rounded-full bg-[#EEEEEE] p-4 active:opacity-70"
            onPress={() => router.back()}>
            <Ionicons color="#1E40AF" name="arrow-back" size={28} />
          </Pressable>
          <Text className="text-2xl font-bold tracking-tight text-blue-800">Prendre rendez-vous</Text>
        </View>
        <Text className="text-3xl font-black text-blue-900">Akwaba</Text>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 200 }} showsVerticalScrollIndicator={false}>
        <View className="mx-auto w-full max-w-2xl px-6 py-8">
          <View className="mb-10 flex-row gap-2 overflow-hidden px-2">
            <View className="h-3 flex-1 rounded-full bg-[#00569F]" />
            <View className="h-3 flex-1 rounded-full bg-[#00569F]" />
            <View className="h-3 flex-1 rounded-full bg-[#E2E2E2]" />
          </View>

          <View className="mb-12">
            <Text className="mb-6 text-2xl font-bold text-[#1A1C1C]">Votre partenaire sélectionnée</Text>
            <View
              className="flex-row items-center gap-6 rounded-xl bg-white p-6"
              style={{ shadowColor: '#00569F', shadowOpacity: 0.04, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } }}>
              <View className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-[#EEEEEE]">
                <Image className="h-full w-full" resizeMode="cover" source={{ uri: DR_IMG }} />
              </View>
              <View className="flex-1">
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
            <View className="mb-6 flex-row items-end justify-between">
              <View>
                <Text className="text-2xl font-bold text-[#1A1C1C]">Choisissez la date</Text>
                <Text className="mt-1 text-sm text-[#40493D]">Sélectionnez un jour de visite</Text>
              </View>
              <Text className="text-lg font-bold text-[#00569F]">Octobre 2023</Text>
            </View>
            <View className="flex-row flex-wrap gap-4">
              {[
                { d: 'Lun', n: '23', active: true },
                { d: 'Mar', n: '24', active: false },
                { d: 'Mer', n: '25', active: false },
                { d: 'Jeu', n: '26', active: false },
              ].map((x) => (
                <Pressable
                  key={x.n}
                  className={`min-w-[22%] flex-1 flex-col items-center justify-center rounded-xl p-6 ${x.active ? 'bg-[#00569F]' : 'bg-white'}`}
                  style={x.active ? { shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 8 } : undefined}>
                  <Text className={`text-sm font-medium uppercase tracking-wider ${x.active ? 'text-white/80' : 'text-[#40493D]'}`}>
                    {x.d}
                  </Text>
                  <Text className={`mt-1 text-3xl font-black ${x.active ? 'text-white' : 'text-[#1A1C1C]'}`}>{x.n}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View className="mb-12">
            <Text className="mb-6 text-2xl font-bold text-[#1A1C1C]">Choisissez l’heure</Text>
            <View className="flex-row flex-wrap gap-4">
              <Pressable className="w-[47%] flex-row items-center justify-center gap-3 rounded-full bg-[#F3F3F3] py-6">
                <Ionicons color="#1A1C1C" name="sunny-outline" size={22} />
                <Text className="text-xl font-bold text-[#1A1C1C]">09:30</Text>
              </Pressable>
              <Pressable className="w-[47%] flex-row items-center justify-center gap-3 rounded-full border-2 border-[#106D20] bg-[#9DF898] py-6">
                <Ionicons color="#1A7425" name="sunny" size={22} />
                <Text className="text-xl font-black text-[#1A7425]">14:00</Text>
              </Pressable>
              <Pressable className="w-[47%] flex-row items-center justify-center gap-3 rounded-full bg-[#F3F3F3] py-6">
                <Ionicons color="#1A1C1C" name="partly-sunny-outline" size={22} />
                <Text className="text-xl font-bold text-[#1A1C1C]">16:30</Text>
              </Pressable>
              <Pressable className="w-[47%] flex-row items-center justify-center gap-3 rounded-full bg-[#F3F3F3] py-6">
                <Ionicons color="#1A1C1C" name="moon-outline" size={22} />
                <Text className="text-xl font-bold text-[#1A1C1C]">18:00</Text>
              </Pressable>
            </View>
          </View>

          <View className="mb-10 flex-row gap-4 rounded-xl bg-[#D4E3FF] p-6">
            <Ionicons color="#00569F" name="information-circle" size={28} />
            <View className="flex-1">
              <Text className="font-bold text-[#004786]">Confirmation instantanée</Text>
              <Text className="mt-1 text-base text-[#004786]/80">
                Le Dr Moreau a validé ces créneaux pour les membres Akwaba.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        className="absolute bottom-0 left-0 right-0 rounded-t-[48px] bg-stone-50 px-6 pt-6 shadow-lg"
        style={{ paddingBottom: Math.max(insets.bottom, 24), shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 15, shadowOffset: { width: 0, height: -10 } }}>
        <View className="mx-auto w-full max-w-2xl">
          <Pressable
            className="w-full flex-row items-center justify-center gap-3 rounded-full bg-[#00569F] py-7 active:opacity-95"
            onPress={() => router.push('/confirmation-rdv')}>
            <Text className="text-lg font-black text-white">Confirmer le rendez-vous</Text>
            <Ionicons color="#FFFFFF" name="checkmark-circle" size={24} />
          </Pressable>
          <Text className="mt-4 text-center text-sm font-medium text-[#40493D]">
            Modification gratuite jusqu’à 24h avant.
          </Text>
        </View>
      </View>

      <Pressable
        className="absolute bottom-32 right-6 z-40 h-20 w-20 items-center justify-center rounded-full bg-[#993300] shadow-xl active:opacity-90"
        onPress={() => router.push('/sos')}>
        <Ionicons color="#FFFFFF" name="warning" size={32} />
        <Text className="text-xs font-black uppercase text-white">SOS</Text>
      </Pressable>
    </SafeAreaView>
  );
}
