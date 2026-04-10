import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Modal, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const QR_URI =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBLEcplYADZcbEgAlPzpOUy5gilBnHgVnL38uD0ThJdsN16kCF8aiw-OpXZQN2Wg_RLTBxuj1C3PbSuZ-0tFBnH6GicEkh9wkyAnF1fZ_GqP1CE9G5y9vho4gpBUCN-ll_I6DKfBGPRarnvKl-9-zV1F_1kDMgGK6EMYOSeaUe6WIGJnf1g6RJwwv1VW_zM3MZwqKyW7qX9PW1e-ZLh_MNdEBN_uvPF9uJtC4jkcLwRJuiEUuhVxW20NSmwNs_XSgx3R55QliajrJY';

export default function CarteSeniorScreen() {
  const insets = useSafeAreaInsets();
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <View className="flex-1 bg-sky-50">
      <View className="pointer-events-none absolute inset-0 overflow-hidden">
        <View className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-blue-300/30" style={Platform.OS === 'web' ? ({ filter: 'blur(24px)' } as never) : undefined} />
        <View className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-cyan-300/30" style={Platform.OS === 'web' ? ({ filter: 'blur(24px)' } as never) : undefined} />
        <View className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-300/30" style={Platform.OS === 'web' ? ({ filter: 'blur(24px)' } as never) : undefined} />
      </View>

      <SafeAreaView className="flex-1" edges={['top']}>
        <ScrollView className="mx-auto w-full max-w-md flex-1 px-4 pb-32 pt-6" showsVerticalScrollIndicator={false}>
          <View className="mb-6 flex-row items-center justify-between">
            <Pressable
              className="h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/60 shadow-sm active:opacity-90"
              onPress={() => router.back()}>
              <Ionicons color="#1D4ED8" name="arrow-back" size={22} />
            </Pressable>
            <Text className="text-xl font-extrabold tracking-tight text-blue-900">Akwaba</Text>
            <Pressable
              className="h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/60 shadow-sm active:opacity-90"
              onPress={() => router.push('/centre-notifications')}>
              <Ionicons color="#1D4ED8" name="notifications-outline" size={22} />
            </Pressable>
          </View>

          <View className="mb-5 items-center">
            <Text className="text-sm font-medium uppercase tracking-wider text-blue-700/80">Espace bénéficiaire</Text>
            <Text className="mt-1 text-3xl font-black tracking-tight text-slate-900">Ma Carte Senior</Text>
            <Text className="mt-2 text-center text-slate-600">Montrez votre QR code pour accéder à vos avantages.</Text>
          </View>

          <View className="rounded-3xl border border-white/60 bg-white/55 p-5 shadow-xl backdrop-blur-xl">
            <View className="mb-4 flex-row items-center justify-between">
              <View>
                <Text className="text-xs font-semibold uppercase tracking-wider text-slate-500">Titulaire</Text>
                <Text className="text-xl font-extrabold text-slate-900">Papa Koffi</Text>
              </View>
              <View className="rounded-full bg-emerald-100 px-3 py-1">
                <Text className="text-xs font-bold text-emerald-700">ACTIF</Text>
              </View>
            </View>
            <View className="rounded-2xl border border-slate-200 bg-white p-4 shadow-inner">
              <Image
                className="mx-auto aspect-square w-full max-w-[250px]"
                resizeMode="contain"
                source={{ uri: QR_URI }}
              />
            </View>
            <View className="mt-4 flex-row gap-3">
              <View className="flex-1 rounded-xl bg-blue-50 p-3">
                <Text className="text-slate-500">Numéro</Text>
                <Text className="font-bold text-blue-900">AKB-SR-00241</Text>
              </View>
              <View className="flex-1 rounded-xl bg-amber-50 p-3">
                <Text className="text-slate-500">Expire le</Text>
                <Text className="font-bold text-amber-700">31/12/2026</Text>
              </View>
            </View>
          </View>

          <Pressable
            className="mt-5 flex-row items-center justify-center gap-2 rounded-2xl bg-blue-700 px-4 py-4 active:opacity-95"
            style={{ shadowColor: '#1D4ED8', shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } }}
            onPress={() => setQrOpen(true)}>
            <Ionicons color="#FFFFFF" name="qr-code-outline" size={22} />
            <Text className="text-lg font-bold text-white">Afficher en plein écran</Text>
          </Pressable>

          <View className="mt-4 rounded-2xl border border-blue-100 bg-white/80 p-4">
            <View className="flex-row items-start gap-3">
              <Ionicons color="#1D4ED8" name="information-circle-outline" size={22} />
              <View className="flex-1">
                <Text className="font-bold text-slate-900">Astuce</Text>
                <Text className="text-sm text-slate-600">Augmente la luminosité de ton écran pour un scan plus rapide.</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View
        className="absolute bottom-0 left-0 z-50 w-full rounded-t-[48px] bg-stone-50 pt-3 shadow-lg"
        style={{ paddingBottom: Math.max(insets.bottom, 12), shadowColor: '#00569F', shadowOpacity: 0.06, shadowRadius: 20, shadowOffset: { width: 0, height: -4 } }}>
        <View className="mx-auto w-full max-w-md flex-row items-end justify-between gap-1 px-2">
          <Pressable className="items-center rounded-2xl px-1 py-2 active:opacity-95" onPress={() => router.replace('/(tabs)')}>
            <Ionicons color="#57534E" name="home-outline" size={22} />
            <Text className="text-[11px] font-bold text-stone-600">Accueil</Text>
          </Pressable>
          <View className="items-center rounded-2xl px-1 py-2">
            <Ionicons color="#1E3A8A" name="map" size={22} />
            <Text className="text-[11px] font-bold text-blue-900">Carte</Text>
          </View>
          <View className="items-center pb-1">
            <Pressable className="h-14 w-14 -translate-y-3 items-center justify-center rounded-full bg-[#1D4ED8] shadow-lg active:opacity-90" onPress={() => router.push('/(tabs)/add')}>
              <Ionicons color="#FFFFFF" name="add" size={28} />
            </Pressable>
          </View>
          <Pressable className="items-center rounded-2xl px-1 py-2 active:opacity-95" onPress={() => router.push('/sos')}>
            <Ionicons color="#57534E" name="warning-outline" size={22} />
            <Text className="text-[11px] font-bold text-stone-600">SOS</Text>
          </Pressable>
          <Pressable className="items-center rounded-2xl px-1 py-2 active:opacity-95" onPress={() => router.push('/profil')}>
            <Ionicons color="#57534E" name="person-outline" size={22} />
            <Text className="text-[11px] font-bold text-stone-600">Profil</Text>
          </Pressable>
        </View>
      </View>

      <Modal animationType="slide" transparent visible={qrOpen} onRequestClose={() => setQrOpen(false)}>
        <Pressable className="flex-1 justify-end bg-slate-950/60 p-3" onPress={() => setQrOpen(false)}>
          <Pressable className="w-full max-w-md self-center rounded-t-3xl bg-white p-5 shadow-2xl" onPress={(e) => e.stopPropagation()}>
            <View className="mb-3 items-center">
              <View className="h-1.5 w-12 rounded-full bg-slate-200" />
            </View>
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-lg font-extrabold text-slate-900">Carte QR - Plein écran</Text>
              <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-slate-100 active:opacity-80" onPress={() => setQrOpen(false)}>
                <Ionicons color="#334155" name="close" size={22} />
              </Pressable>
            </View>
            <View className="rounded-2xl border border-slate-200 bg-white p-4">
              <Image className="mx-auto aspect-square w-full max-w-[320px]" resizeMode="contain" source={{ uri: QR_URI }} />
            </View>
            <View className="mt-4 rounded-xl bg-blue-50 p-3">
              <Text className="text-center text-sm text-blue-900">
                {`Présentez ce code à l'agent pour valider votre carte.`}
              </Text>
            </View>
            <View className="mt-4 flex-row gap-3">
              <Pressable className="flex-1 rounded-xl bg-slate-100 py-3 active:opacity-90">
                <Text className="text-center text-sm font-semibold text-slate-700">Télécharger</Text>
              </Pressable>
              <Pressable className="flex-1 rounded-xl bg-blue-700 py-3 active:opacity-90" onPress={() => setQrOpen(false)}>
                <Text className="text-center text-sm font-semibold text-white">Fermer</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
