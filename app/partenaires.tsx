import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import type { ReactNode } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const P1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiYxDXQaTFd1Z_rVaOpMDb2xIWL-beEnxUQ3tlzxls5mT2zhMAkypS0cfVuLI7vK2TYLM0nK11qLy13Wff4utu6P7jEbLC26UWycjgMGf7hl_GHptUO5x_qRZG1VvZrrJY_Onxi4Efs-h2OjziZlz3n6xI2Q3Kt8mxUORN2UJcoqVGFG9pjtnfLW8yhbmhgAc713Z4LA2_Deh3EJ1fWiehMnNgv0cqaKWv3Ov45sakacVvU2batifPY2zGJz533TskwGM0HYE6R2s';
const P2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtjwdQSEEJFbwsyVue5I0KeMVRTDVyxRtRQDPsA3qC3xLSMUKiBofewtsrvzlpf7y0mcrKTyjFJj7jq-MFWPyTupH50CH-rapGU4fQMAhsmUYS7UKnSEJIfus1NsYqzn_a52jlFsEPGGXu0-F-9FId9be_IfbBp5Xs-AiDjksYwUVGo8Q1-HBu4lozpag7jJr1wndVKQvfYHsSHerWY6LhaQ0CEoxEF8I9metxekzwyEQKg9DN8OiV5nXfdBjUW2-n-VFV3A65oAg';
const P3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsafOpzpbCLo_zufbh0-i2m1XPTECOe4jZwcZniK6zuuXq7IYqdEBASqkDCX3I_2uRxo5UAIa9PimjcaFcXxGXc2fUwi9fQt2XEJjEyKZQioCSPG0oFVzu-wl3JY1dex0bD7AYFbls66YLLv3zji2H7vkmn8uWsiYs9x9g3Xjd7hbDv4WKfhKvogl2YdB5bTi_S4HQTS1odeQdZsaZaWYOIPPvvW5OdBZRTz6YjG1nk9t2zUQozCzVmmkP9Pa5q1jhBT05Z-sFCMM';
const P4 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY-3KrERIgVi0gbQfiaJfRZkfe2vHhqVlWZqLUwBwOvemSHqyjUuMwx2C1G9r3zCjvJ94eYE3JH6Fb_uSHFf9uWDUekZTcX-GQ26o9FLr-iktIkmei72BEN18Kgt8QkvplKTxqtLPUJWWkZR6GinyBtE7UlXtW2BDIozc4WFFEAroQ8J276vmg0RT0xOSYvMlkIXBu5jt2j808L1CMZr9hd3ukwaolTEYKu8qX0SXMk_sSCtwbFDHHls0A-kOecd_vb-nleS3DmT0';
const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAs8B5llBv0OySEgBvxBLml9kxF0Doazv9Yxov_VW9mVvmLYEk99gICkld0HNZE-rrV0nIXOxKEpvNcoPOkhDyDkrWxyI4nHH2Be0ybYSGePd7IbAP6sk-ye_3G6saXCCu1wzzogZt-S2xVATF6DdhMCv4ciRTDcuZctVCg3cAXAFctSPU3F159Tzic3xU2r0pWu3q48VPWlbobCX7kb0WFUTih3dLSCd7P-sEOOGoKZi9QQUVyCGpqGiimZ7NGS17pTPmGxK9n26U';
const DOC = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcplEsNB4IRxJR6wYRK_o2UejyNCWtKEQtDQBcBdYPX0Mkg_ELU83NiGU-TQ33c_pc_xNodHfDj520TfXe4lpVsOaOYLjH46O9eg_nkHCobPlBz3QahbdMsobpO2-FXKsyCpfxlLryC_3f0dXhmuoqFTAzmnVfpV25lm5xs5naoj4wzE6rN8FZpHbaI_wyNLp4Wq5HmJIt8mb1u-LLP-RFsGNdIdQqUkpz0FU3Gyeqg6JRHJqB3eJin281dOiypCCGGqLNDWOOPQ0';

function PartnerCard({
  img,
  tag,
  title,
  location,
  footerLeftLabel,
  footerLeftValue,
  footerRight,
  ctaIcon,
  ctaLabel,
  onCta,
}: {
  img: string;
  tag: string;
  title: string;
  location: string;
  footerLeftLabel: string;
  footerLeftValue: string;
  footerRight: ReactNode;
  ctaIcon: keyof typeof Ionicons.glyphMap;
  ctaLabel: string;
  onCta?: () => void;
}) {
  return (
    <View
      className="gap-6 rounded-xl bg-white p-6"
      style={{ shadowColor: '#00569F', shadowOpacity: 0.06, shadowRadius: 20, shadowOffset: { width: 0, height: -4 } }}>
      <View className="flex-row gap-6">
        <View className="h-24 w-24 overflow-hidden rounded-lg">
          <Image className="h-full w-full" resizeMode="cover" source={{ uri: img }} />
        </View>
        <View className="flex-1 justify-center">
          <Text className="mb-1 text-sm font-bold uppercase tracking-widest text-[#106D20]">{tag}</Text>
          <Text className="text-xl font-bold text-[#1A1C1C]">{title}</Text>
          <View className="mt-1 flex-row items-center gap-2">
            <Ionicons color="#00569F" name="location" size={18} />
            <Text className="text-sm text-[#40493D]">{location}</Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between rounded-lg bg-[#F3F3F3] p-4">
        <View>
          <Text className="text-sm text-[#40493D]">{footerLeftLabel}</Text>
          <Text className="font-bold text-[#106D20]">{footerLeftValue}</Text>
        </View>
        {footerRight}
      </View>
      <Pressable
        className="h-14 w-full flex-row items-center justify-center gap-2 rounded-full bg-[#00569F] active:opacity-90"
        onPress={onCta}>
        <Ionicons color="#FFFFFF" name={ctaIcon} size={20} />
        <Text className="text-sm font-bold text-white">{ctaLabel}</Text>
      </Pressable>
    </View>
  );
}

export default function PartenairesScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="h-20 flex-row items-center justify-between bg-[#F9F9F9] px-6 pt-4">
        <View className="flex-row items-center gap-4">
          <Pressable className="p-2 active:opacity-70" onPress={() => router.back()}>
            <Ionicons color="#1E40AF" name="arrow-back" size={24} />
          </Pressable>
          <Text className="text-xl font-black tracking-tight text-[#00569F]">Akwaba</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <Ionicons color="#1E40AF" name="notifications-outline" size={28} />
          <View className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#D4E3FF]">
            <Image className="h-full w-full" resizeMode="cover" source={{ uri: AVATAR }} />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 200 }} showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-8">
          <View className="mb-10">
            <Text className="mb-3 text-2xl font-black tracking-tight text-[#1A1C1C]">Nos Partenaires</Text>
            <Text className="max-w-2xl text-base text-[#40493D]">
              Retrouvez les services de confiance sélectionnés pour votre bien-être et votre sécurité au quotidien.
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-12 -mx-6 px-6" contentContainerStyle={{ gap: 16 }}>
            <Pressable className="flex-row items-center gap-2 rounded-full bg-[#00569F] px-6 py-3 shadow-lg">
              <Ionicons color="#FFFFFF" name="grid-outline" size={18} />
              <Text className="text-sm font-bold text-white">Tous</Text>
            </Pressable>
            <Pressable className="flex-row items-center gap-2 rounded-full bg-[#E8E8E8] px-6 py-3">
              <Ionicons color="#40493D" name="medkit-outline" size={18} />
              <Text className="text-sm font-bold text-[#40493D]">Santé</Text>
            </Pressable>
            <Pressable className="flex-row items-center gap-2 rounded-full bg-[#E8E8E8] px-6 py-3">
              <Ionicons color="#40493D" name="medical-outline" size={18} />
              <Text className="text-sm font-bold text-[#40493D]">Pharmacie</Text>
            </Pressable>
            <Pressable className="flex-row items-center gap-2 rounded-full bg-[#E8E8E8] px-6 py-3">
              <Ionicons color="#40493D" name="people-outline" size={18} />
              <Text className="text-sm font-bold text-[#40493D]">Clubs & Loisirs</Text>
            </Pressable>
          </ScrollView>

          <View className="gap-8 pb-8">
            <PartnerCard
              ctaIcon="calendar-outline"
              ctaLabel="Prendre rendez-vous"
              footerLeftLabel="Disponibilité"
              footerLeftValue="Aujourd'hui, 14:00"
              footerRight={
                <View className="flex-row">
                  <View className="-mr-3 h-10 w-10 overflow-hidden rounded-full border-4 border-[#F3F3F3]">
                    <Image className="h-full w-full" resizeMode="cover" source={{ uri: DOC }} />
                  </View>
                  <View className="h-10 w-10 items-center justify-center rounded-full border-4 border-[#F3F3F3] bg-[#D4E3FF]">
                    <Text className="text-xs font-bold text-[#001C3A]">+2</Text>
                  </View>
                </View>
              }
              img={P1}
              location="Plateau, Avenue 15"
              onCta={() => router.push('/rendez-vous')}
              tag="Clinique"
              title="Centre de Santé Saint-Luc"
            />
            <PartnerCard
              ctaIcon="cart-outline"
              ctaLabel="Commander"
              footerLeftLabel="Livraison à domicile"
              footerLeftValue="Disponible 24h/24"
              footerRight={<Ionicons color="#106D20" name="car-outline" size={24} />}
              img={P2}
              location="Cocody, Rue des Jardins"
              tag="Pharmacie"
              title="Grande Pharmacie du Parc"
            />
            <PartnerCard
              ctaIcon="add-circle-outline"
              ctaLabel="S'inscrire"
              footerLeftLabel="Prochaine activité"
              footerLeftValue="Yoga Doux - Demain 10:00"
              footerRight={<Ionicons color="#106D20" name="barbell-outline" size={24} />}
              img={P3}
              location="Marcory Zone 4"
              tag="Loisirs"
              title="Club les Seniors Actifs"
            />
            <PartnerCard
              ctaIcon="calendar-outline"
              ctaLabel="Prendre rendez-vous"
              footerLeftLabel="Type de soin"
              footerLeftValue="Rééducation & Massage"
              footerRight={<Ionicons color="#106D20" name="body-outline" size={24} />}
              img={P4}
              location="Riviera Palmeraie"
              onCta={() => router.push('/rendez-vous')}
              tag="Spécialiste"
              title="Cabinet Kiné-Bien-Être"
            />
          </View>
        </View>
      </ScrollView>

      <Pressable
        className="absolute bottom-32 right-6 z-40 h-20 w-20 items-center justify-center rounded-full bg-[#993300] shadow-2xl active:opacity-90"
        onPress={() => router.push('/sos')}>
        <Ionicons color="#FFFFFF" name="warning" size={32} />
        <Text className="text-[10px] font-black uppercase tracking-widest text-white">SOS</Text>
      </Pressable>

      <View
        className="absolute bottom-0 left-0 right-0 z-50 flex-row items-end justify-around rounded-t-[32px] bg-white px-4 pb-6 pt-2 shadow-lg"
        style={{ paddingBottom: Math.max(insets.bottom, 24), shadowColor: '#00569F', shadowOpacity: 0.06, shadowRadius: 20, shadowOffset: { width: 0, height: -4 } }}>
          <Pressable className="items-center p-2 active:opacity-90" onPress={() => router.replace('/(tabs)')}>
            <Ionicons color="#64748B" name="home-outline" size={24} />
            <Text className="text-[11px] font-medium text-slate-500">Accueil</Text>
          </Pressable>
          <Pressable className="items-center p-2 active:opacity-90" onPress={() => router.push('/explore')}>
            <Ionicons color="#64748B" name="map-outline" size={24} />
            <Text className="text-[11px] font-medium text-slate-500">Carte</Text>
          </Pressable>
          <View className="relative pb-2">
            <Pressable className="h-16 w-16 -translate-y-4 items-center justify-center rounded-full bg-blue-800 shadow-lg active:opacity-90" onPress={() => router.push('/(tabs)/add')}>
              <Ionicons color="#FFFFFF" name="add" size={28} />
            </Pressable>
            <Text className="absolute -bottom-1 left-1/2 w-20 -translate-x-1/2 text-center text-[11px] font-medium text-slate-500">
              Ajouter
            </Text>
          </View>
          <Pressable className="items-center rounded-full bg-blue-50 px-4 py-2 active:opacity-90" onPress={() => router.push('/sos')}>
            <Ionicons color="#1E40AF" name="warning" size={24} />
            <Text className="text-[11px] font-medium text-blue-800">SOS</Text>
          </Pressable>
          <Pressable className="items-center p-2 active:opacity-90" onPress={() => router.push('/profil')}>
            <Ionicons color="#64748B" name="person-outline" size={24} />
            <Text className="text-[11px] font-medium text-slate-500">Profil</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
}
