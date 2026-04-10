import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const IMG1 = 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop';
const IMG2 = 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop';
const IMG3 = 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop';

export default function SouvenirsScreen() {
  const insets = useSafeAreaInsets();
  const [type, setType] = useState<'photo' | 'audio' | 'texte'>('photo');

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="z-50 border-b border-black/5 bg-white/95">
        <View className="mx-auto h-16 w-full max-w-3xl flex-row items-center justify-between px-4">
          <View className="flex-row items-center gap-3">
            <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-[#F3F4F6]" onPress={() => router.back()}>
              <Ionicons color="#00569F" name="arrow-back" size={22} />
            </Pressable>
            <View>
              <Text className="text-xs font-semibold text-[#4B5563]">Module émotionnel</Text>
              <Text className="text-lg font-extrabold leading-tight text-[#00569F]">Espace Souvenirs</Text>
            </View>
          </View>
          <Pressable className="rounded-full bg-[#00569F] px-4 py-2 active:opacity-90">
            <Text className="text-sm font-bold text-white">Partager</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 + insets.bottom }} showsVerticalScrollIndicator={false}>
        <View className="mx-auto w-full max-w-3xl gap-6 px-4 py-6">
          <View className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
            <Text className="text-2xl font-black tracking-tight text-[#1A1C1C]">Un souvenir, un sourire</Text>
            <Text className="mt-2 text-[#4B5563]">
              Retrouvez ici les photos et les messages vocaux envoyés par vos proches pour vous rassurer et garder le lien chaque jour.
            </Text>
            <View className="mt-5 flex-row flex-wrap gap-3">
              <View className="min-w-[45%] flex-1 rounded-2xl bg-blue-50 p-3">
                <Text className="text-xs font-semibold uppercase text-[#00569F]">Photos</Text>
                <Text className="mt-1 text-2xl font-black text-[#00569F]">24</Text>
              </View>
              <View className="min-w-[45%] flex-1 rounded-2xl bg-green-50 p-3">
                <Text className="text-xs font-semibold uppercase text-[#106D20]">Vocaux</Text>
                <Text className="mt-1 text-2xl font-black text-[#106D20]">9</Text>
              </View>
              <View className="min-w-[45%] flex-1 rounded-2xl bg-orange-50 p-3">
                <Text className="text-xs font-semibold uppercase text-[#993300]">Famille</Text>
                <Text className="mt-1 text-2xl font-black text-[#993300]">6</Text>
              </View>
              <View className="min-w-[45%] flex-1 rounded-2xl bg-[#F3F4F6] p-3">
                <Text className="text-xs font-semibold uppercase text-[#1A1C1C]">Dernier</Text>
                <Text className="mt-1 text-base font-black text-[#1A1C1C]">Aujourd’hui</Text>
              </View>
            </View>
          </View>

          <View className="gap-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-extrabold text-[#1A1C1C]">Photos récentes</Text>
              <Pressable>
                <Text className="text-sm font-bold text-[#00569F]">Voir tout</Text>
              </Pressable>
            </View>
            <View className="flex-row flex-wrap gap-3">
              {[
                { img: IMG1, t: 'Dimanche en famille', s: 'Envoyé par Awa' },
                { img: IMG2, t: 'Les petits-enfants', s: 'Envoyé par Mamadou' },
                { img: IMG3, t: 'Souvenir anniversaire', s: 'Envoyé par Fatou' },
              ].map((p) => (
                <View key={p.t} className="w-[48%] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm sm:w-[31%]">
                  <Image className="h-32 w-full" resizeMode="cover" source={{ uri: p.img }} />
                  <View className="p-3">
                    <Text className="text-sm font-bold text-[#1A1C1C]">{p.t}</Text>
                    <Text className="mt-1 text-xs text-[#4B5563]">{p.s}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View className="gap-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-extrabold text-[#1A1C1C]">Messages vocaux</Text>
              <Pressable>
                <Text className="text-sm font-bold text-[#00569F]">Tout écouter</Text>
              </Pressable>
            </View>
            {[
              { who: 'Message de Koffi', sub: '"On pense fort a toi. Passe une belle journee."', t: '00:42', c: '#00569F' as const },
              { who: 'Message de Awa', sub: '"Demain on vient te voir avec les enfants."', t: '01:13', c: '#106D20' as const },
            ].map((m) => (
              <View key={m.who} className="flex-row items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                <Pressable className="h-12 w-12 items-center justify-center rounded-full active:opacity-90" style={{ backgroundColor: m.c }}>
                  <Ionicons color="#FFFFFF" name="play" size={22} />
                </Pressable>
                <View className="flex-1">
                  <Text className="font-bold text-[#1A1C1C]">{m.who}</Text>
                  <Text className="text-xs text-[#4B5563]">{m.sub}</Text>
                </View>
                <Text className="text-xs font-semibold text-[#4B5563]">{m.t}</Text>
              </View>
            ))}
          </View>

          <View className="gap-4 rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
            <View className="flex-row items-start justify-between gap-3">
              <View className="flex-1">
                <Text className="text-xl font-extrabold text-[#1A1C1C]">Ajouter un souvenir</Text>
                <Text className="mt-1 text-sm text-[#4B5563]">Choisissez un type puis renseignez les details.</Text>
              </View>
              <Ionicons color="#00569F" name="add-circle-outline" size={28} />
            </View>
            <View className="flex-row flex-wrap gap-3">
              {(['photo', 'audio', 'texte'] as const).map((k) => (
                <Pressable
                  key={k}
                  className={`min-w-[30%] flex-1 rounded-2xl border p-4 ${type === k ? 'border-blue-200 bg-blue-50' : 'border-black/10 bg-[#F3F4F6]'}`}
                  onPress={() => setType(k)}>
                  <Ionicons color={type === k ? '#00569F' : '#1A1C1C'} name={k === 'photo' ? 'camera-outline' : k === 'audio' ? 'mic-outline' : 'document-text-outline'} size={22} />
                  <Text className={`mt-2 font-bold ${type === k ? 'text-[#00569F]' : 'text-[#1A1C1C]'}`}>
                    {k === 'photo' ? 'Photo' : k === 'audio' ? 'Vocal' : 'Texte'}
                  </Text>
                  <Text className="mt-1 text-xs opacity-80">
                    {k === 'photo' ? 'Importer une image' : k === 'audio' ? 'Enregistrer un message' : 'Ecrire un souvenir'}
                  </Text>
                </Pressable>
              ))}
            </View>
            <View className="gap-3">
              <Text className="text-sm font-bold text-[#1A1C1C]">Auteur</Text>
              <TextInput className="rounded-xl border border-black/10 bg-[#F3F4F6] px-4 py-3 text-[#1A1C1C]" placeholder="Ex: Awa" placeholderTextColor="#9CA3AF" />
              {type === 'photo' ? (
                <View>
                  <Text className="text-sm font-bold text-[#1A1C1C]">URL de la photo</Text>
                  <TextInput className="mt-1 rounded-xl border border-black/10 bg-[#F3F4F6] px-4 py-3 text-[#1A1C1C]" placeholder="https://..." placeholderTextColor="#9CA3AF" />
                </View>
              ) : null}
              {type === 'audio' ? (
                <View>
                  <Text className="text-sm font-bold text-[#1A1C1C]">Message vocal</Text>
                  <TextInput
                    className="mt-1 rounded-xl border border-black/10 bg-[#F3F4F6] px-4 py-3 text-[#1A1C1C]"
                    multiline
                    placeholder="Ex: Bonne journee, on t’aime !"
                    placeholderTextColor="#9CA3AF"
                  />
                </View>
              ) : null}
              {type === 'texte' ? (
                <View>
                  <Text className="text-sm font-bold text-[#1A1C1C]">Texte du souvenir</Text>
                  <TextInput
                    className="mt-1 rounded-xl border border-black/10 bg-[#F3F4F6] px-4 py-3 text-[#1A1C1C]"
                    multiline
                    placeholder="Ecris ton souvenir ici..."
                    placeholderTextColor="#9CA3AF"
                  />
                </View>
              ) : null}
              <Pressable className="w-full rounded-full bg-[#00569F] py-3.5 active:opacity-90">
                <Text className="text-center font-black text-white">Publier le souvenir</Text>
              </Pressable>
            </View>
          </View>

          <View className="gap-3 pb-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-extrabold text-[#1A1C1C]">Souvenirs ajoutes</Text>
              <Pressable>
                <Text className="text-sm font-bold text-[#00569F]">Filtrer</Text>
              </Pressable>
            </View>
            <View className="gap-3">
              <View className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                <View className="flex-row items-center justify-between">
                  <Text className="font-bold text-[#1A1C1C]">Photo envoyee par Awa</Text>
                  <Text className="text-xs text-[#4B5563]">Aujourd’hui</Text>
                </View>
                <Text className="mt-1 text-sm text-[#4B5563]">Souvenir du dimanche en famille.</Text>
              </View>
              <View className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                <View className="flex-row items-center justify-between">
                  <Text className="font-bold text-[#1A1C1C]">Vocal de Koffi</Text>
                  <Text className="text-xs text-[#4B5563]">Hier</Text>
                </View>
                <Text className="mt-1 text-sm text-[#4B5563]">Message de soutien et de reassurance.</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 w-full border-t border-black/5 bg-white px-4 py-4" style={{ paddingBottom: Math.max(insets.bottom, 16) }}>
        <View className="mx-auto w-full max-w-3xl">
          <Pressable className="w-full flex-row items-center justify-center gap-2 rounded-full bg-[#00569F] py-4 active:opacity-90">
            <Ionicons color="#FFFFFF" name="add-circle-outline" size={22} />
            <Text className="text-lg font-black text-white">Ajouter un souvenir</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
