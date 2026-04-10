import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const WATER_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD66Zu5DWhNJiFzBJX-zsLviQDJokK8DBpCqOakn8mxlHrH1Ai4LkcFeY7SjgrFe2toFGXfac7WJOfVFEydtNnfGA4AUHAnuVIrEuTT5Z8KiCEZkJHNfuhQxseKV1q-CBwNL9xur_BwTiywFxsDdaHfT-sWxf5Kn_DKl-d5au7IAL-Qb3VVo1uaVfXDZezPYXHDCMPThVF-DiwG1oqa48S1wBzN4KYB5JzBs4sg1CL6JVZZHc-Cpe8FMgc07Z6L5yFGhMWJ3d0AUVU';

export default function CentreNotificationsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="sticky z-50 bg-[#F9F9F9] px-6 py-4">
        <View className="mx-auto w-full max-w-screen-xl flex-row items-center justify-between">
          <Pressable className="active:opacity-90" onPress={() => router.back()}>
            <Ionicons color="#00569F" name="arrow-back" size={28} />
          </Pressable>
          <Text className="text-2xl font-bold tracking-tight text-[#00569F]">Akwaba</Text>
          <Pressable className="relative active:opacity-90">
            <Ionicons color="#00569F" name="notifications-outline" size={28} />
            <View className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#BA1A1A]" />
          </Pressable>
        </View>
      </View>

      <ScrollView className="flex-1 px-6" contentContainerStyle={{ paddingBottom: 140 + insets.bottom }} showsVerticalScrollIndicator={false}>
        <View className="mb-6 mt-8">
          <Text className="mb-2 text-4xl font-extrabold tracking-tight text-[#1A1C1C]">Vos notifications</Text>
          <Text className="text-lg font-medium text-[#40493D]/80">Restez informé de votre activité récente.</Text>
        </View>

        <View className="gap-3">
          <View className="gap-4 rounded-[20px] border-l-[6px] border-[#993300] bg-white p-4 shadow-sm">
            <View className="flex-row gap-4">
              <View className="rounded-full bg-[#FFDBCF] p-3">
                <Ionicons color="#993300" name="warning" size={24} />
              </View>
              <View className="flex-1">
                <View className="mb-1 flex-row items-center justify-between">
                  <Text className="text-xl font-bold text-[#1A1C1C]">Nouveau SOS</Text>
                  <Text className="text-sm font-semibold text-[#993300]">Il y a 5 minutes</Text>
                </View>
                <Text className="leading-relaxed text-[#40493D]">Une demande d’aide a été émise...</Text>
              </View>
            </View>
            <View className="mt-1 flex-row gap-3">
              <Pressable className="flex-1 rounded-full bg-[#EEEEEE] py-3 active:opacity-90">
                <Text className="text-center font-bold text-[#40493D]">Ignorer</Text>
              </Pressable>
              <Pressable className="flex-[1.4] rounded-full bg-[#993300] py-3 active:opacity-90">
                <Text className="text-center font-bold text-white">Voir l’alerte</Text>
              </Pressable>
            </View>
          </View>

          <View className="gap-4 rounded-[20px] border-l-[6px] border-[#106D20] bg-white p-4 shadow-sm">
            <View className="flex-row gap-4">
              <View className="rounded-full bg-[#9DF898] p-3">
                <Ionicons color="#106D20" name="shield-checkmark" size={24} />
              </View>
              <View className="flex-1">
                <View className="mb-1 flex-row items-center justify-between">
                  <Text className="text-xl font-bold text-[#1A1C1C]">Alerte santé</Text>
                  <Text className="text-sm font-semibold text-[#106D20]">Il y a 1 heure</Text>
                </View>
                <Text className="leading-relaxed text-[#40493D]">Il est temps de prendre votre tension...</Text>
              </View>
            </View>
            <View className="mt-1 flex-row gap-3">
              <Pressable className="flex-1 rounded-full bg-[#EEEEEE] py-3 active:opacity-90">
                <Text className="text-center font-bold text-[#40493D]">Plus tard</Text>
              </Pressable>
              <Pressable className="flex-[1.4] rounded-full bg-[#106D20] py-3 active:opacity-90">
                <Text className="text-center font-bold text-white">Mesurer</Text>
              </Pressable>
            </View>
          </View>

          <View className="gap-4 rounded-[20px] border-l-[6px] border-[#00569F] bg-white p-4 shadow-sm">
            <View className="flex-row gap-4">
              <View className="rounded-full bg-[#D4E3FF] p-3">
                <Ionicons color="#00569F" name="calendar" size={24} />
              </View>
              <View className="flex-1">
                <View className="mb-1 flex-row items-center justify-between">
                  <Text className="text-xl font-bold text-[#1A1C1C]">Rendez-vous demain</Text>
                  <Text className="text-sm font-semibold text-[#00569F]">Il y a 3 heures</Text>
                </View>
                <Text className="leading-relaxed text-[#40493D]">Visite chez le Docteur Martin...</Text>
              </View>
            </View>
            <View className="mt-1 flex-row gap-3">
              <Pressable className="flex-1 rounded-full bg-[#EEEEEE] py-3 active:opacity-90">
                <Text className="text-center font-bold text-[#40493D]">Effacer</Text>
              </Pressable>
              <Pressable className="flex-[1.4] rounded-full bg-[#00569F] py-3 active:opacity-90">
                <Text className="text-center font-bold text-white">Détails</Text>
              </Pressable>
            </View>
          </View>

          <View className="relative mt-8 h-48 overflow-hidden rounded-[2rem] bg-[#00569F]/5 p-8">
            <View className="z-10 max-w-[60%]">
              <Text className="mb-2 text-2xl font-bold text-[#00569F]">Conseil du jour</Text>
              <Text className="text-[#40493D]">Pensez à boire un grand verre d’eau toutes les deux heures.</Text>
            </View>
            <Image
              className="absolute right-0 top-0 h-full w-1/3 opacity-80"
              resizeMode="cover"
              source={{ uri: WATER_IMG }}
            />
          </View>
        </View>
      </ScrollView>

      <View
        className="absolute bottom-0 left-0 right-0 z-50 flex-row items-center justify-around rounded-t-[48px] bg-stone-50 px-6 pb-8 pt-4 shadow-lg"
        style={{ paddingBottom: Math.max(insets.bottom, 32), shadowColor: '#00569F', shadowOpacity: 0.06, shadowRadius: 20, shadowOffset: { width: 0, height: -4 } }}>
        <Pressable className="items-center px-4 py-2 active:opacity-90" onPress={() => router.replace('/(tabs)')}>
          <Ionicons color="#57534E" name="home-outline" size={28} />
          <Text className="text-lg font-bold text-stone-600">Accueil</Text>
        </Pressable>
        <Pressable className="items-center px-4 py-2 active:opacity-90" onPress={() => router.push('/explore')}>
          <Ionicons color="#57534E" name="map-outline" size={28} />
          <Text className="text-lg font-bold text-stone-600">Carte</Text>
        </Pressable>
        <Pressable className="items-center px-4 py-2 active:opacity-90" onPress={() => router.push('/sos')}>
          <Ionicons color="#57534E" name="warning-outline" size={28} />
          <Text className="text-lg font-bold text-stone-600">SOS</Text>
        </Pressable>
        <Pressable
          className="items-center rounded-full bg-blue-100 px-6 py-3 active:opacity-90"
          onPress={() => router.push('/profil')}>
          <Ionicons color="#1E3A8A" name="person" size={28} />
          <Text className="text-lg font-bold text-blue-900">Profil</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
