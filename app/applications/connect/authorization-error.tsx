// app/applications/connect/authorization-error.tsx
import { Body, BodyBold, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function AuthorizationErrorScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { appId, appName } = params;

  const handleRetry = () => {
    // Reintentar autorización
    router.push({
      pathname: '/applications/connect/authorizing',
      params: { appId, appName }
    } as any);
  };

  const handleSkip = () => {
    // Saltar y volver al inicio
    router.push('/applications/connect' as any);
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
            Autorización fallida
          </H2>
          
          {/* Descripción */}
          <View className="gap-1 px-4">
            <Body className="text-gray-600 text-center leading-6">
              Ocurrió un error al obtener los permisos para importar tus datos de <BodyBold className="text-gray-700">{appName}</BodyBold>.
            </Body>
            <Body className="text-gray-600 text-center leading-6 mt-2">
              Inténtalo de nuevo ahora o más tarde.
            </Body>
          </View>
        </View>

        {/* Botones en la parte inferior */}
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

