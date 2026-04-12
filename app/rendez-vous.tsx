import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { Calendar, LocaleConfig, type DateData } from 'react-native-calendars';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

LocaleConfig.locales.fr = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

const DR_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCA1Dq7PNiFpDfzKnR_707MaASNofXYIgo-1DeWgmkY99noRlekcy2r6yniwwswmw7HEdjNifFEzVfBaX5v2DmW_0RLqUfyXxBEvv-oeUBdjg9r3eKq3olffcb4sJv_zix-jNfBNb1DjNkq3pC02I_ZSAR-Ac-s9pICW1R4ICvZzxgU2E_-qN5LncaHrGegPN_qKT3TPuc5oULeySUNM32xuWrJ8UPny8B-2SqqJ3z9MYIMkNypT_u81hss8VqkbM28GfvfB0Z7ZVY';

const TIMES: { t: string; icon: keyof typeof Ionicons.glyphMap; recommended?: boolean }[] = [
  { t: '09:30', icon: 'sunny-outline' },
  { t: '14:00', icon: 'sunny', recommended: true },
  { t: '16:30', icon: 'partly-sunny-outline' },
  { t: '18:00', icon: 'moon-outline' },
];

const BLUE = '#00569F';
const BLUE_SOFT = '#EEF4FB';

function toIsoLocal(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function addMonths(d: Date, n: number): Date {
  const x = new Date(d);
  x.setMonth(x.getMonth() + n);
  return x;
}

function formatDateLabelFr(iso: string): string {
  const [y, m, day] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, day);
  const s = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const calendarTheme = {
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  textSectionTitleColor: '#64748B',
  textSectionTitleDisabledColor: '#CBD5E1',
  selectedDayBackgroundColor: BLUE,
  selectedDayTextColor: '#ffffff',
  todayTextColor: BLUE,
  todayBackgroundColor: BLUE_SOFT,
  dayTextColor: '#1A1C1C',
  textDisabledColor: '#CBD5E1',
  dotColor: BLUE,
  selectedDotColor: '#ffffff',
  arrowColor: BLUE,
  monthTextColor: '#1A1C1C',
  indicatorColor: BLUE,
  textDayFontFamily: undefined,
  textMonthFontFamily: undefined,
  textDayHeaderFontFamily: undefined,
  textDayFontWeight: '600' as const,
  textMonthFontWeight: '700' as const,
  textDayHeaderFontWeight: '600' as const,
  textDayFontSize: 16,
  textMonthFontSize: 18,
  textDayHeaderFontSize: 12,
};

export default function RendezVousScreen() {
  const insets = useSafeAreaInsets();
  const { minIso, maxIso, defaultSelected } = useMemo(() => {
    const now = new Date();
    const min = toIsoLocal(now);
    const max = toIsoLocal(addMonths(now, 4));
    return { minIso: min, maxIso: max, defaultSelected: min };
  }, []);

  const [selectedDay, setSelectedDay] = useState(defaultSelected);
  const [selectedTime, setSelectedTime] = useState('14:00');

  const markedDates = useMemo(
    () => ({
      [selectedDay]: {
        selected: true,
        selectedColor: BLUE,
        selectedTextColor: '#ffffff',
      },
    }),
    [selectedDay],
  );

  const dateLabel = useMemo(() => formatDateLabelFr(selectedDay), [selectedDay]);

  const goConfirm = () => {
    router.push({
      pathname: '/confirmation-rdv',
      params: {
        dateLabel,
        time: selectedTime,
      },
    });
  };

  const onDayPress = (day: DateData) => {
    setSelectedDay(day.dateString);
  };

  const bottomInset = Math.max(insets.bottom, 20);
  const scrollBottomPad = 120 + bottomInset;

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" edges={['top']}>
      <View className="z-40 flex h-16 w-full flex-row items-center justify-between border-b border-stone-200/80 bg-white/95 px-4">
        <Pressable
          className="h-10 w-10 items-center justify-center rounded-full active:bg-[#EEF4FB]"
          onPress={() => router.back()}>
          <Ionicons color={BLUE} name="arrow-back" size={22} />
        </Pressable>
        <Text className="absolute left-0 right-0 text-center text-lg font-bold text-[#00569F]" pointerEvents="none" numberOfLines={1}>
          Prendre rendez-vous
        </Text>
        <View className="w-10" />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: scrollBottomPad }}
        showsVerticalScrollIndicator={false}>
        <View className="mx-auto w-full max-w-2xl gap-8 px-4 pt-6">
          <View className="flex-row gap-2 px-1">
            <View className="h-1.5 flex-1 rounded-full bg-[#00569F]" />
            <View className="h-1.5 flex-1 rounded-full bg-[#00569F]" />
            <View className="h-1.5 flex-1 rounded-full bg-[#E5E7EB]" />
          </View>

          <View className="gap-3">
            <Text className="px-1 text-sm font-bold uppercase tracking-wider text-[#40493D]">Praticien</Text>
            <View className="flex-row items-center gap-4 overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-4 shadow-sm">
              <View className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-[#E8ECF4]">
                <Image className="h-full w-full" resizeMode="cover" source={{ uri: DR_IMG }} />
              </View>
              <View className="min-w-0 flex-1">
                <Text className="text-lg font-bold text-[#1A1C1C]">Dr Sylvie Moreau</Text>
                <Text className="mt-0.5 text-sm text-[#40493D]">Kinésithérapeute</Text>
                <View className="mt-2 flex-row items-center gap-1.5">
                  <Ionicons color="#106D20" name="shield-checkmark" size={18} />
                  <Text className="text-xs font-bold text-[#106D20]">Partenaire vérifié Akwaba</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="gap-3">
            <View className="px-1">
              <Text className="text-xl font-bold text-[#1A1C1C]">Date</Text>
              <Text className="mt-0.5 text-sm text-[#64748B]">Choisissez un jour dans le calendrier</Text>
              <Text className="mt-2 text-sm font-semibold text-[#00569F]">{dateLabel}</Text>
            </View>
            <View className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-sm">
              <Calendar
                current={selectedDay}
                minDate={minIso}
                maxDate={maxIso}
                onDayPress={onDayPress}
                markedDates={markedDates}
                firstDay={1}
                enableSwipeMonths
                hideExtraDays
                theme={calendarTheme}
              />
            </View>
          </View>

          <View className="gap-4">
            <Text className="px-1 text-xl font-bold text-[#1A1C1C]">Heure</Text>
            <View className="flex-row flex-wrap gap-3">
              {TIMES.map((slot) => {
                const selected = selectedTime === slot.t;
                return (
                  <Pressable
                    key={slot.t}
                    className={`w-[47%] flex-row items-center justify-center gap-2 rounded-full border-2 py-4 ${
                      selected
                        ? slot.recommended
                          ? 'border-[#106D20] bg-[#DCFCE7]'
                          : 'border-[#00569F] bg-[#EEF4FB]'
                        : 'border-[#E5E7EB] bg-white'
                    }`}
                    onPress={() => setSelectedTime(slot.t)}>
                    <Ionicons
                      color={selected ? (slot.recommended ? '#166534' : '#00569F') : '#64748B'}
                      name={slot.icon}
                      size={22}
                    />
                    <Text
                      className={`text-base font-bold ${
                        selected ? (slot.recommended ? 'text-[#166534]' : 'text-[#00569F]') : 'text-[#1A1C1C]'
                      }`}>
                      {slot.t}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <Text className="px-1 text-xs text-[#64748B]">Le créneau en vert est souvent le plus disponible.</Text>
          </View>

          <View className="flex-row gap-3 rounded-3xl border border-[#00569F]/20 bg-[#EEF4FB] p-4">
            <Ionicons color={BLUE} name="information-circle-outline" size={24} />
            <Text className="min-w-0 flex-1 text-sm leading-relaxed text-[#1A1C1C]">
              <Text className="font-bold text-[#00569F]">Créneaux partenaires. </Text>
              Ces horaires sont proposés pour les membres Akwaba. Vous pourrez modifier ou annuler gratuitement jusqu’à 24 h avant.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        className="border-t border-stone-200/80 bg-white/95 px-4 pt-3"
        style={{ paddingBottom: bottomInset }}>
        <Pressable
          className="mx-auto w-full max-w-2xl flex-row items-center justify-center gap-2 rounded-full bg-[#00569F] py-4 active:opacity-95"
          onPress={goConfirm}>
          <Text className="text-base font-bold text-white">Confirmer le rendez-vous</Text>
          <Ionicons color="#FFFFFF" name="arrow-forward" size={22} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
