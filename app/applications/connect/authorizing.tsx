// app/applications/connect/authorizing.tsx
import { Body, BodyBold, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function AuthorizingScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { appId, appName } = params;
  const [isAuthorizing, setIsAuthorizing] = useState(false);

  const handleStartAuthorization = () => {
    setIsAuthorizing(true);
    // Simular proceso de autorización
    // En producción, aquí se abriría el navegador o WebView para OAuth
    setTimeout(() => {
      // Simular éxito después de 3 segundos
      router.push({
        pathname: '/applications/connect/authorization-success',
        params: { appId, appName }
      } as any);
    }, 3000);
  };

  const handleCancel = () => {
    router.back();
  };

  // Si está autorizando, mostrar pantalla de carga
  if (isAuthorizing) {
    return (
      <View className="flex-1 bg-gray-50">
        <Header 
          title=""
          variant="onboarding"
        />

        <View className="flex-1 justify-between px-5 pt-8">
          <View className="items-center gap-6">
            {/* Icono de refresh */}
            <View className="w-16 h-16 items-center justify-center">
              <MaterialCommunityIcons 
                name="refresh" 
                size={48} 
                color="#374151" // gray-700
              />
            </View>
            
            {/* Título */}
            <H2 className="text-center leading-8 text-gray-700">
              Iniciando autorización externa
            </H2>
            
            {/* Descripción */}
            <View className="gap-2 px-4">
              <Body className="text-gray-600 text-center leading-6">
                Serás redirigido a la página de <BodyBold className="text-gray-700">{appName}</BodyBold>.
              </Body>
              <Body className="text-gray-600 text-center leading-6">
                Por favor, <BodyBold className="text-gray-700">no cierres la aplicación</BodyBold> mientras se completa el proceso.
              </Body>
            </View>
          </View>

          {/* Botón cancelar */}
          <View className="pb-8">
            <Button
              variant="outline"
              color="danger"
              onPress={handleCancel}
              title="Cancelar"
            />
          </View>
        </View>
      </View>
    );
  }

  // Pantalla de instrucciones antes de autorizar
  return (
    <View className="flex-1 bg-white">
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
            Autoriza a dabetai acceder a tus datos
          </H2>

          {/* Texto introductorio */}
          <Body className="text-gray-600 text-center leading-6 mb-8">
            Para conectar tu cuenta de <BodyBold className="text-gray-700">{appName}</BodyBold>, te redirigiremos a una pantalla de autorización segura.
          </Body>

          {/* Instrucciones numeradas */}
          <View>
            <View className="flex-row gap-4 items-start pb-4 border-b border-gray-300">
              <Body className="text-gray-700 font-bold flex-shrink-0">1.</Body>
              <View className="flex-1">
                <Body className="text-gray-700 leading-6">
                  Asegúrate de tener tus credenciales de <BodyBold className="text-gray-700">{appName}</BodyBold> a mano.
                </Body>
              </View>
            </View>

            <View className="flex-row gap-4 items-start py-4 border-b border-gray-300">
              <Body className="text-gray-700 font-bold flex-shrink-0">2.</Body>
              <View className="flex-1">
                <Body className="text-gray-700 leading-6">
                  Al tocar "<BodyBold className="text-gray-700">Iniciar autorización</BodyBold>", se abrirá una ventana o tu navegador.
                </Body>
              </View>
            </View>

            <View className="flex-row gap-4 items-start py-4 border-b border-gray-300">
              <Body className="text-gray-700 font-bold flex-shrink-0">3.</Body>
              <View className="flex-1">
                <Body className="text-gray-700 leading-6">
                  Inicia sesión en tu cuenta de <BodyBold className="text-gray-700">{appName}</BodyBold> y concede los permisos solicitados por dabetai.
                </Body>
              </View>
            </View>

            <View className="flex-row gap-4 items-start pt-4">
              <Body className="text-gray-700 font-bold flex-shrink-0">4.</Body>
              <View className="flex-1">
                <Body className="text-gray-700 leading-6">
                  Una vez que hayas autorizado, serás redirigido automáticamente de vuelta a dabetai.
                </Body>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Botón de acción */}
      <View className="px-6 pb-8 bg-white">
        <Button
          variant="fill"
          color="primary"
          onPress={handleStartAuthorization}
          title="Iniciar autorización"
        />
      </View>
    </View>
  );
}

