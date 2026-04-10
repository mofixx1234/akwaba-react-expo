import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const HERO =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80';

const P1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiYxDXQaTFd1Z_rVaOpMDb2xIWL-beEnxUQ3tlzxls5mT2zhMAkypS0cfVuLI7vK2TYLM0nK11qLy13Wff4utu6P7jEbLC26UWycjgMGf7hl_GHptUO5x_qRZG1VvZrrJY_Onxi4Efs-h2OjziZlz3n6xI2Q3Kt8mxUORN2UJcoqVGFG9pjtnfLW8yhbmhgAc713Z4LA2_Deh3EJ1fWiehMnNgv0cqaKWv3Ov45sakacVvU2batifPY2zGJz533TskwGM0HYE6R2s';
const P2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtjwdQSEEJFbwsyVue5I0KeMVRTDVyxRtRQDPsA3qC3xLSMUKiBofewtsrvzlpf7y0mcrKTyjFJj7jq-MFWPyTupH50CH-rapGU4fQMAhsmUYS7UKnSEJIfus1NsYqzn_a52jlFsEPGGXu0-F-9FId9be_IfbBp5Xs-AiDjksYwUVGo8Q1-HBu4lozpag7jJr1wndVKQvfYHsSHerWY6LhaQ0CEoxEF8I9metxekzwyEQKg9DN8OiV5nXfdBjUW2-n-VFV3A65oAg';
const P3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsafOpzpbCLo_zufbh0-i2m1XPTECOe4jZwcZniK6zuuXq7IYqdEBASqkDCX3I_2uRxo5UAIa9PimjcaFcXxGXc2fUwi9fQt2XEJjEyKZQioCSPG0oFVzu-wl3JY1dex0bD7AYFbls66YLLv3zji2H7vkmn8uWsiYs9x9g3Xjd7hbDv4WKfhKvogl2YdB5bTi_S4HQTS1odeQdZsaZaWYOIPPvvW5OdBZRTz6YjG1nk9t2zUQozCzVmmkP9Pa5q1jhBT05Z-sFCMM';
const P4 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY-3KrERIgVi0gbQfiaJfRZkfe2vHhqVlWZqLUwBwOvemSHqyjUuMwx2C1G9r3zCjvJ94eYE3JH6Fb_uSHFf9uWDUekZTcX-GQ26o9FLr-iktIkmei72BEN18Kgt8QkvplKTxqtLPUJWWkZR6GinyBtE7UlXtW2BDIozc4WFFEAroQ8J276vmg0RT0xOSYvMlkIXBu5jt2j808L1CMZr9hd3ukwaolTEYKu8qX0SXMk_sSCtwbFDHHls0A-kOecd_vb-nleS3DmT0';
const DOC = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcplEsNB4IRxJR6wYRK_o2UejyNCWtKEQtDQBcBdYPX0Mkg_ELU83NiGU-TQ33c_pc_xNodHfDj520TfXe4lpVsOaOYLjH46O9eg_nkHCobPlBz3QahbdMsobpO2-FXKsyCpfxlLryC_3f0dXhmuoqFTAzmnVfpV25lm5xs5naoj4wzE6rN8FZpHbaI_wyNLp4Wq5HmJIt8mb1u-LLP-RFsGNdIdQqUkpz0FU3Gyeqg6JRHJqB3eJin281dOiypCCGGqLNDWOOPQ0';

function PartnerCard({
  img,
  badgeIcon,
  badgeLabel,
  badgeColor,
  title,
  location,
  metaLabel,
  metaValue,
  metaRight,
  ctaIcon,
  ctaLabel,
  onCta,
}: {
  img: string;
  badgeIcon: keyof typeof Ionicons.glyphMap;
  badgeLabel: string;
  badgeColor: string;
  title: string;
  location: string;
  metaLabel: string;
  metaValue: string;
  metaRight?: ReactNode;
  ctaIcon: keyof typeof Ionicons.glyphMap;
  ctaLabel: string;
  onCta?: () => void;
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
      <View className="gap-3 p-4">
        <Text className="text-lg font-bold text-[#1A1C1C]">{title}</Text>
        <View className="flex-row items-center gap-2">
          <Ionicons color="#00569F" name="location-outline" size={18} />
          <Text className="flex-1 text-sm leading-relaxed text-[#40493D]">{location}</Text>
        </View>
        <View className="flex-row items-center justify-between gap-3 rounded-2xl border border-black/[0.06] bg-[#F9F9F9] px-3 py-3">
          <View className="min-w-0 flex-1">
            <Text className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">{metaLabel}</Text>
            <Text className="mt-0.5 text-sm font-bold text-[#106D20]">{metaValue}</Text>
          </View>
          {metaRight ? <View className="shrink-0">{metaRight}</View> : null}
        </View>
        <Pressable
          className="h-12 w-full flex-row items-center justify-center gap-2 rounded-full bg-[#00569F] active:opacity-90"
          onPress={onCta}>
          <Ionicons color="#FFFFFF" name={ctaIcon} size={20} />
          <Text className="text-sm font-bold text-white">{ctaLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const FILTERS = [
  { id: 'all' as const, label: 'Tous', icon: 'grid-outline' as const },
  { id: 'sante' as const, label: 'Santé', icon: 'medkit-outline' as const },
  { id: 'pharma' as const, label: 'Pharmacie', icon: 'medical-outline' as const },
  { id: 'loisirs' as const, label: 'Clubs & Loisirs', icon: 'people-outline' as const },
];

type PartnerCategory = 'sante' | 'pharma' | 'loisirs';

export default function PartenairesScreen() {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]['id']>('all');

  const partnerRows: { key: string; cat: PartnerCategory; node: ReactNode }[] = [
    {
      key: 'saint-luc',
      cat: 'sante',
      node: (
        <PartnerCard
          badgeColor="#106D20"
          badgeIcon="medkit-outline"
          badgeLabel="Clinique"
          ctaIcon="calendar-outline"
          ctaLabel="Prendre rendez-vous"
          img={P1}
          location="Plateau, Avenue 15"
          metaLabel="Disponibilité"
          metaRight={
            <View className="flex-row">
              <View className="-mr-3 h-10 w-10 overflow-hidden rounded-full border-4 border-white">
                <Image className="h-full w-full" resizeMode="cover" source={{ uri: DOC }} />
              </View>
              <View className="h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#D4E3FF]">
                <Text className="text-xs font-bold text-[#001C3A]">+2</Text>
              </View>
            </View>
          }
          metaValue="Aujourd'hui, 14:00"
          onCta={() => router.push('/rendez-vous')}
          title="Centre de Santé Saint-Luc"
        />
      ),
    },
    {
      key: 'pharmacie',
      cat: 'pharma',
      node: (
        <PartnerCard
          badgeColor="#00569F"
          badgeIcon="medical-outline"
          badgeLabel="Pharmacie"
          ctaIcon="cart-outline"
          ctaLabel="Commander"
          img={P2}
          location="Cocody, Rue des Jardins"
          metaLabel="Livraison à domicile"
          metaRight={<Ionicons color="#106D20" name="car-outline" size={24} />}
          metaValue="Disponible 24h/24"
          title="Grande Pharmacie du Parc"
        />
      ),
    },
    {
      key: 'club',
      cat: 'loisirs',
      node: (
        <PartnerCard
          badgeColor="#106D20"
          badgeIcon="people-outline"
          badgeLabel="Loisirs"
          ctaIcon="add-circle-outline"
          ctaLabel="S'inscrire"
          img={P3}
          location="Marcory Zone 4"
          metaLabel="Prochaine activité"
          metaRight={<Ionicons color="#106D20" name="barbell-outline" size={24} />}
          metaValue="Yoga doux — demain 10:00"
          title="Club les Seniors Actifs"
        />
      ),
    },
    {
      key: 'kine',
      cat: 'sante',
      node: (
        <PartnerCard
          badgeColor="#00569F"
          badgeIcon="body-outline"
          badgeLabel="Spécialiste"
          ctaIcon="calendar-outline"
          ctaLabel="Prendre rendez-vous"
          img={P4}
          location="Riviera Palmeraie"
          metaLabel="Type de soin"
          metaRight={<Ionicons color="#106D20" name="fitness-outline" size={24} />}
          metaValue="Rééducation & massage"
          onCta={() => router.push('/rendez-vous')}
          title="Cabinet Kiné-Bien-Être"
        />
      ),
    },
  ];

  const visiblePartners =
    activeFilter === 'all' ? partnerRows : partnerRows.filter((p) => p.cat === activeFilter);

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="z-40 flex h-16 w-full flex-row items-center justify-between border-b border-stone-200/80 bg-white/95 px-4">
        <Pressable
          className="h-10 w-10 items-center justify-center rounded-full active:bg-[#E8E8E8]"
          onPress={() => router.back()}>
          <Ionicons color="#00569F" name="arrow-back" size={22} />
        </Pressable>
        <Text className="text-lg font-bold text-[#00569F]">Nos partenaires</Text>
        <View className="w-10" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 160 + insets.bottom }}
        showsVerticalScrollIndicator={false}>
        <View className="mx-auto w-full max-w-2xl gap-6 px-4 pt-6">
          <View className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-sm">
            <View className="relative aspect-[2/1] w-full">
              <Image className="h-full w-full" resizeMode="cover" source={{ uri: HERO }} />
              <View className="absolute inset-0 bg-black/40" />
              <View className="absolute bottom-0 left-0 right-0 p-4">
                <View className="mb-2 flex-row items-center gap-2 self-start rounded-full bg-white/90 px-3 py-1 shadow-sm">
                  <Ionicons color="#00569F" name="hand-left-outline" size={18} />
                  <Text className="text-xs font-bold text-[#00569F]">Réseau Akwaba</Text>
                </View>
                <Text className="text-2xl font-black tracking-tight text-white">Des partenaires de confiance</Text>
                <Text className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-white/90">
                  Santé, pharmacie et loisirs : des services sélectionnés pour votre bien-être au quotidien.
                </Text>
              </View>
            </View>
          </View>

          <View className="gap-3">
            <Text className="px-1 text-sm font-bold uppercase tracking-wider text-[#40493D]">Catégories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-1" contentContainerStyle={{ gap: 10 }}>
              {FILTERS.map((f) => {
                const on = activeFilter === f.id;
                return (
                  <Pressable
                    key={f.id}
                    className={`flex-row items-center gap-2 rounded-2xl border px-4 py-3 active:opacity-90 ${
                      on ? 'border-[#00569F] bg-[#00569F]' : 'border-black/10 bg-white shadow-sm'
                    }`}
                    onPress={() => setActiveFilter(f.id)}>
                    <Ionicons color={on ? '#FFFFFF' : '#40493D'} name={f.icon} size={18} />
                    <Text className={`text-sm font-bold ${on ? 'text-white' : 'text-[#40493D]'}`}>{f.label}</Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

          <View className="gap-5">
            <Text className="px-1 text-sm font-bold uppercase tracking-wider text-[#40493D]">À proximité</Text>
            {visiblePartners.length === 0 ? (
              <View className="items-center rounded-3xl border border-dashed border-black/15 bg-white/90 py-14 px-6 shadow-sm">
                <Ionicons color="#94A3B8" name="search-outline" size={40} />
                <Text className="mt-4 text-center text-base font-semibold text-[#1A1C1C]">Aucun partenaire</Text>
                <Text className="mt-2 text-center text-sm leading-relaxed text-[#64748B]">
                  Essayez une autre catégorie ou affichez tous les partenaires.
                </Text>
              </View>
            ) : (
              visiblePartners.map((p) => (
                <View key={p.key}>{p.node}</View>
              ))
            )}
          </View>

          <View className="overflow-hidden rounded-3xl border border-[#993300]/25 bg-[#993300]/10 shadow-sm">
            <View className="flex-row gap-3 p-4">
              <Ionicons color="#993300" name="information-circle-outline" size={28} />
              <Text className="flex-1 text-sm leading-relaxed text-[#1A1C1C]">
                Les partenaires sont indiqués à titre informatif. Pour toute urgence, utilisez le bouton{' '}
                <Text className="font-bold">SOS</Text> ou les services adaptés.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Pressable
        className="absolute bottom-32 right-6 z-40 h-20 w-20 items-center justify-center rounded-full bg-[#993300] shadow-2xl active:opacity-90"
        onPress={() => router.push('/(tabs)/sos')}>
        <Ionicons color="#FFFFFF" name="warning" size={32} />
        <Text className="text-[10px] font-black uppercase tracking-widest text-white">SOS</Text>
      </Pressable>
    </SafeAreaView>
  );
}
