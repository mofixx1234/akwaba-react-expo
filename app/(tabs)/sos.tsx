import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SosTabScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="h-20 flex-row items-center justify-between bg-[#F9F9F9] px-6 pt-4">
        <Pressable className="p-2 active:opacity-70" onPress={() => router.back()}>
          <Ionicons color="#00569F" name="arrow-back" size={24} />
        </Pressable>
        <Text className="text-xl font-black tracking-tight text-[#00569F]">Akwaba</Text>
        <View className="w-10" />
      </View>

      <View className="flex-1 flex-col items-center px-6 pb-32 pt-4">
        <View className="max-w-sm items-center">
          <Text className="mb-3 text-5xl font-black tracking-tight text-[#1A1C1C]">SOS</Text>
          <Text className="text-center text-xl font-medium leading-snug text-[#40493D]">Voulez-vous appeler les secours ?</Text>
        </View>

        <View className="relative my-12 items-center justify-center">
          <View className="absolute h-44 w-44 rounded-full bg-[#E63946]/10" />
          <Pressable
            className="z-10 h-[140px] w-[140px] items-center justify-center rounded-full bg-[#E63946] active:opacity-90"
            style={{ shadowColor: '#E63946', shadowOpacity: 0.45, shadowRadius: 20, shadowOffset: { width: 0, height: 15 } }}>
            <Ionicons color="#FFFFFF" name="warning" size={48} />
            <Text className="text-2xl font-black uppercase tracking-wider text-white">SOS</Text>
          </Pressable>
        </View>

        <View className="w-full max-w-sm gap-4">
          <Pressable className="h-20 w-full flex-row items-center justify-center gap-4 rounded-2xl bg-[#9DF898] shadow-sm active:opacity-95">
            <Ionicons color="#1A7425" name="call" size={28} />
            <Text className="text-lg font-bold text-[#1A7425]">{`Appeler contact d'urgence`}</Text>
          </Pressable>
          <View className="flex-row items-center gap-4 rounded-2xl border border-[#BFCABA]/30 bg-[#F3F3F3] p-5">
            <View className="rounded-full bg-[#006ECA]/10 p-3">
              <Ionicons color="#006ECA" name="location" size={24} />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-medium text-[#40493D]">Votre position actuelle :</Text>
              <Text className="text-lg font-bold text-[#1A1C1C]">Abidjan, Cocody</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
