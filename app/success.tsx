import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AkwabaColors } from '@/constants/akwaba-theme';

export default function SuccessScreen() {
  return (
    <SafeAreaView className="flex-1 justify-between bg-gray-50 px-5 py-2.5" edges={['top', 'bottom']}>
      <View className="flex-row items-center gap-2">
        <Pressable className="p-2" onPress={() => router.back()}>
          <Ionicons color={AkwabaColors.primary} name="arrow-back" size={24} />
        </Pressable>
        <Text className="text-3xl font-extrabold text-akwaba-primary">Succes</Text>
      </View>

      <View className="items-center gap-3.5 px-2">
        <View className="mb-3 h-[170px] w-[170px] items-center justify-center rounded-full bg-green-100">
          <Ionicons color={AkwabaColors.success} name="checkmark-circle" size={96} />
        </View>

        <Text className="text-center text-4xl font-extrabold text-akwaba-text">Felicitations !</Text>
        <Text className="text-center text-3xl font-bold text-akwaba-success">
          Votre compte Akwaba Senior a ete cree avec succes.
        </Text>
        <Text className="text-center text-lg text-akwaba-muted">
          Vous pouvez maintenant acceder a tous vos avantages et services.
        </Text>
      </View>

      <Pressable
        className="mb-3 h-16 flex-row items-center justify-center gap-1.5 rounded-full bg-akwaba-primary"
        onPress={() => router.replace('/(tabs)')}>
        <Text className="text-2xl font-extrabold text-white">Aller a l'accueil</Text>
        <Ionicons color="#FFFFFF" name="chevron-forward" size={24} />
      </Pressable>
    </SafeAreaView>
  );
}
