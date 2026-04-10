import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const DR_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD0touXmp1g_Q9xgLkUskwcfGO0hN2k0hfpp_SqCnbNOhtwG_zi5Wkw8wCht51wBs6vSNffKSmgfQ0DsdC_DlFQdhhc8G7k4u9MH6QakZPkGTnyQ4L5WPhoXTIyHfVz7gEddJqm62wFfjJ9ErUcUFq0L5Nrkt2HPccBoRAFVGRU7JCv3PR370IazGmrnYpgGdb2wHfZdPH3e9BXZ4zTez4M5zeav7k9fU6OUWrjdkjwjiuZ-RfoWysxA4617bRO_h82KgZmO8Snl-g';

export default function ConfirmationRdvScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="sticky z-50 bg-[#F9F9F9] px-6 py-4">
        <View className="mx-auto w-full max-w-screen-xl flex-row items-center justify-between">
          <Pressable className="p-2 active:opacity-80" onPress={() => router.back()}>
            <Ionicons color="#00569F" name="arrow-back" size={28} />
          </Pressable>
          <Text className="text-2xl font-bold tracking-tight text-[#00569F]">Confirmation</Text>
          <View className="w-10" />
        </View>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 140 + insets.bottom }} showsVerticalScrollIndicator={false}>
        <View className="mx-auto w-full max-w-md flex-col items-center px-6 pt-8">
          <View className="mb-10 flex-col items-center">
            <View className="mb-6 h-32 w-32 items-center justify-center rounded-full bg-[#9DF898] shadow-sm">
              <Ionicons color="#1A7425" name="checkmark-circle" size={64} />
            </View>
            <Text className="mb-4 px-2 text-center text-3xl font-extrabold leading-tight text-[#1A1C1C]">
              Rendez-vous confirmé
            </Text>
            <Text className="text-center text-xl font-medium leading-relaxed text-[#40493D]">
              Félicitations ! Votre rendez-vous est confirmé.
            </Text>
          </View>

          <View className="w-full gap-4">
            <View
              className="flex-row items-center gap-6 rounded-xl bg-white p-8"
              style={{ shadowColor: '#00569F', shadowOpacity: 0.04, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } }}>
              <View className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-[#EEEEEE]">
                <Image className="h-full w-full" resizeMode="cover" source={{ uri: DR_IMG }} />
              </View>
              <View>
                <Text className="mb-1 text-sm font-bold uppercase tracking-wider text-[#00569F]">Partenaire</Text>
                <Text className="text-2xl font-bold text-[#1A1C1C]">Dr. Sylvie Moreau</Text>
              </View>
            </View>
            <View className="flex-row gap-4">
              <View className="flex-1 rounded-xl bg-[#F3F3F3] p-6">
                <Ionicons color="#106D20" name="calendar-outline" size={28} />
                <Text className="mb-1 mt-2 text-sm font-semibold text-[#40493D]">Date</Text>
                <Text className="text-lg font-bold text-[#1A1C1C]">Lundi 23 Octobre</Text>
              </View>
              <View className="flex-1 rounded-xl bg-[#F3F3F3] p-6">
                <Ionicons color="#106D20" name="time-outline" size={28} />
                <Text className="mb-1 mt-2 text-sm font-semibold text-[#40493D]">Heure</Text>
                <Text className="text-lg font-bold text-[#1A1C1C]">14:00</Text>
              </View>
            </View>
          </View>

          <View className="mt-8 w-full flex-row items-start gap-4 rounded-xl border-l-4 border-[#00569F] bg-[#D4E3FF]/30 p-6">
            <Ionicons className="mt-1" color="#00569F" name="notifications" size={22} />
            <Text className="flex-1 font-medium leading-normal text-[#004786]">
              Vous recevrez un rappel 24h avant.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-10 left-0 right-0 items-center px-6" pointerEvents="box-none">
        <Pressable
          className="w-full max-w-md flex-row items-center justify-center gap-3 rounded-full bg-[#00569F] py-5 active:opacity-95"
          style={{ shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 8 }}
          onPress={() => router.replace('/(tabs)')}>
          <Ionicons color="#FFFFFF" name="home" size={22} />
          <Text className="text-xl font-bold text-white">Retour à l’accueil</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
