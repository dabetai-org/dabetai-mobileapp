// app/applications/connect/authorization-success.tsx
import { Body, BodyBold, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function AuthorizationSuccessScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { appId, appName } = params;

  const handleSyncNow = () => {
    // Navegar a la pantalla de importación
    router.push({
      pathname: '/applications/connect/importing',
      params: { appId, appName }
    } as any);
  };

  const handleSkip = () => {
    // Saltar importación y completar setup
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
            Autorización exitosa
          </H2>
          
          {/* Descripción */}
          <View className="gap-1 px-4">
            <Body className="text-gray-600 text-center leading-6">
              Hemos obtenido los permisos para importar tus datos de <BodyBold className="text-gray-700">{appName}</BodyBold>.
            </Body>
          </View>
        </View>

        {/* Botones en la parte inferior */}
        <View className="pb-8 gap-3">
          <Button
            variant="fill"
            color="primary"
            onPress={handleSyncNow}
            title="Sincronizar datos"
          />
          
          <Button
            variant="outline"
            color="primary"
            onPress={handleSkip}
            title="Saltar por ahora"
          />
        </View>
      </View>
    </View>
  );
}

