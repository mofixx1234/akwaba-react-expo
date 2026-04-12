import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const DR_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD0touXmp1g_Q9xgLkUskwcfGO0hN2k0hfpp_SqCnbNOhtwG_zi5Wkw8wCht51wBs6vSNffKSmgfQ0DsdC_DlFQdhhc8G7k4u9MH6QakZPkGTnyQ4L5WPhoXTIyHfVz7gEddJqm62wFfjJ9ErUcUFq0L5Nrkt2HPccBoRAFVGRU7JCv3PR370IazGmrnYpgGdb2wHfZdPH3e9BXZ4zTez4M5zeav7k9fU6OUWrjdkjwjiuZ-RfoWysxA4617bRO_h82KgZmO8Snl-g';

export default function ConfirmationRdvScreen() {
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ dateLabel?: string; time?: string }>();
  const dateLabel =
    typeof params.dateLabel === 'string' && params.dateLabel.length > 0
      ? params.dateLabel
      : 'Mardi 7 avril 2026';
  const time = typeof params.time === 'string' && params.time.length > 0 ? params.time : '14:00';

  const bottomInset = Math.max(insets.bottom, 20);
  const scrollBottomPad = 100 + bottomInset;

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="z-40 flex h-16 w-full flex-row items-center justify-between border-b border-stone-200/80 bg-white/95 px-4">
        <Pressable
          className="h-10 w-10 items-center justify-center rounded-full active:bg-[#EEF4FB]"
          onPress={() => router.back()}>
          <Ionicons color="#00569F" name="arrow-back" size={22} />
        </Pressable>
        <Text className="absolute left-0 right-0 text-center text-lg font-bold text-[#00569F]" pointerEvents="none">
          Confirmation
        </Text>
        <View className="w-10" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: scrollBottomPad }}
        showsVerticalScrollIndicator={false}>
        <View className="mx-auto w-full max-w-2xl gap-6 px-4 pt-8">
          <View className="items-center">
            <View className="mb-5 h-24 w-24 items-center justify-center rounded-full bg-[#DCFCE7]">
              <Ionicons color="#166534" name="checkmark-circle" size={56} />
            </View>
            <Text className="text-center text-2xl font-black text-[#1A1C1C]">Rendez-vous confirmé</Text>
            <Text className="mt-2 max-w-sm text-center text-base leading-relaxed text-[#64748B]">
              Votre créneau est enregistré. Un rappel vous sera envoyé la veille.
            </Text>
          </View>

          <View className="gap-4">
            <View className="flex-row items-center gap-4 overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-4 shadow-sm">
              <View className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#E8ECF4]">
                <Image className="h-full w-full" resizeMode="cover" source={{ uri: DR_IMG }} />
              </View>
              <View className="min-w-0 flex-1">
                <Text className="text-xs font-bold uppercase tracking-wide text-[#00569F]">Praticien</Text>
                <Text className="mt-0.5 text-lg font-bold text-[#1A1C1C]">Dr Sylvie Moreau</Text>
                <Text className="mt-0.5 text-sm text-[#64748B]">Kinésithérapeute</Text>
              </View>
            </View>

            <View className="flex-row gap-3">
              <View className="min-w-0 flex-1 rounded-2xl border border-black/[0.06] bg-white p-4 shadow-sm">
                <Ionicons color="#106D20" name="calendar-outline" size={22} />
                <Text className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Date</Text>
                <Text className="mt-1 text-base font-bold leading-snug text-[#1A1C1C]">{dateLabel}</Text>
              </View>
              <View className="min-w-0 flex-1 rounded-2xl border border-black/[0.06] bg-white p-4 shadow-sm">
                <Ionicons color="#00569F" name="time-outline" size={22} />
                <Text className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Heure</Text>
                <Text className="mt-1 text-base font-bold text-[#1A1C1C]">{time}</Text>
              </View>
            </View>
          </View>

          <View className="flex-row gap-3 rounded-3xl border border-[#00569F]/20 bg-[#EEF4FB] p-4">
            <View className="mt-0.5">
              <Ionicons color="#00569F" name="notifications-outline" size={22} />
            </View>
            <Text className="min-w-0 flex-1 text-sm leading-relaxed text-[#1A1C1C]">
              Pensez à arriver quelques minutes en avance. En cas d’empêchement, modifiez ou annulez depuis l’app au moins 24 h avant.
            </Text>
          </View>

          <Pressable
            className="flex-row items-center justify-center gap-2 rounded-full bg-[#00569F] py-4 active:opacity-95"
            onPress={() => router.replace('/(tabs)')}>
            <Ionicons color="#FFFFFF" name="home-outline" size={22} />
            <Text className="text-base font-bold text-white">Retour à l’accueil</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
