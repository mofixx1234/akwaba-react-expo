import { Ionicons } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import { FlatList, Image, Linking, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { AkwabaHomeBottomNav, replaceWithHomeTab } from '@/components/home/akwaba-home-bottom-nav';

const BLUE = '#00569F';
const BLUE_SOFT = '#D4E3FF';
const BG = '#F4F7FC';

const C1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB8PS1UfG7v_lRHauIUgybPyycRRBK16waa2dqLlGF0yRJN80dQIL0C2SJdWRZ5yqchPzaamkPum_wfK-zDZjyZHLIcvQK7J_uO3wkgF7lD3lHSyLDtI_OQfIDVTHVlb1pjmIudk1DMLrq8NulxYUXWtGH5ikJN2Ads1_mnUw9A-PSN7YRnxw_4iuqIp7B4mVmWgBCv9FiORijNwBa3AGUC_E9t_MCcRJH9l5zrQ40krfLbP4pVqtMVt8LDvZPjhHerOZ5kxWHIMYc';
const C2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB9fciAMfo-mtH4okglFY7zvyYTAM6eakrFbrkshmMnmLtmxrnAc1ope_E70RoeVERespop5VzooX9Mn1SIivn0iITYLffDQ_mJZ7WBRnxDALB1LJ9sPbPSQ4LkiFFMxRbe_lm5PjmLUOJCn_2WKrsoyl1L2tN0HgsH4EY1DG21gICqqujmwNl9W-ARUyma6V459R6Zk1PJnJ_TfDcd_BnsVu_2pj-gu3f9fn4YOAgqK8WEfaHHGDajF8s6hkU9lW8k13YMysCmCg4';
const C3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBad1K6vEcjioUtx93R17Y_h2WP-_C_TZlFxra3iowvLryZPWHOgFjdBRtSYM3b1hOcPG0NOR-6oN98KtwuuA4czPmsj8Q0RqzzNgladX42K42RNGn4_qYSlaMqO7E-cvxsDgymXpExpu_ehGl7BelFZe16rododE7b5lu3HfPyZbPz3C9b5VZmQPAGQxcKfXqgQJJzk-b-6_HtNb-zUiqaGU4aWwL_x-pnyNOtpCJX1IoXqf2C3xlZ5bJXkBcdn9HmAEmq8aV9to8';

type Contact = {
  id: string;
  name: string;
  phone: string;
  uri: string;
  tag?: string;
};

const ALL_CONTACTS: Contact[] = [
  { id: 'a1', name: 'Amélie Bernard', phone: '+225 07 11 22 33 44', uri: C1 },
  { id: 'd1', name: 'David Kouassi', phone: '+225 05 88 77 66 55', uri: C2, tag: 'Contact urgence' },
  { id: 'j1', name: 'Jean-Pierre N’Guessan', phone: '+225 01 44 55 66 77', uri: C2 },
  { id: 'l1', name: 'Lucie Martin', phone: '+225 07 99 00 11 22', uri: C3, tag: 'Fille' },
  { id: 'm1', name: 'Marion Nash', phone: '+225 07 12 34 56 78', uri: C1 },
  { id: 'm2', name: 'Miguel Walters', phone: '+225 05 21 43 65 87', uri: C2, tag: 'Proche confiance' },
  { id: 'n1', name: 'Nathalie Koné', phone: '+225 07 55 44 33 22', uri: C3 },
  { id: 'p1', name: 'Paul Yao', phone: '+225 01 33 22 11 00', uri: C1 },
  { id: 's1', name: 'Sophie Traoré', phone: '+225 07 66 77 88 99', uri: C3, tag: 'Petite-fille' },
];

function sortContacts(contacts: Contact[]): Contact[] {
  return [...contacts].sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }));
}

function ContactRow({ item }: { item: Contact }) {
  const dial = () => {
    const raw = item.phone.replace(/\s/g, '');
    Linking.openURL(`tel:${raw}`).catch(() => {});
  };

  return (
    <Pressable
      className="min-h-[64px] flex-row items-center gap-4 py-3 active:bg-white/70"
      onPress={dial}>
      <View className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#E8ECF4]">
        <Image className="h-full w-full" resizeMode="cover" source={{ uri: item.uri }} />
      </View>
      <View className="min-w-0 flex-1 justify-center">
        <Text className="text-base font-bold text-[#1A1C1C]" numberOfLines={1} style={{ lineHeight: 22 }}>
          {item.name}
        </Text>
        <View className="mt-1 flex-row flex-wrap items-center gap-x-2 gap-y-0.5">
          <Text className="text-sm leading-5 text-[#6B7280]" numberOfLines={1}>
            {item.phone}
          </Text>
          {item.tag ? (
            <Text className="text-xs font-semibold text-[#0D9488]">{item.tag}</Text>
          ) : null}
        </View>
      </View>
      <View className="h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4E3FF]">
        <Ionicons color={BLUE} name="call-outline" size={20} />
      </View>
    </Pressable>
  );
}

function RowSeparator() {
  return <View className="ml-16 h-px bg-[#E8ECF4]" />;
}

export default function UrgencesContactsScreen() {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_CONTACTS;
    return ALL_CONTACTS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.phone.replace(/\s/g, '').includes(q.replace(/\s/g, '')) ||
        (c.tag?.toLowerCase().includes(q) ?? false),
    );
  }, [query]);

  const sorted = useMemo(() => sortContacts(filtered), [filtered]);

  const listBottomPad = 280 + insets.bottom;

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: BG }} edges={['top']}>
      <View className="flex-row items-start justify-between px-5 pb-2 pt-3">
        <Text className="flex-1 pr-3 text-3xl font-black tracking-tight text-[#1A1C1C]">Contacts</Text>
      </View>

      <View className="px-5 pb-4">
        <View className="flex-row items-center gap-3 rounded-full bg-[#E8ECF4] px-4 py-3.5">
          <Ionicons color="#6B7280" name="search-outline" size={22} />
          <TextInput
            className="min-h-[24px] flex-1 py-0 text-base leading-5 text-[#1A1C1C]"
            placeholder="Nom, numéro ou lien…"
            placeholderTextColor="#9CA3AF"
            value={query}
            onChangeText={setQuery}
          />
          <Pressable className="p-1 active:opacity-70" hitSlop={8}>
            <Ionicons color="#6B7280" name="mic-outline" size={22} />
          </Pressable>
        </View>
      </View>

      <View className="min-h-0 flex-1 overflow-hidden rounded-t-3xl bg-white">
        <FlatList
          data={sorted}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 8,
            paddingBottom: listBottomPad,
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={RowSeparator}
          ListEmptyComponent={
            <View className="items-center py-16">
              <Ionicons color="#9CA3AF" name="people-outline" size={48} />
              <Text className="mt-4 text-center text-base font-semibold text-[#1A1C1C]">Aucun contact</Text>
              <Text className="mt-1 text-center text-sm text-[#6B7280]">Modifiez votre recherche.</Text>
            </View>
          }
          renderItem={({ item }) => <ContactRow item={item} />}
          ListFooterComponent={
            <View className="mt-4 pb-2">
              <Pressable className="flex-row items-center justify-center gap-2 rounded-full border border-[#00569F]/25 bg-[#F4F7FC] py-3.5 active:bg-[#EEF4FB]">
                <Ionicons color={BLUE} name="person-add-outline" size={20} />
                <Text className="text-sm font-bold" style={{ color: BLUE }}>
                  Ajouter un contact
                </Text>
              </Pressable>
            </View>
          }
        />
      </View>

      <AkwabaHomeBottomNav activeTab={null} onNavigateToTab={replaceWithHomeTab} />
    </SafeAreaView>
  );
}
