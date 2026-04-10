import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const C1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB8PS1UfG7v_lRHauIUgybPyycRRBK16waa2dqLlGF0yRJN80dQIL0C2SJdWRZ5yqchPzaamkPum_wfK-zDZjyZHLIcvQK7J_uO3wkgF7lD3lHSyLDtI_OQfIDVTHVlb1pjmIudk1DMLrq8NulxYUXWtGH5ikJN2Ads1_mnUw9A-PSN7YRnxw_4iuqIp7B4mVmWgBCv9FiORijNwBa3AGUC_E9t_MCcRJH9l5zrQ40krfLbP4pVqtMVt8LDvZPjhHerOZ5kxWHIMYc';
const C2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB9fciAMfo-mtH4okglFY7zvyYTAM6eakrFbrkshmMnmLtmxrnAc1ope_E70RoeVERespop5VzooX9Mn1SIivn0iITYLffDQ_mJZ7WBRnxDALB1LJ9sPbPSQ4LkiFFMxRbe_lm5PjmLUOJCn_2WKrsoyl1L2tN0HgsH4EY1DG21gICqqujmwNl9W-ARUyma6V459R6Zk1PJnJ_TfDcd_BnsVu_2pj-gu3f9fn4YOAgqK8WEfaHHGDajF8s6hkU9lW8k13YMysCmCg4';
const C3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBad1K6vEcjioUtx93R17Y_h2WP-_C_TZlFxra3iowvLryZPWHOgFjdBRtSYM3b1hOcPG0NOR-6oN98KtwuuA4czPmsj8Q0RqzzNgladX42K42RNGn4_qYSlaMqO7E-cvxsDgymXpExpu_ehGl7BelFZe16rododE7b5lu3HfPyZbPz3C9b5VZmQPAGQxcKfXqgQJJzk-b-6_HtNb-zUiqaGU4aWwL_x-pnyNOtpCJX1IoXqf2C3xlZ5bJXkBcdn9HmAEmq8aV9to8';

function ContactRow({ name, relation, uri }: { name: string; relation: string; uri: string }) {
  return (
    <View className="flex-row items-center justify-between gap-4 rounded-xl bg-white p-5 shadow-sm">
      <View className="min-w-0 flex-1 flex-row items-center gap-4">
        <View className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#E8E8E8]">
          <Image className="h-full w-full" resizeMode="cover" source={{ uri }} />
        </View>
        <View className="min-w-0 flex-1">
          <Text className="text-xl font-bold text-[#1A1C1C]" numberOfLines={1}>
            {name}
          </Text>
          <Text className="text-base font-medium uppercase tracking-wide text-[#106D20]">{relation}</Text>
        </View>
      </View>
      <Pressable className="h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#00569F] active:opacity-90">
        <Ionicons color="#FFFFFF" name="call" size={26} />
      </Pressable>
    </View>
  );
}

export default function UrgencesContactsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="z-40 flex h-20 w-full flex-row items-center justify-between border-b border-stone-200/80 bg-stone-50 px-5">
        <View className="min-w-0 flex-1 flex-row items-center gap-3">
          <Pressable className="shrink-0 rounded-full p-2 active:opacity-70" onPress={() => router.back()}>
            <Ionicons color="#1E40AF" name="arrow-back" size={24} />
          </Pressable>
          <Text className="truncate text-xl font-bold tracking-tight text-blue-900">Urgences</Text>
        </View>
        <Text className="shrink-0 text-lg font-black text-blue-900">Akwaba</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6" contentContainerStyle={{ paddingBottom: 200 }} showsVerticalScrollIndicator={false}>
        <View className="mb-8">
          <Text className="mb-3 text-4xl font-black leading-tight text-[#1A1C1C] sm:text-5xl">Vos proches</Text>
          <Text className="text-lg leading-relaxed text-[#40493D]">
            Contactez rapidement vos personnes de confiance en cas de besoin.
          </Text>
        </View>

        <View className="gap-4">
          <ContactRow name="Marie Dubois" relation="Fille" uri={C1} />
          <ContactRow name="Jean-Pierre" relation="Fils" uri={C2} />
          <ContactRow name="Lucie Martin" relation="Petite-fille" uri={C3} />
        </View>

        <Pressable className="mt-8 h-20 w-full flex-row items-center justify-center gap-3 rounded-xl bg-[#9DF898] active:opacity-95">
          <Ionicons color="#1A7425" name="person-add-outline" size={24} />
          <Text className="text-xl font-bold text-[#1A7425]">Ajouter un proche</Text>
        </Pressable>

        <View className="mt-10 gap-3 rounded-xl bg-[#FFDBCF] p-6">
          <View className="flex-row items-center gap-3">
            <Ionicons color="#380D00" name="information-circle" size={28} />
            <Text className="text-xl font-bold text-[#380D00]">Aide immédiate</Text>
          </View>
          <Text className="text-lg text-[#802A00]">
            En cas de danger immédiat, utilisez le bouton SOS en bas à droite de l’écran.
          </Text>
        </View>
      </ScrollView>

      <Pressable
        className="absolute bottom-28 right-6 z-[60] h-20 w-20 items-center justify-center rounded-full bg-[#993300] shadow-2xl active:opacity-90"
        onPress={() => router.push('/sos')}>
        <Ionicons color="#FFFFFF" name="warning" size={28} />
        <Text className="text-sm font-black tracking-widest text-white">SOS</Text>
      </Pressable>

      <View
        className="absolute bottom-0 left-0 z-50 w-full flex-row items-end justify-around border-t border-stone-200 bg-stone-50 px-2 pt-2 shadow-lg dark:border-stone-800"
        style={{ paddingBottom: Math.max(insets.bottom, 16), shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 12, shadowOffset: { width: 0, height: -4 } }}>
        <Pressable className="items-center rounded-2xl px-3 py-2 active:opacity-95" onPress={() => router.replace('/(tabs)')}>
          <Ionicons color="#57534E" name="home-outline" size={22} />
          <Text className="text-sm font-bold text-stone-600">Accueil</Text>
        </Pressable>
        <Pressable className="items-center rounded-2xl px-3 py-2 active:opacity-95" onPress={() => router.push('/explore')}>
          <Ionicons color="#57534E" name="map-outline" size={22} />
          <Text className="text-sm font-bold text-stone-600">Carte</Text>
        </Pressable>
        <Pressable className="items-center gap-1 active:opacity-95" onPress={() => router.push('/(tabs)/add')}>
          <View className="h-14 w-14 items-center justify-center rounded-full bg-[#00569F] shadow-lg">
            <Ionicons color="#FFFFFF" name="add" size={28} />
          </View>
          <Text className="text-sm font-bold text-stone-600">Ajouter</Text>
        </Pressable>
        <Pressable className="items-center rounded-2xl px-3 py-2 active:opacity-95" onPress={() => router.push('/sos')}>
          <Ionicons color="#57534E" name="warning-outline" size={22} />
          <Text className="text-sm font-bold text-stone-600">SOS</Text>
        </Pressable>
        <Pressable className="items-center rounded-2xl px-3 py-2 active:opacity-95" onPress={() => router.push('/profil')}>
          <Ionicons color="#57534E" name="person-outline" size={22} />
          <Text className="text-sm font-bold text-stone-600">Profil</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
