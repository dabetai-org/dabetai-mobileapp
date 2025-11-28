// app/applications/index.tsx
import { Body, H1 } from '@/components/common/Typography';
import { CardList } from '@/components/core/cards/CardList';
import { Header } from '@/components/core/navigation/Header';
import { SegmentedControl } from '@/components/core/navigation/SegmentedControl';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

interface ConnectedApp {
  id: string;
  name: string;
  status: string;
  lastSync?: string;
}

export default function ApplicationsScreen() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0); // Inicia en "Activos"

  // Opciones de tabs
  const tabOptions = ['Activos', 'Aplicaciones de salud'];

  // Aplicaciones conectadas (para la sección Activos)
  const connectedApps: ConnectedApp[] = [
    { id: 'google-fit', name: 'Google Fit', status: 'Conectado', lastSync: 'Última sync: Hoy 8:30 AM' },
    { id: 'apple-health', name: 'Apple Health', status: 'Conectado', lastSync: 'Última sync: Ayer 3:45 PM' },
  ];

  // Aplicaciones de salud soportadas (para la otra sección)
  const supportedApps = [
    { id: 'google-fit', name: 'Google Fit' },
    { id: 'apple-health', name: 'Apple Health' },
    { id: 'fitbit', name: 'Fitbit' },
    { id: 'garmin', name: 'Garmin Connect' },
  ];

  // Convertir aplicaciones a formato de CardList
  const getAppItems = () => {
    if (selectedTab === 0) {
      // Para aplicaciones conectadas, mostrar con subtítulo (status)
      return connectedApps.map(app => ({
        id: app.id,
        type: 'button' as const,
        title: app.name,
        subtitle: app.lastSync || app.status,
        buttonType: 'chevron' as const,
        onPress: () => handleConnectedAppPress(app),
      }));
    } else {
      // Para aplicaciones disponibles, mostrar sin subtítulo
      return supportedApps.map(app => ({
        id: app.id,
        type: 'button' as const,
        title: app.name,
        buttonType: 'chevron' as const,
        onPress: () => handleAppPress(app),
      }));
    }
  };

  const appItems = getAppItems();

  const handleAppPress = (app: { id: string; name: string }) => {
    // Navegar al flujo de conexión
    router.push({
      pathname: '/applications/connect/authorizing',
      params: { 
        appId: app.id,
        appName: app.name
      }
    } as any);
  };

  const handleConnectedAppPress = (app: ConnectedApp) => {
    // Navegar al detalle de la aplicación conectada
    router.push({
      pathname: `/applications/${app.id}`,
      params: { 
        appId: app.id,
        appName: app.name
      }
    } as any);
  };

  // Obtener título de la sección según el tab
  const getSectionTitle = () => {
    switch (selectedTab) {
      case 0:
        return 'Mis aplicaciones conectadas';
      case 1:
        return 'Aplicaciones soportadas';
      default:
        return 'Aplicaciones';
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <Header 
        title="Mis aplicaciones"
        variant="section"
      />

      {/* Tabs de navegación */}
      <View className="px-4 pt-4 bg-gray-50">
        <SegmentedControl
          options={tabOptions}
          selectedIndex={selectedTab}
          onSelectionChange={setSelectedTab}
          scrollable={true}
        />
      </View>

      {/* Contenido scrolleable */}
      <ScrollView 
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Sección de instrucciones */}
        <View className="px-6 pt-6 pb-4 gap-3">
          <H1 className="leading-10">
            Selecciona tu aplicación de salud
          </H1>
          
          <Body className="text-gray-600 leading-6">
            Elige una aplicación conectada para configurarla.
          </Body>
          
          <Body className="text-gray-600 leading-6">
            Si quieres añadir una aplicación, haz clic en ella y sigue las instrucciones.
          </Body>
        </View>

        {/* Lista de aplicaciones */}
        <View className="px-6 pt-8">
          {appItems.length > 0 ? (
            <CardList
              title={getSectionTitle()}
              items={appItems}
            />
          ) : (
            <View className="py-8">
              <Body className="text-gray-500 text-center">
                No hay aplicaciones {selectedTab === 0 ? 'conectadas' : 'disponibles'} en esta categoría
              </Body>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

