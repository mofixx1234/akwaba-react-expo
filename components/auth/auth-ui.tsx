import { Ionicons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { Pressable, Text, TextInput, TextInputProps, View } from 'react-native';

type InputFieldProps = TextInputProps & {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
};

export function InputField({ label, icon, style, ...props }: InputFieldProps) {
  return (
    <View className="gap-2">
      <Text className="ml-1 text-sm font-semibold text-akwaba-muted">{label}</Text>
      <View className="relative justify-center">
        {icon ? <Ionicons className="absolute left-4 z-10" color="#26C6DA" name={icon} size={22} /> : null}
        <TextInput
          className="h-14 w-full rounded-full border border-gray-100 bg-white px-4 text-lg text-akwaba-text shadow-sm"
          placeholderTextColor="#9CA3AF"
          style={[icon ? { paddingLeft: 44 } : null, style]}
          {...props}
        />
      </View>
    </View>
  );
}

type PrimaryButtonProps = {
  title: string;
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
};

export function PrimaryButton({ title, onPress, icon }: PrimaryButtonProps) {
  return (
    <Pressable
      className="mt-4 h-14 flex-row items-center justify-center gap-2 rounded-full bg-[#00569F] shadow-lg active:opacity-90"
      onPress={onPress}>
      <Text className="text-lg font-bold text-white">{title}</Text>
      {icon ? <Ionicons color="#FFFFFF" name={icon} size={20} /> : null}
    </Pressable>
  );
}

type SecondaryButtonProps = {
  title: string;
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
};

export function SecondaryButton({ title, onPress, icon }: SecondaryButtonProps) {
  return (
    <Pressable
      className="h-14 flex-row items-center justify-center gap-2 rounded-full bg-akwaba-surface-highest active:opacity-90"
      onPress={onPress}>
      {icon ? <Ionicons color="#2C2F31" name={icon} size={20} /> : null}
      <Text className="text-base font-bold text-akwaba-muted">{title}</Text>
    </Pressable>
  );
}

type InfoCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  action?: ReactNode;
};

export function InfoCard({ icon, title, description, action }: InfoCardProps) {
  return (
    <View className="flex-row items-start gap-3 rounded-2xl bg-akwaba-surface-low p-3.5">
      <Ionicons color="#006479" name={icon} size={22} />
      <View className="flex-1 gap-1">
        <Text className="text-base font-bold text-akwaba-text">{title}</Text>
        <Text className="text-sm text-akwaba-muted">{description}</Text>
        {action}
      </View>
    </View>
  );
}
