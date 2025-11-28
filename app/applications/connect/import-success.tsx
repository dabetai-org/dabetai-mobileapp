// app/applications/connect/import-success.tsx
import { Body, BodyBold, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function ImportSuccessScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { appId, appName } = params;

  const handleContinue = () => {
    // Navegar a setup-complete
    router.push({
      pathname: '/applications/setup-complete',
      params: { appId, appName }
    } as any);
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
          {/* Icono de check-circle-outline gris oscuro */}
          <View className="w-20 h-20 items-center justify-center">
            <MaterialCommunityIcons 
              name="check-circle-outline" 
              size={64} 
              color="#374151" // gray-700 - gris oscuro
            />
          </View>
          
          {/* Título */}
          <H2 className="text-center leading-8 text-gray-700">
            Importación exitosa
          </H2>
          
          {/* Descripción */}
          <View className="gap-1 px-4">
            <Body className="text-gray-600 text-center leading-6">
              Todos tus datos de <BodyBold className="text-gray-700">{appName}</BodyBold> han sido importados exitosamente a <BodyBold className="text-gray-700">dabetai</BodyBold>.
            </Body>
          </View>
        </View>

        {/* Botón continuar en la parte inferior */}
        <View className="pb-8">
          <Button
            variant="fill"
            color="primary"
            onPress={handleContinue}
            title="Continuar"
          />
        </View>
      </View>
    </View>
  );
}

