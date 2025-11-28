// app/(home)/config/devices/index.tsx
import { Body, Subtitle } from '@/components/common/Typography';
import { CardList } from '@/components/core/cards/CardList';
import { Header } from '@/components/core/navigation/Header';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function ManageDevicesScreen() {
  const router = useRouter();

  const handleDevicePress = (deviceId: string) => {
    // Navegar al detalle del dispositivo
    router.push(`/devices/${deviceId}` as any);
  };

  const handleAddDevice = () => {
    // Navegar al flujo de conexión de dispositivos
    router.push('/devices/connect' as any);
  };

  // Dispositivos conectados (mock data)
  const connectedDevices = [
    {
      id: '1',
      type: 'button' as const,
      title: 'OneTouch Select Plus',
      subtitle: 'Conectado hace 2 horas',
      buttonType: 'chevron' as const,
      onPress: () => handleDevicePress('1'),
    },
    {
      id: '2',
      type: 'button' as const,
      title: 'FreeStyle Libre 2',
      subtitle: 'Conectado hace 1 día',
      buttonType: 'chevron' as const,
      onPress: () => handleDevicePress('2'),
    },
  ];

  // Dispositivos disponibles para conectar
  const availableDevices = [
    {
      id: 'add-device',
      type: 'button' as const,
      title: 'Agregar nuevo dispositivo',
      icon: 'plus-circle' as const,
      buttonType: 'chevron' as const,
      onPress: handleAddDevice,
    },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <Header 
        title="Gestionar dispositivos"
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
            Administra tus glucómetros y dispositivos de monitoreo continuo conectados.
          </Body>
        </View>

        {/* Dispositivos conectados */}
        <View className="px-6 pt-4">
          <CardList
            title="Dispositivos conectados"
            items={connectedDevices}
          />
        </View>

        {/* Agregar nuevo dispositivo */}
        <View className="px-6 pt-8">
          <CardList
            items={availableDevices}
          />
        </View>

        {/* Información adicional */}
        <View className="px-6 pt-8">
          <View className="bg-primary-50 rounded-2xl p-4 border border-primary-200">
            <Subtitle className="text-primary-700 mb-2">
              💡 Consejo
            </Subtitle>
            <Body className="text-primary-700 leading-6">
              Mantén tus dispositivos sincronizados para obtener lecturas automáticas y un mejor seguimiento de tu glucosa.
            </Body>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}