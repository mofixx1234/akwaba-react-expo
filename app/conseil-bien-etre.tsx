import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { AkwabaHomeBottomNav, replaceWithHomeTab } from '@/components/home/akwaba-home-bottom-nav';

const HERO =
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80';

const THEMES = [
  { uri: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=200&q=80', label: 'Tous', ring: true },
  { uri: 'https://images.unsplash.com/photo-1631049307264-0bf569011a23?auto=format&fit=crop&w=200&q=80', label: 'Sommeil' },
  { uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80', label: 'Repas' },
  { uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=200&q=80', label: 'Marche' },
  { uri: 'https://images.unsplash.com/photo-1529154333708-cb75ce165fad?auto=format&fit=crop&w=200&q=80', label: 'Amitié' },
];

function ArticleCard({
  img,
  badgeIcon,
  badgeLabel,
  badgeColor,
  title,
  body,
}: {
  img: string;
  badgeIcon: keyof typeof Ionicons.glyphMap;
  badgeLabel: string;
  badgeColor: string;
  title: string;
  body: string;
}) {
  return (
    <View className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-sm">
      <View className="relative aspect-[16/10] w-full">
        <Image className="h-full w-full" resizeMode="cover" source={{ uri: img }} />
        <View className="absolute inset-0 bg-black/20" />
        <View className="absolute bottom-3 left-3 flex-row items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-sm">
          <Ionicons color={badgeColor} name={badgeIcon} size={18} />
          <Text className="text-xs font-bold uppercase tracking-wide" style={{ color: badgeColor }}>
            {badgeLabel}
          </Text>
        </View>
      </View>
      <View className="gap-2 p-4">
        <Text className="text-lg font-bold text-[#1A1C1C]">{title}</Text>
        <Text className="text-sm leading-relaxed text-[#40493D]">{body}</Text>
      </View>
    </View>
  );
}

export default function ConseilBienEtreScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="z-40 flex h-16 w-full flex-row items-center justify-between border-b border-stone-200/80 bg-white/95 px-4">
        <Pressable className="h-10 w-10 items-center justify-center rounded-full active:bg-[#E8E8E8]" onPress={() => router.back()}>
          <Ionicons color="#00569F" name="arrow-back" size={22} />
        </Pressable>
        <Text className="text-lg font-bold text-[#00569F]">Conseils & bien-être</Text>
        <View className="w-10" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120 + insets.bottom }}
        showsVerticalScrollIndicator={false}>
        <View className="mx-auto w-full max-w-2xl gap-6 px-4 pt-6">
          <View className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-sm">
            <View className="relative aspect-[2/1] w-full">
              <Image className="h-full w-full" resizeMode="cover" source={{ uri: HERO }} />
              <View className="absolute inset-0 bg-black/40" />
              <View className="absolute bottom-0 left-0 right-0 p-4">
                <View className="mb-2 flex-row items-center gap-2 self-start rounded-full bg-white/90 px-3 py-1 shadow-sm">
                  <Ionicons color="#106D20" name="leaf" size={18} />
                  <Text className="text-xs font-bold text-[#106D20]">Akwaba bien-être</Text>
                </View>
                <Text className="text-2xl font-black tracking-tight text-white sm:text-3xl">Prenez soin de vous</Text>
                <Text className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-white/90">
                  Des idées simples, illustrées, pour rester en forme et garder le moral au quotidien.
                </Text>
              </View>
            </View>
          </View>

          <View className="gap-3">
            <Text className="px-1 text-sm font-bold uppercase tracking-wider text-[#40493D]">Thèmes</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-1" contentContainerStyle={{ gap: 12 }}>
              {THEMES.map((t) => (
                <View key={t.label} className="w-[88px] items-center">
                  <View className={`overflow-hidden rounded-2xl ${t.ring ? 'border-2 border-[#00569F]' : 'border border-black/10'}`}>
                    <Image className="aspect-square w-[88px]" resizeMode="cover" source={{ uri: t.uri }} />
                  </View>
                  <Text className={`mt-1.5 text-[11px] font-bold ${t.ring ? 'text-[#00569F]' : 'font-semibold text-[#40493D]'}`}>
                    {t.label}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View className="gap-5">
            <Text className="px-1 text-sm font-bold uppercase tracking-wider text-[#40493D]">À lire aujourd’hui</Text>
            <ArticleCard
              badgeColor="#00569F"
              badgeIcon="moon-outline"
              badgeLabel="Sommeil"
              body="Couchez-vous et levez-vous à des heures régulières. Évitez les écrans une heure avant de dormir et gardez la chambre fraîche et calme."
              img="https://images.unsplash.com/photo-1631049307264-0bf569011a23?auto=format&fit=crop&w=900&q=80"
              title="Des nuits plus reposantes"
            />
            <ArticleCard
              badgeColor="#1A7425"
              badgeIcon="restaurant-outline"
              badgeLabel="Alimentation"
              body="Privilégiez fruits, légumes, protéines et céréales complètes. Buvez suffisamment d’eau dans la journée. En cas de traitement, demandez l’avis de votre médecin avant tout changement."
              img="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80"
              title="Manger équilibré, simplement"
            />
            <ArticleCard
              badgeColor="#00569F"
              badgeIcon="walk-outline"
              badgeLabel="Mouvement"
              body="Une marche courte après chaque repas, des étirements doux ou du jardinage : l’important est la régularité. Adaptez l’effort à votre forme et faites des pauses si vous êtes essoufflé."
              img="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
              title="Bouger un peu, souvent"
            />
            <ArticleCard
              badgeColor="#1A7425"
              badgeIcon="people-outline"
              badgeLabel="Social"
              body="Appelez un proche, participez à une activité de quartier ou rejoignez un groupe Akwaba. Les liens sociaux protègent le moral et la mémoire."
              img="https://images.unsplash.com/photo-1529154333708-cb75ce165fad?auto=format&fit=crop&w=900&q=80"
              title="Rester connecté"
            />
            <ArticleCard
              badgeColor="#00569F"
              badgeIcon="water-outline"
              badgeLabel="Hydratation"
              body="Gardez une bouteille à portée de main. En cas de chaleur ou de traitement diurétique, demandez à votre médecin la quantité adaptée pour vous."
              img="https://images.unsplash.com/photo-1559837174-94dd104a0b3d?auto=format&fit=crop&w=900&q=80"
              title="S’hydrater sans attendre la soif"
            />
          </View>

          <View className="overflow-hidden rounded-3xl border border-[#993300]/25 bg-[#993300]/10 shadow-sm">
            <View className="flex-row gap-3 p-4">
              <Ionicons color="#993300" name="warning" size={28} />
              <Text className="flex-1 text-sm leading-relaxed text-[#1A1C1C]">
                <Text className="font-bold text-[#993300]">Urgence médicale ? </Text>
                Appelez les services adaptés ou utilisez le bouton <Text className="font-bold">SOS</Text> de l’application. Ces
                conseils ne remplacent pas un avis médical.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <AkwabaHomeBottomNav activeTab={null} onNavigateToTab={replaceWithHomeTab} />
    </SafeAreaView>
  );
}
