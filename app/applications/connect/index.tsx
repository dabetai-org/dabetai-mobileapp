// app/(home)/applications/connect/index.tsx
import { Body, H2 } from '@/components/common/Typography';
import { CardList } from '@/components/core/cards/CardList';
import { Header } from '@/components/core/navigation/Header';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

interface HealthApp {
  id: string;
  name: string;
  icon: string;
}

export default function ConnectApplicationScreen() {
  const router = useRouter();

  // Aplicaciones de salud soportadas
  const supportedApps: HealthApp[] = [
    { id: 'google-fit', name: 'Google Fit', icon: 'monitor' },
    { id: 'apple-health', name: 'Apple Health', icon: 'monitor' },
    { id: 'fitbit', name: 'Fitbit', icon: 'monitor' },
    { id: 'garmin', name: 'Garmin Connect', icon: 'monitor' },
  ];

  // Convertir aplicaciones a formato de CardList
  const appItems = supportedApps.map(app => ({
    id: app.id,
    type: 'button' as const,
    title: app.name,
    icon: app.icon as any,
    buttonType: 'chevron' as const,
    onPress: () => handleAppPress(app),
  }));

  const handleAppPress = (app: HealthApp) => {
    // Navegar a la pantalla de autorización (que muestra instrucciones primero)
    router.push({
      pathname: '/applications/connect/authorizing',
      params: { 
        appId: app.id,
        appName: app.name
      }
    } as any);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <Header 
        title="Mis aplicaciones"
        variant="section"
      />

      {/* Contenido scrolleable */}
      <ScrollView 
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="flex-1 justify-between">
          {/* Sección de instrucciones */}
          <View className="px-6 pt-6 pb-4 gap-3">
            <H2 className="text-center leading-8 text-gray-700">
              Selecciona tu aplicación de salud
            </H2>
            
            <Body className="text-gray-600 text-center leading-6">
              Elige una aplicación conectada para configurarla.
            </Body>
            
            <Body className="text-gray-600 text-center leading-6">
              Si quieres añadir una aplicación, haz clic en ella y sigue las instrucciones.
            </Body>
          </View>

          {/* Lista de aplicaciones - hasta abajo */}
          <View className="px-6 pb-8">
            <CardList
              title="Aplicaciones soportadas"
              items={appItems}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}