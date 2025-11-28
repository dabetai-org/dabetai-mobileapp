// app/doctor/link/linking-error.tsx
import { Body, BodyBold, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

// Mock: datos del médico
const doctorName = 'Dr. Fermín Cárdenas';

export default function LinkingErrorScreen() {
  const router = useRouter();

  const handleRetry = () => {
    router.push('/doctor/link/linking' as any);
  };

  const handleSkip = () => {
    router.push('/doctor/link' as any);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <Header 
        title=""
        variant="onboarding"
      />

      <View className="flex-1 justify-between px-5 pt-8">
        <View className="items-center gap-6">
          {/* Icono de error */}
          <View className="w-16 h-16 items-center justify-center">
            <MaterialCommunityIcons 
              name="close-circle-outline" 
              size={48} 
              color="#374151" // gray-700
            />
          </View>
          
          {/* Título */}
          <H2 className="text-center leading-8 text-gray-700">
            Vinculación fallida
          </H2>
          
          {/* Descripción */}
          <View className="gap-1 px-4">
            <Body className="text-gray-600 text-center leading-6">
              Ocurrió un error al vincular tu cuenta con el <BodyBold className="text-gray-700">{doctorName}</BodyBold>.
            </Body>
            <Body className="text-gray-600 text-center leading-6 mt-2">
              Inténtalo de nuevo ahora o más tarde.
            </Body>
          </View>
        </View>

        {/* Botones */}
        <View className="pb-8 gap-3">
          <Button
            variant="fill"
            color="primary"
            onPress={handleRetry}
            title="Reintentar"
          />
          
          <Button
            variant="outline"
            color="danger"
            onPress={handleSkip}
            title="Saltar por ahora"
          />
        </View>
      </View>
    </View>
  );
}

