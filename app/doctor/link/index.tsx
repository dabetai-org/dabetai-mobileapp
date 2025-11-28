// app/doctor/link/index.tsx
import { Body, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { Header } from '@/components/core/navigation/Header';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function AskDoctorCodeScreen() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/doctor/link/enter-code' as any);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <Header 
        title=""
        variant="onboarding"
      />

      <ScrollView 
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 pt-8 pb-4">
          {/* Título */}
          <H2 className="text-center leading-8 text-gray-700 mb-6">
            Pide a tu médico el código de dabetai
          </H2>

          {/* Texto introductorio */}
          <Body className="text-gray-600 text-center leading-6">
            Para vincular tu cuenta, tu médico te proporcionará un código único desde su aplicación web de dabetai.
          </Body>
        </View>

        {/* Placeholder para imagen/video */}
        <View className="px-6 pt-4">
          <View className="bg-gray-200 rounded-2xl h-48 items-center justify-center">
            <Body className="text-gray-500">Imagen/Video aquí</Body>
          </View>
        </View>
      </ScrollView>

      {/* Botón de acción */}
      <View className="px-6 pb-8 bg-gray-50">
        <Button
          variant="fill"
          color="primary"
          onPress={handleContinue}
          title="Ya tengo el código"
        />
      </View>
    </View>
  );
}

