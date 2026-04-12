import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

/** Bleu aligné sur l’identité Akwaba (#00569F) — lisible pour un public senior */
const BLUE_DEEP = '#1E3A8A';
const BLUE_BRAND = '#00569F';
const BLUE_LIGHT = '#BAE6FD';

function PillInput({
  icon,
  placeholder,
  keyboardType = 'default',
  autoCapitalize = 'none',
}: {
  icon: keyof typeof Ionicons.glyphMap;
  placeholder: string;
  keyboardType?: 'default' | 'email-address';
  autoCapitalize?: 'none' | 'sentences';
}) {
  return (
    <View className="relative justify-center">
      <Ionicons
        className="absolute left-5 z-10"
        color="#57534E"
        name={icon}
        size={22}
      />
      <TextInput
        autoCapitalize={autoCapitalize}
        className="min-h-[56px] w-full rounded-full bg-[#F2F2F2] px-5 pl-14 text-lg text-stone-800"
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#78716C"
      />
    </View>
  );
}

function GradientLoginButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      className="mt-1 overflow-hidden rounded-full active:opacity-90"
      onPress={onPress}
      style={{
        shadowColor: BLUE_DEEP,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.35,
        shadowRadius: 12,
        elevation: 8,
      }}>
      <LinearGradient
        colors={[BLUE_DEEP, BLUE_BRAND, '#1D4ED8']}
        end={{ x: 1, y: 0.5 }}
        start={{ x: 0, y: 0.5 }}
        style={{
          paddingVertical: 18,
          paddingHorizontal: 24,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text className="text-xl font-bold text-white">Se connecter</Text>
      </LinearGradient>
    </Pressable>
  );
}

function OutlineSignUpButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      className="mt-4 min-h-[56px] flex-row items-center justify-center gap-2 rounded-full border-2 bg-white active:bg-blue-50"
      onPress={onPress}
      style={{ borderColor: BLUE_BRAND }}>
      <Ionicons color={BLUE_BRAND} name="person-add-outline" size={24} />
      <Text className="text-xl font-bold" style={{ color: BLUE_BRAND }}>
        S&apos;inscrire
      </Text>
    </Pressable>
  );
}

function SocialPill({
  label,
  variant,
  onPress,
}: {
  label: string;
  variant: 'apple' | 'google';
  onPress?: () => void;
}) {
  const isApple = variant === 'apple';
  return (
    <Pressable
      className={`min-h-[52px] flex-1 flex-row items-center justify-center gap-2 rounded-full active:opacity-90 ${
        isApple ? 'bg-neutral-900' : 'border border-stone-200 bg-white'
      }`}
      onPress={onPress}>
      <Ionicons
        color={isApple ? '#FFFFFF' : '#4285F4'}
        name={isApple ? 'logo-apple' : 'logo-google'}
        size={22}
      />
      <Text
        className={`text-base font-semibold ${isApple ? 'text-white' : 'text-stone-800'}`}>
        {label}
      </Text>
    </Pressable>
  );
}

function TopDecorations() {
  return (
    <View className="absolute inset-0 overflow-hidden" pointerEvents="none">
      <View
        className="absolute -right-8 top-12 h-px w-40 bg-white/25"
        style={{ transform: [{ rotate: '12deg' }] }}
      />
      <View
        className="absolute left-4 top-24 h-px w-32 bg-white/20"
        style={{ transform: [{ rotate: '-8deg' }] }}
      />
      <View className="absolute left-1/4 top-1/3 h-20 w-px bg-white/15" />
      <View
        className="absolute -right-4 bottom-16 h-px w-48 bg-white/20"
        style={{ transform: [{ rotate: '-6deg' }] }}
      />
      <Ionicons
        className="absolute right-8 top-[18%]"
        color="rgba(255,255,255,0.12)"
        name="heart-outline"
        size={120}
      />
      <Ionicons
        className="absolute -left-6 bottom-10"
        color="rgba(255,255,255,0.1)"
        name="shield-checkmark-outline"
        size={96}
      />
      <View className="absolute right-1/4 top-1/2 h-16 w-16 rounded-full border border-white/10" />
    </View>
  );
}

export default function LoginScreen() {
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [rememberMe, setRememberMe] = useState(false);

  const topSectionHeight = Math.round(height * 0.45);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['bottom']}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
        <View className="flex-1">
          <LinearGradient
            colors={[BLUE_DEEP, BLUE_BRAND, BLUE_LIGHT]}
            end={{ x: 0.2, y: 1 }}
            locations={[0, 0.5, 1]}
            start={{ x: 0, y: 0 }}
            style={{
              height: topSectionHeight,
              paddingTop: insets.top + 12,
              paddingHorizontal: 24,
              paddingBottom: 28,
            }}>
            <TopDecorations />
            <View className="max-w-md flex-1 justify-center">
              <Text className="mb-2 text-left text-sm font-semibold uppercase tracking-wide text-white/90">
                Akwaba Senior
              </Text>
              <Text className="text-left text-3xl font-bold leading-tight text-white">
                Votre espace simple et rassurant pour le quotidien.
              </Text>
              <Text className="mt-4 text-left text-lg leading-6 text-white/90">
                Connectez-vous pour retrouver vos services, vos proches et vos rendez-vous.
              </Text>
            </View>
          </LinearGradient>

          <View
            className="flex-1 rounded-t-[30px] bg-white px-6 pt-8"
            style={{
              marginTop: -20,
              shadowColor: BLUE_DEEP,
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.14,
              shadowRadius: 16,
              elevation: 12,
            }}>
            <ScrollView
              className="flex-1"
              contentContainerStyle={{ paddingBottom: 32 }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}>
              <Text className="mb-2 text-center text-3xl font-bold text-stone-900">Connexion</Text>
              <Text className="mb-6 text-center text-lg text-stone-600">
                Pas encore de compte ?{' '}
                <Text
                  className="font-bold"
                  onPress={() => router.push('/inscription')}
                  style={{ color: BLUE_BRAND }}>
                  S&apos;inscrire
                </Text>
              </Text>

              <View className="gap-5">
                <PillInput icon="person-outline" placeholder="Nom ou e-mail" />
                <PillInput
                  autoCapitalize="none"
                  icon="mail-outline"
                  keyboardType="email-address"
                  placeholder="Adresse e-mail"
                />
              </View>

              <View className="mt-6 flex-row items-center justify-between">
                <Pressable
                  className="max-w-[58%] flex-row items-center gap-3 active:opacity-70"
                  onPress={() => setRememberMe((v) => !v)}
                  hitSlop={8}>
                  <View
                    className={`h-7 w-7 items-center justify-center rounded border-2 ${
                      rememberMe ? 'border-[#00569F] bg-[#00569F]' : 'border-stone-300 bg-white'
                    }`}>
                    {rememberMe ? (
                      <Ionicons color="#FFFFFF" name="checkmark" size={18} />
                    ) : null}
                  </View>
                  <Text className="flex-1 text-lg text-stone-700">Se souvenir de moi</Text>
                </Pressable>
                <Pressable className="shrink-0" hitSlop={8}>
                  <Text className="text-lg font-semibold" style={{ color: BLUE_BRAND }}>
                    Mot de passe oublié ?
                  </Text>
                </Pressable>
              </View>

              <View className="mt-8">
                <GradientLoginButton onPress={() => router.replace('/(tabs)')} />
                <OutlineSignUpButton onPress={() => router.push('/inscription')} />
              </View>

              <View className="my-8 flex-row items-center gap-4">
                <View className="h-px flex-1 bg-stone-200" />
                <Text className="text-base font-medium text-stone-400">Ou continuer avec</Text>
                <View className="h-px flex-1 bg-stone-200" />
              </View>

              <View className="flex-row gap-4">
                <SocialPill label="Apple" variant="apple" />
                <SocialPill label="Google" variant="google" />
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
