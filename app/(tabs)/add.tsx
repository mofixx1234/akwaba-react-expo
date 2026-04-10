import { router } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddTabScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#F9F9F9] px-6" edges={['top']}>
      <Text className="mb-6 text-center text-lg font-semibold text-[#1A1C1C]">Ajouter un contenu</Text>
      <Pressable className="rounded-full bg-[#00569F] px-8 py-4 active:opacity-90" onPress={() => router.push('/souvenirs')}>
        <Text className="font-bold text-white">Ouvrir Espace Souvenirs</Text>
      </Pressable>
    </SafeAreaView>
  );
}
