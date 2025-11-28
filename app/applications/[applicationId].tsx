// app/applications/[applicationId].tsx
import { Body, BodyBold, H2, Subtitle } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { ButtonCard } from '@/components/core/cards/ButtonCard';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

// Datos mock de aplicaciones
const appData: Record<string, {
  name: string;
  status: 'connected' | 'disconnected' | 'error';
  lastSync: string;
  linkedAccount: string;
  grantedPermissions: string;
  autoSync: boolean;
  syncFrequency: string;
}> = {
  'google-fit': {
    name: 'Google Fit',
    status: 'connected',
    lastSync: 'Hoy, 10:30 AM',
    linkedAccount: 'christian@gmail.com',
    grantedPermissions: 'Actividad, glucosa...',
    autoSync: true,
    syncFrequency: 'Cada 4 horas',
  },
  'apple-health': {
    name: 'Apple Health',
    status: 'connected',
    lastSync: 'Ayer, 3:45 PM',
    linkedAccount: 'usuario@icloud.com',
    grantedPermissions: 'Actividad, glucosa, peso...',
    autoSync: true,
    syncFrequency: 'Cada 6 horas',
  },
};

export default function ApplicationDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const applicationId = params.applicationId as string;
  
  const app = appData[applicationId] || appData['google-fit'];
  const [autoSync, setAutoSync] = useState(app.autoSync);

  const handleSyncNow = () => {
    // Navegar a la pantalla de importación
    router.push({
      pathname: '/applications/connect/importing',
      params: {
        appId: applicationId,
        appName: app.name
      }
    } as any);
  };

  const handleDisconnect = () => {
    // Desconectar aplicación y volver
    router.back();
  };

  const handleSyncFrequencyPress = () => {
    // Navegar a configuración de frecuencia
    console.log('Configurar frecuencia de sincronización');
  };

  const handlePermissionsPress = () => {
    // Navegar a detalles de permisos
    console.log('Ver permisos concedidos');
  };

  const getStatusColor = () => {
    switch (app.status) {
      case 'connected':
        return '#00C950'; // success-500
      case 'error':
        return '#FB2C36'; // danger-500
      default:
        return '#62748E'; // gray-500
    }
  };

  const getStatusText = () => {
    switch (app.status) {
      case 'connected':
        return 'Conectado';
      case 'error':
        return 'Error';
      default:
        return 'Desconectado';
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <Header 
        title={app.name}
        variant="section"
      />

      {/* Contenido scrolleable */}
      <ScrollView 
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Sección de estado de la aplicación */}
        <View className="bg-gray-100 px-6 pt-8 pb-6">
          {/* Icono de la aplicación - corazón outline gris oscuro */}
          <View className="items-center mb-4">
            <View className="w-16 h-16 items-center justify-center">
              <MaterialCommunityIcons 
                name="heart-outline" 
                size={48} 
                color="#314158" // gray-700
              />
            </View>
          </View>

          {/* Nombre de la aplicación */}
          <H2 className="text-center text-gray-700 mb-4">
            {app.name}
          </H2>

          {/* Estado de la aplicación */}
          <View className="gap-2 mb-6">
            <View className="flex-row items-center justify-center gap-2">
              <Body className="text-gray-600">Estado:</Body>
              <BodyBold style={{ color: getStatusColor() }}>
                {getStatusText()}
              </BodyBold>
            </View>

            <View className="flex-row items-center justify-center gap-2">
              <Body className="text-gray-600">Última sync:</Body>
              <Body className="text-gray-700">{app.lastSync}</Body>
            </View>
          </View>

          {/* Botones de acción */}
          <View className="gap-3">
            <Button
              variant="fill"
              color="primary"
              onPress={handleSyncNow}
              title="Sincronizar datos ahora"
            />
            
            <Button
              variant="fill"
              color="danger"
              onPress={handleDisconnect}
              title="Desconectar aplicación"
            />
          </View>
        </View>

        {/* Información de conexión */}
        <View className="px-6 pt-8">
          <Subtitle className="mb-4">Información de conexión</Subtitle>
          
          <View className="bg-gray-50 rounded-2xl border border-gray-300 overflow-hidden">
            <View className="px-4 py-4 border-b border-gray-300">
              <View className="flex-row justify-between items-center">
                <Body className="text-gray-600">Cuenta vinculada</Body>
                <Body className="text-gray-700">{app.linkedAccount}</Body>
              </View>
            </View>
            
            <ButtonCard
              title="Permisos concedidos"
              subtitle={app.grantedPermissions}
              type="chevron"
              onPress={handlePermissionsPress}
              isLast={true}
            />
          </View>
        </View>

        {/* Configuración de datos */}
        <View className="px-6 pt-8">
          <Subtitle className="mb-4">Configuración de datos</Subtitle>
          
          <View className="bg-gray-50 rounded-2xl border border-gray-300 overflow-hidden">
            <ButtonCard
              title="Sincronización automática"
              type="switch"
              value={autoSync}
              onValueChange={setAutoSync}
              isLast={false}
            />
            
            <ButtonCard
              title="Frecuencia de carga"
              subtitle={app.syncFrequency}
              type="chevron"
              onPress={handleSyncFrequencyPress}
              isLast={true}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

