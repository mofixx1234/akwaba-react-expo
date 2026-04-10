import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SuccessScreen() {
  return (
    <SafeAreaView className="flex-1 overflow-hidden bg-[#F9F9F9]" edges={['top', 'bottom']}>
      <View className="pointer-events-none absolute -right-[20%] -top-[10%] z-0 h-[50%] w-[80%] rounded-full bg-blue-100/30" />
      <View className="pointer-events-none absolute -bottom-[5%] -left-[10%] z-0 h-[40%] w-[60%] rounded-full bg-[#106D20]/5" />

      <View className="z-10 flex-row items-center justify-between bg-blue-50 px-6 py-4">
        <Pressable className="flex-row items-center gap-4 active:opacity-80" onPress={() => router.back()}>
          <Ionicons color="#00569F" name="arrow-back" size={26} />
          <Text className="text-2xl font-bold text-[#00569F]">Succès</Text>
        </Pressable>
      </View>

      <View className="z-10 mx-auto w-full max-w-md flex-1 flex-col items-center justify-center px-8 pb-12">
        <View className="relative mb-16 items-center">
          <View className="absolute h-40 w-40 scale-150 rounded-full bg-[#106D20]/10" />
          <View className="relative h-32 w-32 items-center justify-center rounded-full bg-[#9DF898] shadow-lg">
            <Ionicons color="#1A7425" name="checkmark-circle" size={64} />
          </View>
        </View>

        <View className="items-center gap-6">
          <Text className="text-center text-[2.25rem] font-extrabold leading-tight tracking-tight text-[#1A1C1C]">
            Félicitations, Papa Koffi !
          </Text>
          <View className="gap-4">
            <Text className="text-center text-2xl font-semibold leading-relaxed text-[#106D20]">
              Votre compte Akwaba Senior a été créé avec succès.
            </Text>
            <Text className="mx-auto max-w-xs text-center text-xl leading-relaxed text-stone-600">
              Vous pouvez maintenant accéder à tous vos avantages et services en toute sérénité.
            </Text>
          </View>
        </View>
      </View>

      <View className="z-10 w-full bg-white/50 px-6 pb-12 pt-4">
        <Pressable
          className="h-[72px] w-full flex-row items-center justify-center gap-3 rounded-full bg-[#00569F] active:opacity-95"
          style={{ shadowColor: '#00569F', shadowOpacity: 0.3, shadowRadius: 12, shadowOffset: { width: 0, height: 12 } }}
          onPress={() => router.replace('/(tabs)')}>
          <Text className="text-2xl font-bold text-white">Aller à l’accueil</Text>
          <Ionicons color="#FFFFFF" name="chevron-forward" size={28} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
