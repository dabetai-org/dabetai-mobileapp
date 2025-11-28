// app/(home)/config/applications/index.tsx
import { Body, Subtitle } from '@/components/common/Typography';
import { CardList } from '@/components/core/cards/CardList';
import { Header } from '@/components/core/navigation/Header';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function ManageApplicationsScreen() {
  const router = useRouter();

  // Aplicaciones de salud conectadas
  const connectedApps = [
    {
      id: '1',
      type: 'button' as const,
      title: 'Apple Health',
      subtitle: 'Sincronizando datos',
      icon: 'heart' as const,
      buttonType: 'switch' as const,
      value: true,
      onValueChange: (value: boolean) => handleToggleApp('apple-health', value),
    },
    {
      id: '2',
      type: 'button' as const,
      title: 'Google Fit',
      subtitle: 'Sincronización pausada',
      icon: 'activity' as const,
      buttonType: 'switch' as const,
      value: false,
      onValueChange: (value: boolean) => handleToggleApp('google-fit', value),
    },
    {
      id: '3',
      type: 'button' as const,
      title: 'Samsung Health',
      subtitle: 'No conectada',
      icon: 'heart' as const,
      buttonType: 'chevron' as const,
      onPress: () => handleConnectApp('samsung-health'),
    },
  ];

  // Permisos de la aplicación
  const appPermissions = [
    {
      id: 'notifications',
      type: 'button' as const,
      title: 'Notificaciones',
      subtitle: 'Recibir alertas y recordatorios',
      icon: 'info' as const,
      buttonType: 'switch' as const,
      value: true,
      onValueChange: (value: boolean) => handleTogglePermission('notifications', value),
    },
    {
      id: 'location',
      type: 'button' as const,
      title: 'Ubicación',
      subtitle: 'Mejorar precisión de datos',
      icon: 'activity' as const, // Changed from 'location' to 'activity'
      buttonType: 'switch' as const,
      value: false,
      onValueChange: (value: boolean) => handleTogglePermission('location', value),
    },
    {
      id: 'camera',
      type: 'button' as const,
      title: 'Cámara',
      subtitle: 'Escanear códigos de barras',
      icon: 'edit' as const,
      buttonType: 'switch' as const,
      value: true,
      onValueChange: (value: boolean) => handleTogglePermission('camera', value),
    },
  ];

  const handleToggleApp = (appId: string, enabled: boolean) => {
    console.log(`Toggle app ${appId}: ${enabled}`);
    // Aquí implementarías la lógica para activar/desactivar la sincronización
  };

  const handleConnectApp = (appId: string) => {
    console.log(`Connect app: ${appId}`);
    // Navegar al flujo de conexión de la app
  };

  const handleTogglePermission = (permissionId: string, enabled: boolean) => {
    console.log(`Toggle permission ${permissionId}: ${enabled}`);
    // Aquí implementarías la lógica para solicitar/revocar permisos
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <Header 
        title="Gestionar aplicaciones"
        variant="section"
      />

      {/* Contenido */}
      <ScrollView 
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Descripción */}
        <View className="px-6 pt-6 pb-4">
          <Body className="text-gray-600 leading-6">
            Conecta aplicaciones de salud para sincronizar tus datos y obtener un seguimiento más completo.
          </Body>
        </View>

        {/* Aplicaciones de salud */}
        <View className="px-6 pt-4">
          <CardList
            title="Aplicaciones de salud"
            items={connectedApps}
          />
        </View>

        {/* Permisos de la aplicación */}
        <View className="px-6 pt-8">
          <CardList
            title="Permisos de la aplicación"
            items={appPermissions}
          />
        </View>

        {/* Información de privacidad */}
        <View className="px-6 pt-8">
          <View className="bg-primary-50 rounded-2xl p-4 border border-primary-200">
            <Subtitle className="text-primary-700 mb-2">
              🔒 Tu privacidad
            </Subtitle>
            <Body className="text-primary-700 leading-6">
              Tus datos de salud están protegidos y solo se comparten con las aplicaciones que tú autorices.
            </Body>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}