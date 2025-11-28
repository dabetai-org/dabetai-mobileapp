// app/devices/[deviceId].tsx
import { Body, BodyBold, H2, Subtitle } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { ButtonCard } from '@/components/core/cards/ButtonCard';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

// Datos mock de dispositivos
const deviceData: Record<string, {
  name: string;
  status: 'connected' | 'disconnected' | 'error';
  battery: number;
  lastSync: string;
  model: string;
  firmwareVersion: string;
  serialNumber: string;
  autoSync: boolean;
  syncFrequency: string;
}> = {
  '1': {
    name: 'OneTouch Select Plus',
    status: 'connected',
    battery: 85,
    lastSync: 'Hoy, 10:30 AM',
    model: 'Select Plus Flex',
    firmwareVersion: '1.2.0',
    serialNumber: 'A87304BSN273',
    autoSync: true,
    syncFrequency: 'Cada 15 minutos',
  },
  '2': {
    name: 'Dexcom G6 (Sensor)',
    status: 'connected',
    battery: 85,
    lastSync: 'Hoy, 9:15 AM',
    model: 'Dexcom G6',
    firmwareVersion: '2.1.3',
    serialNumber: 'DXG6-2024-001',
    autoSync: true,
    syncFrequency: 'Cada 5 minutos',
  },
  '3': {
    name: 'Fitbit Charge 5',
    status: 'error',
    battery: 60,
    lastSync: 'Ayer, 3:45 PM',
    model: 'Charge 5',
    firmwareVersion: '1.0.5',
    serialNumber: 'FB-C5-2024-042',
    autoSync: false,
    syncFrequency: 'Cada hora',
  },
  '4': {
    name: 'FreeStyle Libre 2',
    status: 'connected',
    battery: 90,
    lastSync: 'Hoy, 11:00 AM',
    model: 'FreeStyle Libre 2',
    firmwareVersion: '1.8.2',
    serialNumber: 'FSL2-2024-089',
    autoSync: true,
    syncFrequency: 'Cada 10 minutos',
  },
};

export default function DeviceDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const deviceId = params.deviceId as string;
  
  const device = deviceData[deviceId] || deviceData['1'];
  const [autoSync, setAutoSync] = useState(device.autoSync);

  const handleSyncNow = () => {
    // Navegar a la pantalla de sincronización
    router.push({
      pathname: '/devices/connect/syncing-progress',
      params: {
        deviceId,
        deviceName: device.name,
        deviceType: 'glucometer'
      }
    } as any);
  };

  const handleDisconnect = () => {
    // Mostrar confirmación y desconectar
    // Por ahora solo navegar de vuelta
    router.back();
  };

  const handleSyncFrequencyPress = () => {
    // Navegar a configuración de frecuencia
    // Por ahora solo mostrar un alert
    console.log('Configurar frecuencia de sincronización');
  };

  const getStatusColor = () => {
    switch (device.status) {
      case 'connected':
        return '#00C950'; // success-500
      case 'error':
        return '#FB2C36'; // danger-500
      default:
        return '#62748E'; // gray-500
    }
  };

  const getStatusText = () => {
    switch (device.status) {
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
        title={device.name}
        variant="section"
      />

      {/* Contenido scrolleable */}
      <ScrollView 
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Sección de estado del dispositivo */}
        <View className="bg-gray-100 px-6 pt-8 pb-6">
          {/* Icono del dispositivo */}
          <View className="items-center mb-4">
            <View className="w-16 h-16 items-center justify-center">
              <MaterialCommunityIcons 
                name="cellphone" 
                size={48} 
                color="#314158" // gray-700
              />
            </View>
          </View>

          {/* Nombre del dispositivo */}
          <H2 className="text-center text-gray-700 mb-4">
            {device.name}
          </H2>

          {/* Estado del dispositivo */}
          <View className="gap-2 mb-6">
            <View className="flex-row items-center justify-center gap-2">
              <Body className="text-gray-600">Estado:</Body>
              <BodyBold style={{ color: getStatusColor() }}>
                {getStatusText()}
              </BodyBold>
            </View>

            <View className="flex-row items-center justify-center gap-2">
              <Body className="text-gray-600">Batería:</Body>
              <BodyBold style={{ color: getStatusColor() }}>
                {device.battery}%
              </BodyBold>
            </View>

            <View className="flex-row items-center justify-center gap-2">
              <Body className="text-gray-600">Última sync:</Body>
              <Body className="text-gray-700">{device.lastSync}</Body>
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
              title="Desconectar dispositivo"
            />
          </View>
        </View>

        {/* Información técnica */}
        <View className="px-6 pt-8">
          <Subtitle className="mb-4">Información técnica</Subtitle>
          
          <View className="bg-gray-50 rounded-2xl border border-gray-300 overflow-hidden">
            <View className="px-4 py-4 border-b border-gray-300">
              <View className="flex-row justify-between items-center">
                <Body className="text-gray-600">Modelo</Body>
                <Body className="text-gray-700">{device.model}</Body>
              </View>
            </View>
            
            <View className="px-4 py-4 border-b border-gray-300">
              <View className="flex-row justify-between items-center">
                <Body className="text-gray-600">Versión Firmware:</Body>
                <Body className="text-gray-700">{device.firmwareVersion}</Body>
              </View>
            </View>
            
            <View className="px-4 py-4">
              <View className="flex-row justify-between items-center">
                <Body className="text-gray-600">Número de serie</Body>
                <Body className="text-gray-700">{device.serialNumber}</Body>
              </View>
            </View>
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
              subtitle={device.syncFrequency}
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

