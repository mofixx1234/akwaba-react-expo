import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { Image, Platform, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InputField, PrimaryButton } from '@/components/auth/auth-ui';

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F5FBFB]" edges={['top', 'bottom']}>
      <View className="relative flex-1 overflow-hidden">
        <View
          className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-akwaba-secondary opacity-40"
          style={Platform.OS === 'web' ? ({ filter: 'blur(40px)' } as never) : undefined}
          pointerEvents="none"
        />
        <View
          className="absolute -right-20 top-1/4 h-[250px] w-[250px] rounded-full bg-[#00569F] opacity-25"
          style={Platform.OS === 'web' ? ({ filter: 'blur(40px)' } as never) : undefined}
          pointerEvents="none"
        />
        <View
          className="absolute -bottom-40 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-akwaba-secondary opacity-40"
          style={Platform.OS === 'web' ? ({ filter: 'blur(40px)' } as never) : undefined}
          pointerEvents="none"
        />

        <View className="z-10 mx-auto w-full max-w-md flex-1 px-6 py-12">
          <View className="mb-10 items-center">
            <Text className="mb-1 text-center text-4xl font-black tracking-tighter text-akwaba-primary">
              Akwaba Senior
            </Text>
            <Text className="text-lg font-medium text-[#40493D]">Bienvenue chez vous</Text>
          </View>

          <View
            className="w-full rounded-[28px] border border-white/50 bg-white/70 px-8 py-8"
            style={{ shadowColor: '#00569F', shadowOpacity: 0.08, shadowRadius: 20, shadowOffset: { width: 0, height: 10 } }}>
            <Text className="mb-8 text-center text-2xl font-bold text-akwaba-text">Se connecter</Text>
            <View className="gap-6">
              <InputField
                icon="call-outline"
                keyboardType="phone-pad"
                label="Numéro de téléphone"
                placeholder="01 23 45 67 89"
              />

              <PrimaryButton onPress={() => router.push('/inscription')} title="Se connecter" />

              <View className="pt-1">
                <Link className="text-center text-sm font-bold text-akwaba-secondary" href="/inscription">
                  Créer un compte
                </Link>
              </View>
            </View>
          </View>

          <View className="mt-12 flex-row items-center self-center rounded-full border border-gray-200/30 bg-gray-100/50 p-1.5">
            <View className="flex-row items-center gap-2 rounded-full bg-white px-6 py-2 shadow-sm">
              <Ionicons color="#00569F" name="language-outline" size={16} />
              <Text className="text-sm font-bold text-[#00569F]">Français</Text>
            </View>
            <Text className="px-6 py-2 text-sm font-semibold text-[#40493D]">English</Text>
          </View>

          <View className="mt-auto items-center gap-4 p-8">
            <View className="relative">
              <View className="h-20 w-20 rounded-full bg-akwaba-secondary p-1 shadow-lg">
                <View className="h-full w-full overflow-hidden rounded-full border-2 border-white bg-white">
                  <Image
                    className="h-full w-full"
                    resizeMode="cover"
                    source={{
                      uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2HhIg_jKcKivgXGSvBbu3BuB2rFqser9WaJ0OJfEPn02VqiOXxzMlHr96-AyCR0nX48ymVm671hbgCBddvkrK6r30Dc1VYh9Tp0YtpLAMgxj-UQrMI2137y0fQdA3jJ6HstuLVSq1BQHGng8WVcHK4crQ7ygnJSJaPcvlX6eXbvvaRvynkGZ_sU6zHwqqXGUUlOgFh7V-6LS0Zwveyfpt4KZ-Jn0mAfdjlVmWiIxaegZhQ1AnONJlfATig_xs0JPp5TzempQIK9k',
                    }}
                  />
                </View>
              </View>
              <View className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
            </View>
            <Text className="max-w-[240px] text-center text-sm font-medium leading-6 text-[#40493D]">
              Besoin d’aide ? Nos conseillers Akwaba sont là pour vous.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
