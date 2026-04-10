import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA04e9qh3POP56_jnkw39IsA6WvYqEWS9vs6HZAa6y8an3Cgbp8YQx4bdTiPHAB81bezdAnxsi0_DQduEfgjmrVojBbD7UJOwUgJ_sDjB6PMMWbJ0lySMNMqGDQa1fpUR2_9_yeV0HRztI14l4PupsluGPMoBZmgz5aqJHdONv2danzeSxWgQoLcEaBygNclZlnJN_mX-GKT7lKfLR9aO0xX3liAYtIy5bd5eOMFfbWS0k6xwo9QICY6sFxSv9dXQHxj4EJrwkFnzM';

function InfoRow({ icon, label, value, showBorder }: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string; showBorder?: boolean }) {
  return (
    <View className={`flex-row items-center gap-4 p-4 ${showBorder ? 'border-b border-black/[0.06]' : ''}`}>
      <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#00569F]/10">
        <Ionicons color="#00569F" name={icon} size={22} />
      </View>
      <View className="min-w-0 flex-1">
        <Text className="text-xs font-semibold text-[#40493D]">{label}</Text>
        <Text className="font-semibold text-[#1A1C1C]" numberOfLines={1}>
          {value}
        </Text>
      </View>
    </View>
  );
}

export default function ProfilTabScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="z-40 flex h-16 w-full flex-row items-center justify-between border-b border-stone-200/80 bg-white px-4">
        <Pressable className="h-10 w-10 items-center justify-center rounded-full active:bg-[#E8E8E8]" onPress={() => router.replace('/(tabs)')}>
          <Ionicons color="#00569F" name="arrow-back" size={22} />
        </Pressable>
        <Text className="text-lg font-bold text-[#00569F]">Mon profil</Text>
        <Pressable className="h-10 w-10 items-center justify-center rounded-full active:bg-[#E8E8E8]">
          <Ionicons color="#00569F" name="create-outline" size={22} />
        </Pressable>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        <View className="mx-auto w-full max-w-2xl gap-6 px-4 pt-6">
          <View className="items-center">
            <View className="relative">
              <View className="h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-md">
                <Image className="h-full w-full" resizeMode="cover" source={{ uri: AVATAR }} />
              </View>
              <View className="absolute bottom-1 right-1 h-7 w-7 items-center justify-center rounded-full bg-[#9DF898] shadow-sm">
                <Ionicons color="#1A7425" name="checkmark-circle" size={16} />
              </View>
            </View>
            <Text className="mt-4 text-2xl font-black tracking-tight text-[#1A1C1C]">Papa Koffi</Text>
            <Text className="mt-1 text-sm font-medium text-[#40493D]">Carte Senior · AKB-SR-00241</Text>
          </View>

          <View className="gap-3">
            <Text className="px-1 text-sm font-bold uppercase tracking-wider text-[#40493D]">Informations</Text>
            <View className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-sm">
              <InfoRow icon="call-outline" label="Téléphone" showBorder value="+225 07 12 34 56 78" />
              <InfoRow icon="mail-outline" label="E-mail" showBorder value="papa.koffi@email.com" />
              <InfoRow icon="gift-outline" label="Date de naissance" showBorder value="15 mars 1952" />
              <InfoRow icon="location-outline" label="Ville" value="Abidjan" />
            </View>
          </View>

          <View className="gap-3">
            <Text className="px-1 text-sm font-bold uppercase tracking-wider text-[#40493D]">Ma carte</Text>
            <View
              className="rounded-3xl border border-black/[0.06] bg-[#00569F] p-5 shadow-lg"
              style={{ shadowColor: '#00569F', shadowOpacity: 0.2, shadowRadius: 12 }}>
              <View className="flex-row items-start justify-between gap-3">
                <View>
                  <Text className="text-sm font-medium text-white/80">Statut</Text>
                  <Text className="mt-1 text-lg font-black text-white">ACTIF</Text>
                </View>
                <Ionicons color="rgba(255,255,255,0.9)" name="id-card-outline" size={36} />
              </View>
              <Text className="mt-4 text-sm text-white/85">
                Expire le <Text className="font-bold text-white">31 décembre 2026</Text>
              </Text>
            </View>
          </View>

          <View className="gap-3 pb-4">
            <Pressable
              className="flex-row items-center justify-between rounded-3xl border border-black/[0.06] bg-white p-4 shadow-sm active:bg-[#F3F3F3]"
              onPress={() => router.push('/centre-notifications')}>
              <View className="flex-row items-center gap-3">
                <Ionicons color="#707A6C" name="notifications-outline" size={22} />
                <Text className="font-bold text-[#1A1C1C]">Notifications</Text>
              </View>
              <Ionicons color="#707A6C" name="chevron-forward" size={22} />
            </Pressable>
            <Pressable className="flex-row items-center justify-between rounded-3xl border border-black/[0.06] bg-white p-4 shadow-sm active:bg-[#F3F3F3]">
              <View className="flex-row items-center gap-3">
                <Ionicons color="#707A6C" name="lock-closed-outline" size={22} />
                <Text className="font-bold text-[#1A1C1C]">Confidentialité</Text>
              </View>
              <Ionicons color="#707A6C" name="chevron-forward" size={22} />
            </Pressable>
            <Pressable className="flex-row items-center justify-between rounded-3xl border border-black/[0.06] bg-white p-4 shadow-sm active:bg-[#F3F3F3]">
              <View className="flex-row items-center gap-3">
                <Ionicons color="#707A6C" name="help-circle-outline" size={22} />
                <Text className="font-bold text-[#1A1C1C]">Aide & support</Text>
              </View>
              <Ionicons color="#707A6C" name="chevron-forward" size={22} />
            </Pressable>
            <Pressable
              className="mt-2 flex-row items-center justify-center gap-2 rounded-3xl border border-[#BA1A1A]/30 bg-[#FFDAD6] py-4 active:opacity-90"
              onPress={() => router.replace('/login')}>
              <Ionicons color="#BA1A1A" name="log-out-outline" size={20} />
              <Text className="font-bold text-[#BA1A1A]">Se déconnecter</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
