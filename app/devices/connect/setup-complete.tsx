// app/(home)/devices/connect/setup-complete.tsx
import { Body, BodyBold, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function SetupCompleteScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { deviceId, deviceName, deviceType } = params;

  const handleContinue = () => {
    // Navegar al dashboard o home
    router.push('/home' as any);
  };

  const handleGoToDevices = () => {
    // Navegar a la lista de dispositivos
    router.push('/devices' as any);
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <Header 
        title=""
        variant="onboarding"
      />

      {/* Contenido */}
      <View className="flex-1 justify-between px-5 pt-8">
        {/* Sección superior con icono y textos */}
        <View className="items-center gap-6">
          {/* Icono de check */}
          <View className="w-16 h-16 items-center justify-center">
            <MaterialCommunityIcons 
              name="check-circle-outline" 
              size={48} 
              color="#374151" // gray-700
            />
          </View>
          
          {/* Título */}
          <H2 className="text-center leading-8 text-gray-700">
            Configuración completada
          </H2>
          
          {/* Descripción */}
          <View className="gap-1 px-4">
            <Body className="text-gray-600 text-center leading-6">
              El proceso de configuración de tu dispositivo{' '}
              <BodyBold className="text-gray-700">{deviceName}</BodyBold> se ha completado exitosamente.
            </Body>
          </View>
        </View>

        {/* Botones en la parte inferior */}
        <View className="pb-8 gap-3">
          <Button
            variant="fill"
            color="primary"
            onPress={handleContinue}
            title="Continuar"
          />
          
          <Button
            variant="outline"
            color="primary"
            onPress={handleGoToDevices}
            title="Ir a mis dispositivos"
          />
        </View>
      </View>
    </View>
  );
}