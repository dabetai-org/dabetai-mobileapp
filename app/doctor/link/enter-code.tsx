// app/doctor/link/enter-code.tsx
import { Body, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { InputField } from '@/components/core/inputs/InputField';
import { Header } from '@/components/core/navigation/Header';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function EnterDoctorCodeScreen() {
  const router = useRouter();
  const [code, setCode] = useState('');

  const handleScanQR = () => {
    // Aquí se implementaría el escáner de QR
    console.log('Escanear código QR');
  };

  const handleContinue = () => {
    if (code.length >= 6) {
      router.push({
        pathname: '/doctor/link/confirm',
        params: { code }
      } as any);
    }
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
        <View className="px-6 pt-8 pb-4 gap-6">
          {/* Título */}
          <H2 className="text-center leading-8 text-gray-700">
            Introduce el código de tu médico
          </H2>

          {/* Texto introductorio */}
          <Body className="text-gray-600 text-center leading-6">
            Puedes escanear el código QR que te proporcionó tu médico o introducirlo manualmente.
          </Body>

          {/* Placeholder para QR scanner */}
          <View className="bg-gray-200 rounded-2xl h-48 items-center justify-center">
            <Body className="text-gray-500">Área de escaneo QR</Body>
          </View>

          {/* Botón escanear QR */}
          <Button
            variant="outline"
            color="secondary"
            onPress={handleScanQR}
            title="Escanear código QR"
          />

          {/* Separador */}
          <View className="flex-row items-center gap-3">
            <View className="flex-1 h-px bg-gray-300" />
            <View className="w-2 h-2 rounded-full border border-gray-300" />
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Input de código manual */}
          <InputField
            label="Código"
            placeholder="12345678"
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
            maxLength={8}
          />
        </View>
      </ScrollView>

      {/* Botón de acción */}
      <View className="px-6 pb-8 bg-gray-50">
        <Button
          variant="fill"
          color="primary"
          onPress={handleContinue}
          title="Vincular cuenta"
          disabled={code.length < 6}
        />
      </View>
    </View>
  );
}

