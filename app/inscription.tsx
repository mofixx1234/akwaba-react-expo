import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function FormField({
  label,
  placeholder,
  icon,
  keyboardType,
}: {
  label: string;
  placeholder?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  keyboardType?: 'default' | 'phone-pad' | 'numeric';
}) {
  return (
    <View className="gap-3">
      <Text className="px-2 text-lg font-bold text-[#1A1C1C]">{label}</Text>
      <View className="relative justify-center">
        {icon ? <Ionicons className="absolute left-5 z-10" color="#78716C" name={icon} size={22} /> : null}
        <TextInput
          className="h-16 w-full rounded-xl bg-[#E8E8E8] px-6 text-lg text-[#1A1C1C]"
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          style={icon ? { paddingLeft: 56 } : undefined}
        />
      </View>
    </View>
  );
}

export default function InscriptionScreen() {
  const { width } = useWindowDimensions();
  const isWide = width >= 768;
  const isSmall = width < 390;

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top', 'bottom']}>
      <View className={isSmall ? 'h-16 flex-row items-center justify-between bg-stone-50 px-4 pt-1' : 'h-20 flex-row items-center justify-between bg-stone-50 px-6 pt-3'}>
        <Pressable className="active:opacity-70" onPress={() => router.back()}>
          <Ionicons color="#1E3A8A" name="arrow-back" size={isSmall ? 22 : 26} />
        </Pressable>
        <Text className={isSmall ? 'text-xl font-black tracking-tight text-blue-900' : 'text-2xl font-black tracking-tight text-blue-900'}>
          Akwaba
        </Text>
        <View className="w-10" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 180 }}
        showsVerticalScrollIndicator={false}>
        <View className={isSmall ? 'mx-auto w-full max-w-xl px-4 pb-24 pt-4' : 'mx-auto w-full max-w-xl px-5 pb-28 pt-6'}>
          <View className="mb-9">
            <Text className={isSmall ? 'mb-2 text-[34px] font-bold leading-[38px] text-[#1A1C1C]' : 'mb-3 text-[42px] font-bold leading-[46px] text-[#1A1C1C]'}>
              Créer votre profil
            </Text>
            <Text className={isSmall ? 'text-base font-medium text-[#40493D]' : 'text-lg font-medium text-[#40493D]'}>
              Nous sommes ravis de vous accueillir. Commençons par quelques informations.
            </Text>
          </View>

          <View className="gap-7">
            <View className={isWide ? 'flex-row gap-6' : 'gap-6'}>
              <View className="flex-1">
                <FormField label="Nom" placeholder="Ex: Dupont" />
              </View>
              <View className="flex-1">
                <FormField label="Prénom" placeholder="Ex: Jean" />
              </View>
            </View>

            <FormField icon="call-outline" keyboardType="phone-pad" label="Téléphone" placeholder="01 23 45 67 89" />
            <FormField icon="location-outline" label="Ville" placeholder="Ex: Abidjan" />
            <FormField icon="calendar-outline" keyboardType="numeric" label="Date de naissance" placeholder="JJ/MM/AAAA" />

            <View className="pt-2">
              <Pressable className={isSmall ? 'h-16 flex-row items-center justify-between rounded-xl bg-[#9DF898] px-4 active:opacity-90' : 'h-20 flex-row items-center justify-between rounded-xl bg-[#9DF898] px-6 active:opacity-90'}>
                <View className="flex-row items-center gap-4">
                  <Ionicons color="#1A7425" name="person-add-outline" size={isSmall ? 22 : 26} />
                  <Text className={isSmall ? 'text-base font-bold text-[#1A7425]' : 'text-lg font-bold text-[#1A7425]'}>
                    Ajouter contact d’urgence
                  </Text>
                </View>
                <Ionicons color="#1A7425" name="add-circle" size={isSmall ? 22 : 26} />
              </Pressable>
              <Text className="mt-3 px-2 text-sm font-medium text-stone-500">
                Recommandé pour votre sécurité en cas de besoin SOS.
              </Text>
            </View>
          </View>

            <View className={isWide ? 'mb-20 mt-12 flex-row gap-5' : 'mb-20 mt-12 gap-5'}>
              <View className="relative h-56 flex-1 overflow-hidden rounded-xl bg-[#F3F3F3] p-6">
                <View className="z-10">
                  <Text className="mb-2 text-xl font-bold text-[#1A1C1C]">Besoin d’aide ?</Text>
                  <Text className="font-medium text-[#40493D]">
                    Un conseiller Akwaba peut vous appeler pour finir l’inscription.
                  </Text>
                </View>
                <Pressable className="z-10 mt-auto flex-row items-center gap-2 self-start">
                  <Text className="text-base font-bold text-[#00569F]">Être rappelé</Text>
                  <Ionicons color="#00569F" name="arrow-forward" size={18} />
                </Pressable>
                <View className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#D4E3FF] opacity-20" />
              </View>

              <View className="h-56 flex-1 justify-between rounded-xl border border-[#ABADAF]/20 bg-white p-6">
                <View className="mb-3 h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <Ionicons color="#00569F" name="shield-checkmark" size={30} />
                </View>
                <View>
                  <Text className="mb-2 text-xl font-bold text-[#1A1C1C]">Sécurité totale</Text>
                  <Text className="font-medium text-[#40493D]">
                    Vos données sont protégées et ne sont jamais partagées.
                  </Text>
                </View>
              </View>
            </View>
          </View>
      </ScrollView>

      <View className={isSmall ? 'absolute bottom-0 left-0 right-0 rounded-t-[36px] bg-stone-50 px-4 pb-5 pt-3 shadow-2xl' : 'absolute bottom-0 left-0 right-0 rounded-t-[48px] bg-stone-50 px-5 pb-8 pt-5 shadow-2xl'}>
        <View className="mx-auto w-full max-w-xl gap-3">
          <Pressable
            className={isSmall ? 'h-14 w-full flex-row items-center justify-center gap-2 rounded-full bg-[#00569F] active:opacity-90' : 'h-16 w-full flex-row items-center justify-center gap-3 rounded-full bg-[#00569F] active:opacity-90'}
            onPress={() => router.push('/config-profil')}>
            <Text className={isSmall ? 'text-lg font-bold text-white' : 'text-xl font-bold text-white'}>Continuer</Text>
            <Ionicons color="#FFFFFF" name="arrow-forward" size={isSmall ? 18 : 20} />
          </Pressable>
          <Text className={isSmall ? 'text-center text-sm font-medium text-stone-500' : 'text-center text-base font-medium text-stone-500'}>
            Étape 1 sur 3
          </Text>
        </View>
      </View>

      <View className={isSmall ? 'absolute bottom-24 right-4 z-50' : 'absolute bottom-28 right-5 z-50'}>
        <Pressable className={isSmall ? 'h-14 w-14 items-center justify-center rounded-full bg-[#993300] shadow-2xl active:opacity-90' : 'h-16 w-16 items-center justify-center rounded-full bg-[#993300] shadow-2xl active:opacity-90'}>
          <Ionicons color="#FFFFFF" name="warning" size={isSmall ? 24 : 30} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
