import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AVATAR_URI =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA04e9qh3POP56_jnkw39IsA6WvYqEWS9vs6HZAa6y8an3Cgbp8YQx4bdTiPHAB81bezdAnxsi0_DQduEfgjmrVojBbD7UJOwUgJ_sDjB6PMMWbJ0lySMNMqGDQa1fpUR2_9_yeV0HRztI14l4PupsluGPMoBZmgz5aqJHdONv2danzeSxWgQoLcEaBygNclZlnJN_mX-GKT7lKfLR9aO0xX3liAYtIy5bd5eOMFfbWS0k6xwo9QICY6sFxSv9dXQHxj4EJrwkFnzM';

const CARD_BORDER = 'rgba(0,0,0,0.03)';

function QuickRow({
  icon,
  label,
  iconBgClass,
  iconColor,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  iconBgClass: string;
  iconColor: string;
  onPress?: () => void;
}) {
  return (
    <Pressable
      className="flex-row items-center justify-between rounded-3xl border bg-white p-5 shadow-sm active:bg-[#F3F3F3]"
      style={{ borderColor: CARD_BORDER }}
      onPress={onPress}>
      <View className="flex-row items-center gap-4">
        <View className={`rounded-2xl p-3 ${iconBgClass}`}>
          <Ionicons color={iconColor} name={icon} size={24} />
        </View>
        <Text className="text-lg font-bold text-[#1A1C1C]">{label}</Text>
      </View>
      <Ionicons color="#707A6C" name="chevron-forward" size={24} />
    </Pressable>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="h-16 flex-row items-center justify-between bg-[#F9F9F9] px-4">
        <View className="flex-row items-center gap-3">
          {/* <Pressable
            className="h-10 w-10 items-center justify-center rounded-full active:bg-[#E8E8E8]"
            onPress={() => router.back()}>
            <Ionicons color="#00569F" name="arrow-back" size={26} />
          </Pressable> */}
          <Text className="text-xl font-bold tracking-tight text-[#00569F]">Akwaba</Text>
        </View>
        <View className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm">
          <Image className="h-full w-full" resizeMode="cover" source={{ uri: AVATAR_URI }} />
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}>
        <View className="mx-auto mt-4 w-full max-w-2xl gap-6 px-4">
          <View className="gap-1">
            <Text className="text-4xl font-black leading-tight tracking-tight text-[#1A1C1C]">
              Bonjour Papa Koffi
            </Text>
            <Text className="text-lg font-medium text-[#40493D]">{`Comment allez-vous aujourd'hui ?`}</Text>
          </View>

          <View className="gap-4">
            <Pressable
              className="h-48 flex-col items-center justify-center gap-4 rounded-[24px] bg-[#00569F] p-6 shadow-lg active:opacity-95"
              style={{ shadowColor: '#1E3A8A', shadowOpacity: 0.1, shadowRadius: 16, shadowOffset: { width: 0, height: 8 } }}
              onPress={() => router.push('/explore')}>
              <View className="rounded-full bg-white/20 p-4">
                <Ionicons color="#FFFFFF" name="map" size={36} />
              </View>
              <Text className="text-xl font-bold tracking-tight text-white">Carte Plan Vie Senior</Text>
            </Pressable>

            <Pressable
              className="h-48 flex-col items-center justify-center gap-4 rounded-[24px] bg-[#993300] p-6 shadow-lg active:opacity-95"
              style={{ shadowColor: '#7C2D12', shadowOpacity: 0.1, shadowRadius: 16, shadowOffset: { width: 0, height: 8 } }}
              onPress={() => router.push('/sos')}>
              <View className="rounded-full bg-white/20 p-4">
                <Ionicons color="#FFFFFF" name="warning" size={40} />
              </View>
              <Text className="text-2xl font-black tracking-tight text-white">SOS Urgence</Text>
            </Pressable>
          </View>

          <View className="gap-3">
            <Text className="px-1 text-xl font-bold text-[#1A1C1C]">Prochains rendez-vous</Text>
            <Pressable
              className="rounded-3xl border bg-white p-5 shadow-sm active:opacity-95"
              style={{ borderColor: CARD_BORDER }}
              onPress={() => router.push('/rendez-vous')}>
              <View className="flex-row items-center gap-4">
                <View className="min-w-[70px] flex-col items-center justify-center rounded-2xl bg-[#9DF898] p-3">
                  <Text className="text-[10px] font-bold uppercase tracking-wider text-[#1A7425]/70">Juin</Text>
                  <Text className="text-3xl font-black text-[#1A7425]">12</Text>
                </View>
                <View className="flex-1 gap-1">
                  <View className="flex-row items-center gap-1.5">
                    <Ionicons color="#106D20" name="medkit" size={18} />
                    <Text className="text-sm font-bold text-[#106D20]">Contrôle Santé Routine</Text>
                  </View>
                  <Text className="text-lg font-bold text-[#1A1C1C]">Dr. Diallo - Cardiologue</Text>
                  <View className="flex-row items-center gap-1.5">
                    <Ionicons color="#40493D" name="time-outline" size={16} />
                    <Text className="text-sm font-medium text-[#40493D]">09:30 — Clinique Akwaba</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>

          <View className="gap-3 pb-8">
            <QuickRow
              icon="leaf-outline"
              iconBgClass="bg-[#106D20]/10"
              iconColor="#106D20"
              label="Conseils bien-être"
              onPress={() => router.push('/conseil-bien-etre')}
            />
            <QuickRow
              icon="people-outline"
              iconBgClass="bg-[#00569F]/10"
              iconColor="#00569F"
              label="Mes contacts"
              onPress={() => router.push('/urgences-contacts')}
            />
            <QuickRow
              icon="notifications-outline"
              iconBgClass="bg-[#00569F]/10"
              iconColor="#00569F"
              label="Notifications"
              onPress={() => router.push('/centre-notifications')}
            />
            <Pressable
              className="flex-row items-center justify-between rounded-3xl border bg-white p-5 shadow-sm active:bg-[#F3F3F3]"
              style={{ borderColor: CARD_BORDER }}
              onPress={() => router.push('/partenaires')}>
              <View className="flex-row items-center gap-4">
                <View className="rounded-2xl bg-[#00569F]/10 p-3">
                  <MaterialCommunityIcons color="#00569F" name="handshake" size={24} />
                </View>
                <Text className="text-lg font-bold text-[#1A1C1C]">Nos partenaires</Text>
              </View>
              <Ionicons color="#707A6C" name="chevron-forward" size={24} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
