import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PLACEHOLDER_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCrbrLf-CMbx8UpukWQMPJXupfx3vZUK5fvzh5j9gwDlXm-x-7pz9Lao631b7eaSt9I6DWYF_W0giJMH1HaqHnfJtYFWPRnTYVt8c-pccwVDnlmti_VWKzIHl7pz_gekX2J3RMzcEj8KRHzSL0Qv3Tjz97r0AUB_2FUMVyJnxlwFAhFHokCDwEuo3-xtv6CNzdn3E1wrIfbwIP9J2tGQDYlk5BBIAw_gkur8so373P7UxaFdoS_3I0pQWj8t66cUgwBp8FMwRazzpY';

export default function ConfigProfilScreen() {
  return (
    <SafeAreaView className="flex-1 items-center bg-[#F9F9F9]" edges={['top', 'bottom']}>
      <View className="w-full max-w-md flex-1 flex-col items-center px-6 pb-24 pt-12">
        <View className="mb-10 w-full flex-row justify-center gap-2">
          <View className="h-1.5 w-16 rounded-full bg-[#006ECA] opacity-30" />
          <View className="h-1.5 w-16 rounded-full bg-[#00569F]" />
        </View>

        <View className="mb-10 items-center">
          <Text className="mb-4 text-center text-[2.25rem] font-bold leading-tight tracking-tight text-[#1A1C1C]">
            Votre Photo de Profil
          </Text>
          <Text className="px-4 text-center text-[1.125rem] font-medium leading-relaxed text-[#40493D]">
            Étape 2 sur 2 : Ajoutez une photo pour que l’on puisse vous reconnaître.
          </Text>
        </View>

        <Pressable className="relative mb-12 active:opacity-90">
          <View className="h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[#EEEEEE] shadow-lg">
            <View className="items-center">
              <Ionicons color="#006ECA" name="camera-outline" size={72} />
              <Text className="mt-1 text-lg font-semibold text-[#00569F]">Ajouter</Text>
            </View>
            <Image className="absolute inset-0 h-full w-full opacity-10" resizeMode="cover" source={{ uri: PLACEHOLDER_IMG }} />
          </View>
          <View className="absolute bottom-2 right-2 h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#00569F] shadow-lg">
            <Ionicons color="#FFFFFF" name="camera" size={28} />
          </View>
        </Pressable>

        <View className="mb-12 w-full flex-row items-start gap-4 rounded-lg bg-[#F3F3F3] p-6">
          <Ionicons color="#106D20" name="shield-checkmark" size={28} />
          <Text className="flex-1 text-base font-medium leading-normal text-[#40493D]">
            Cette photo ne sera visible que par vous et vos contacts d’urgence.
          </Text>
        </View>

        <View className="mt-auto w-full gap-4">
          <Pressable
            className="h-[4.5rem] w-full flex-row items-center justify-center rounded-full bg-[#00569F] shadow-lg active:opacity-95"
            onPress={() => router.push('/success')}>
            <Text className="text-xl font-bold text-white">Finaliser l’inscription</Text>
            <Ionicons className="ml-3" color="#FFFFFF" name="checkmark-circle" size={24} />
          </Pressable>
          <Pressable
            className="h-[4.5rem] w-full flex-row items-center justify-center rounded-full bg-[#E8E8E8] active:opacity-95"
            onPress={() => router.back()}>
            <Ionicons className="mr-3" color="#1A1C1C" name="arrow-back" size={24} />
            <Text className="text-xl font-semibold text-[#1A1C1C]">Retour</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
