import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const WATER_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD66Zu5DWhNJiFzBJX-zsLviQDJokK8DBpCqOakn8mxlHrH1Ai4LkcFeY7SjgrFe2toFGXfac7WJOfVFEydtNnfGA4AUHAnuVIrEuTT5Z8KiCEZkJHNfuhQxseKV1q-CBwNL9xur_BwTiywFxsDdaHfT-sWxf5Kn_DKl-d5au7IAL-Qb3VVo1uaVfXDZezPYXHDCMPThVF-DiwG1oqa48S1wBzN4KYB5JzBs4sg1CL6JVZZHc-Cpe8FMgc07Z6L5yFGhMWJ3d0AUVU';

type NotifTone = 'urgence' | 'sante' | 'rdv';

const GROUPS: {
  label: string;
  items: {
    id: string;
    tone: NotifTone;
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    body: string;
    time: string;
    unread: boolean;
    primaryLabel: string;
    secondaryLabel: string;
    onPrimary?: () => void;
  }[];
}[] = [
  {
    label: 'Aujourd’hui',
    items: [
      {
        id: 'sos',
        tone: 'urgence',
        icon: 'warning',
        title: 'Nouveau SOS',
        body: 'Une demande d’aide a été émise à proximité de votre position enregistrée.',
        time: 'Il y a 5 min',
        unread: true,
        primaryLabel: 'Voir l’alerte',
        secondaryLabel: 'Ignorer',
        onPrimary: () => router.push('/(tabs)/sos'),
      },
      {
        id: 'sante',
        tone: 'sante',
        icon: 'shield-checkmark',
        title: 'Alerte santé',
        body: 'Il est temps de prendre votre tension selon le rappel que vous avez défini.',
        time: 'Il y a 1 h',
        unread: true,
        primaryLabel: 'Mesurer',
        secondaryLabel: 'Plus tard',
      },
      {
        id: 'rdv',
        tone: 'rdv',
        icon: 'calendar',
        title: 'Rendez-vous demain',
        body: 'Visite chez le Dr Martin — 10 h 30, Centre médical du Plateau.',
        time: 'Il y a 3 h',
        unread: false,
        primaryLabel: 'Détails',
        secondaryLabel: 'Effacer',
        onPrimary: () => router.push('/rendez-vous'),
      },
    ],
  },
  {
    label: 'Hier',
    items: [
      {
        id: 'rappel',
        tone: 'rdv',
        icon: 'notifications-outline',
        title: 'Rappel bien-être',
        body: 'N’oubliez pas votre courte marche après le déjeuner.',
        time: 'Hier, 14 h',
        unread: false,
        primaryLabel: 'OK',
        secondaryLabel: 'Masquer',
      },
    ],
  },
];

const toneStyles: Record<
  NotifTone,
  { bar: string; iconBg: string; icon: string; primaryBtn: string; time: string }
> = {
  urgence: {
    bar: 'bg-[#993300]',
    iconBg: 'bg-[#FFDBCF]',
    icon: '#993300',
    primaryBtn: 'bg-[#993300]',
    time: 'text-[#993300]',
  },
  sante: {
    bar: 'bg-[#106D20]',
    iconBg: 'bg-[#DCFCE7]',
    icon: '#106D20',
    primaryBtn: 'bg-[#106D20]',
    time: 'text-[#106D20]',
  },
  rdv: {
    bar: 'bg-[#00569F]',
    iconBg: 'bg-[#D4E3FF]',
    icon: '#00569F',
    primaryBtn: 'bg-[#00569F]',
    time: 'text-[#00569F]',
  },
};

function NotificationCard({
  item,
  showConnectorBelow,
}: {
  item: (typeof GROUPS)[number]['items'][number];
  showConnectorBelow: boolean;
}) {
  const t = toneStyles[item.tone];

  return (
    <View className="flex-row gap-3">
      <View className="w-[22px] items-center pt-5">
        <View className={`h-3 w-3 rounded-full border-2 border-white ${item.unread ? t.bar : 'bg-stone-300'}`} />
        {showConnectorBelow ? <View className="mt-1 w-[2px] flex-1 min-h-[24px] rounded-full bg-stone-200" /> : null}
      </View>
      <View className="min-w-0 flex-1 pb-6">
        <View className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-sm">
          <View className={`h-1 w-full ${t.bar}`} />
          <View className="p-4">
            <View className="mb-3 flex-row items-start justify-between gap-3">
              <View className={`h-12 w-12 items-center justify-center rounded-2xl ${t.iconBg}`}>
                <Ionicons color={t.icon} name={item.icon} size={22} />
              </View>
              <View className="items-end gap-1">
                <Text className={`text-xs font-bold ${t.time}`}>{item.time}</Text>
                {item.unread ? <View className="h-2 w-2 rounded-full bg-[#00569F]" /> : null}
              </View>
            </View>
            <Text className="text-base font-bold text-[#1A1C1C]">{item.title}</Text>
            <Text className="mt-1.5 text-sm leading-relaxed text-[#40493D]">{item.body}</Text>
            <View className="mt-4 flex-row flex-wrap items-center gap-2 border-t border-stone-100 pt-4">
              <Pressable className="rounded-full bg-[#F3F4F6] px-4 py-2.5 active:opacity-80">
                <Text className="text-sm font-semibold text-[#40493D]">{item.secondaryLabel}</Text>
              </Pressable>
              <Pressable
                className={`rounded-full px-5 py-2.5 active:opacity-90 ${t.primaryBtn}`}
                onPress={item.onPrimary}>
                <Text className="text-sm font-bold text-white">{item.primaryLabel}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function CentreNotificationsScreen() {
  const insets = useSafeAreaInsets();
  const unreadCount = GROUPS.flatMap((g) => g.items).filter((i) => i.unread).length;

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="z-40 flex h-16 w-full flex-row items-center justify-between border-b border-stone-200/80 bg-white/95 px-4">
        <Pressable
          className="h-10 w-10 items-center justify-center rounded-full active:bg-[#E8E8E8]"
          onPress={() => router.back()}>
          <Ionicons color="#00569F" name="arrow-back" size={22} />
        </Pressable>
        <Text className="text-lg font-bold text-[#00569F]">Notifications</Text>
        <View className="w-10" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120 + insets.bottom }}
        showsVerticalScrollIndicator={false}>
        <View className="mx-auto w-full max-w-2xl gap-6 px-4 pt-6">
          <View className="flex-row items-center justify-between gap-4 rounded-3xl border border-black/[0.06] bg-white px-4 py-4 shadow-sm">
            <View className="min-w-0 flex-1 flex-row items-center gap-3">
              <View className="h-12 w-12 items-center justify-center rounded-2xl bg-[#D4E3FF]">
                <Ionicons color="#00569F" name="notifications" size={24} />
              </View>
              <View>
                <Text className="text-lg font-bold text-[#1A1C1C]">
                  {unreadCount > 0 ? `${unreadCount} non lues` : 'Tout est à jour'}
                </Text>
                <Text className="text-sm text-[#64748B]">Activité récente sur votre compte</Text>
              </View>
            </View>
            <Pressable className="shrink-0 rounded-full border border-[#00569F]/30 px-3 py-2 active:bg-[#00569F]/10">
              <Text className="text-xs font-bold text-[#00569F]">Tout lire</Text>
            </Pressable>
          </View>

          {GROUPS.map((group) => (
            <View key={group.label} className="gap-0">
              <Text className="mb-3 px-1 text-sm font-bold uppercase tracking-wider text-[#40493D]">{group.label}</Text>
              {group.items.map((item, idx) => (
                <NotificationCard
                  key={item.id}
                  item={item}
                  showConnectorBelow={idx < group.items.length - 1}
                />
              ))}
            </View>
          ))}

          <View className="overflow-hidden rounded-3xl border border-[#00569F]/25 bg-[#EEF4FB] shadow-sm">
            <View className="flex-row gap-4 p-4">
              <Image
                className="h-20 w-20 rounded-2xl"
                resizeMode="cover"
                source={{ uri: WATER_IMG }}
              />
              <View className="min-w-0 flex-1 justify-center">
                <View className="mb-1 flex-row items-center gap-2">
                  <Ionicons color="#00569F" name="water-outline" size={18} />
                  <Text className="text-xs font-bold uppercase tracking-wide text-[#00569F]">Conseil du jour</Text>
                </View>
                <Text className="text-sm font-semibold leading-relaxed text-[#1A1C1C]">
                  Buvez un grand verre d’eau régulièrement, surtout par temps chaud.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
