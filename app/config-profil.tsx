import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InfoCard, PrimaryButton, SecondaryButton } from '@/components/auth/auth-ui';
import { AkwabaColors } from '@/constants/akwaba-theme';

export default function ConfigProfilScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top', 'bottom']}>
      <View className="flex-1 px-5 py-3">
        <View className="mb-5 flex-row justify-center gap-1.5">
          <View className="h-1.5 w-16 rounded-full bg-indigo-200 opacity-40" />
          <View className="h-1.5 w-16 rounded-full bg-akwaba-primary" />
        </View>

        <Text className="text-center text-4xl font-extrabold text-akwaba-text">Votre Photo de Profil</Text>
        <Text className="mt-2 text-center text-lg text-akwaba-muted">
          Etape 2 sur 2 : ajoutez une photo pour que l'on puisse vous reconnaitre.
        </Text>

        <Pressable className="mt-7 items-center">
          <View className="h-60 w-60 items-center justify-center rounded-full bg-indigo-50">
            <Ionicons color={AkwabaColors.primary} name="camera-outline" size={72} />
            <Text className="mt-1 text-xl font-bold text-akwaba-primary">Ajouter</Text>
          </View>
          <View className="absolute bottom-5 right-16 h-14 w-14 items-center justify-center rounded-full bg-akwaba-primary">
            <Ionicons color="#FFFFFF" name="camera" size={24} />
          </View>
        </Pressable>

        <InfoCard
          description="Cette photo ne sera visible que par vous et vos contacts d'urgence."
          icon="shield-checkmark-outline"
          title="Confidentialite"
        />

        <View className="mt-auto gap-3 pb-2">
          <PrimaryButton icon="checkmark-circle-outline" onPress={() => router.push('/success')} title="Finaliser l'inscription" />
          <SecondaryButton icon="arrow-back" onPress={() => router.back()} title="Retour" />
        </View>
      </View>
    </SafeAreaView>
  );
}
