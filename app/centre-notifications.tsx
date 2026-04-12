import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

type FilterId = 'all' | 'rappels' | 'sante' | 'rdv';

const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'Toutes' },
  { id: 'rappels', label: 'Rappels' },
  { id: 'sante', label: 'Santé' },
  { id: 'rdv', label: 'Rendez-vous' },
];

type NotifItem = {
  id: string;
  category: Exclude<FilterId, 'all'>;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  time: string;
  description: { before?: string; link?: string; linkAction?: () => void; after?: string } | string;
};

const NOTIFICATION_GROUPS: { label: string; items: NotifItem[] }[] = [
  {
    label: 'Aujourd’hui',
    items: [
      {
        id: 'rdv-ok',
        category: 'rdv',
        icon: 'calendar-outline',
        title: 'Rendez-vous confirmé !',
        time: '10:04',
        description: {
          before: 'Votre visite chez le Dr Martin est bien enregistrée pour demain à 10 h 30. ',
          link: 'Voir le détail',
          linkAction: () => router.push('/rendez-vous'),
          after: '',
        },
      },
      {
        id: 'tension',
        category: 'sante',
        icon: 'pulse-outline',
        title: 'Mesure de tension',
        time: '09:12',
        description: {
          before: 'Pensez à noter votre tension ce matin. ',
          link: 'Ouvrir le suivi',
          after: '',
        },
      },
      {
        id: 'rappel-med',
        category: 'rappels',
        icon: 'notifications-outline',
        title: 'Rappel traitement',
        time: '08:30',
        description: 'Il est l’heure de votre prise médicamenteuse habituelle (selon votre planning).',
      },
      {
        id: 'sos',
        category: 'rappels',
        icon: 'warning-outline',
        title: 'Alerte à proximité',
        time: '07:45',
        description: {
          before: 'Une alerte a été signalée près de chez vous. ',
          link: 'Consulter',
          linkAction: () => router.push('/(tabs)/sos'),
          after: '',
        },
      },
    ],
  },
  {
    label: 'Plus tôt',
    items: [
      {
        id: 'badge',
        category: 'sante',
        icon: 'ribbon-outline',
        title: 'Objectif atteint',
        time: 'Hier',
        description: {
          before: 'Bravo ! Vous avez complété votre semaine de marche. ',
          link: 'Voir le badge',
          after: '',
        },
      },
      {
        id: 'partenaire',
        category: 'rdv',
        icon: 'business-outline',
        title: 'Nouveau partenaire',
        time: 'Lun.',
        description: {
          before: 'Un centre de santé près de vous a rejoint le réseau Akwaba. ',
          link: 'Découvrir',
          linkAction: () => router.push('/partenaires'),
          after: '',
        },
      },
    ],
  },
];

/** Palette alignée sur le reste de l’app (partenaires, conseils, profil) */
const BLUE = '#00569F';
const BLUE_SOFT = '#D4E3FF';
const LINE_INSET = 48 + 12; /* w-12 + gap-3 */

function DescriptionText({
  description,
}: {
  description: NotifItem['description'];
}) {
  if (typeof description === 'string') {
    return <Text className="mt-1 text-sm leading-relaxed text-[#6B7280]">{description}</Text>;
  }
  const { before = '', link, linkAction, after = '' } = description;
  if (!link) {
    return (
      <Text className="mt-1 text-sm leading-relaxed text-[#6B7280]">
        {before}
        {after}
      </Text>
    );
  }
  return (
    <Text className="mt-1 text-sm leading-relaxed text-[#6B7280]">
      {before}
      <Text className="font-bold text-[#00569F]" onPress={linkAction}>
        {link}
      </Text>
      {after}
    </Text>
  );
}

function NotificationRow({
  item,
  showDivider,
}: {
  item: NotifItem;
  showDivider: boolean;
}) {
  return (
    <View>
      <View className="flex-row gap-3 py-4">
        <View
          className="h-12 w-12 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: BLUE_SOFT }}>
          <Ionicons color={BLUE} name={item.icon} size={22} />
        </View>
        <View className="min-w-0 flex-1">
          <View className="flex-row items-start justify-between gap-2">
            <Text className="flex-1 text-[15px] font-bold leading-tight text-[#1A1C1C]">{item.title}</Text>
            <Text className="shrink-0 pt-0.5 text-xs text-[#9CA3AF]">{item.time}</Text>
          </View>
          <DescriptionText description={item.description} />
        </View>
      </View>
      {showDivider ? (
        <View className="h-px bg-[#ECECEC]" style={{ marginLeft: LINE_INSET }} />
      ) : null}
    </View>
  );
}

export default function CentreNotificationsScreen() {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<FilterId>('all');

  const filteredGroups = useMemo(() => {
    return NOTIFICATION_GROUPS.map((g) => ({
      ...g,
      items: g.items.filter((n) => filter === 'all' || n.category === filter),
    })).filter((g) => g.items.length > 0);
  }, [filter]);

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="flex h-14 w-full flex-row items-center justify-between border-b border-stone-200/80 bg-white/95 px-4">
        <Pressable
          className="h-10 w-10 items-center justify-center rounded-full active:bg-[#EEF4FB]"
          onPress={() => router.back()}>
          <Ionicons color={BLUE} name="arrow-back" size={24} />
        </Pressable>
        <Text className="absolute left-0 right-0 text-center text-lg font-bold text-[#00569F]" pointerEvents="none">
          Notifications
        </Text>
        <Pressable
          className="h-10 w-10 items-center justify-center rounded-full active:bg-[#EEF4FB]"
          onPress={() => router.push('/(tabs)/profil')}>
          <Ionicons color={BLUE} name="settings-outline" size={22} />
        </Pressable>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 + insets.bottom }}
        showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          nestedScrollEnabled
          className="border-b border-stone-200/80 bg-white px-4 pb-3 pt-2"
          contentContainerStyle={{ gap: 10, alignItems: 'center', paddingRight: 16 }}
          showsHorizontalScrollIndicator={false}>
          {FILTERS.map((f) => {
            const on = filter === f.id;
            return (
              <Pressable
                key={f.id}
                className={`rounded-full border px-4 py-2.5 ${on ? 'border-[#00569F]/35' : 'border-stone-200 bg-white'}`}
                style={on ? { backgroundColor: BLUE_SOFT } : undefined}
                onPress={() => setFilter(f.id)}>
                <Text className={`text-sm font-semibold ${on ? 'text-[#00569F]' : 'text-[#6B7280]'}`}>{f.label}</Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View className="bg-[#F9F9F9] px-4 pt-2">
          {filteredGroups.length === 0 ? (
            <View className="items-center py-16">
              <View className="rounded-full bg-[#D4E3FF] p-4">
                <Ionicons color={BLUE} name="notifications-off-outline" size={40} />
              </View>
              <Text className="mt-4 text-center text-base font-semibold text-[#1A1C1C]">Aucune notification</Text>
              <Text className="mt-1 text-center text-sm text-[#9CA3AF]">Changez de filtre ou revenez plus tard.</Text>
            </View>
          ) : (
            filteredGroups.map((group) => (
              <View key={group.label} className="pt-4">
                <Text className="mb-2 text-xs font-bold uppercase tracking-wide text-[#9CA3AF]">{group.label}</Text>
                <View>
                  {group.items.map((item, idx) => (
                    <NotificationRow
                      key={item.id}
                      item={item}
                      showDivider={idx < group.items.length - 1}
                    />
                  ))}
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
