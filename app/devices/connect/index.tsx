// app/(home)/devices/connect/index.tsx
import { Body, H1 } from '@/components/common/Typography';
import { CardList } from '@/components/core/cards/CardList';
import { Header } from '@/components/core/navigation/Header';
import { SegmentedControl } from '@/components/core/navigation/SegmentedControl';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

interface Device {
  id: string;
  name: string;
  type: 'glucometer' | 'cgm' | 'fitness';
}

interface ConnectedDevice {
  id: string;
  name: string;
  status: string;
  type: 'glucometer' | 'cgm' | 'fitness';
}

export default function ConnectDeviceScreen() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0); // Inicia en "Activos"

  // Opciones de tabs
  const tabOptions = ['Activos', 'Glucómetro', 'Monitor de glucosa continuo'];

  // Dispositivos conectados (para la sección Activos)
  const connectedDevices: ConnectedDevice[] = [
    { id: '1', name: 'OneTouch Select Plus', status: 'Última sync: Hoy 8:30 AM', type: 'glucometer' },
    { id: '2', name: 'Dexcom G6 (Sensor)', status: 'Conectado / Batería: 85%', type: 'cgm' },
    { id: '3', name: 'Fitbit Charge 5', status: 'Error de sincronización', type: 'fitness' },
    { id: '4', name: 'FreeStyle Libre 2', status: 'Requiere escaneo diario', type: 'cgm' },
  ];

  // Datos de dispositivos soportados (para las otras secciones)
  const supportedDevices: Device[] = [
    { id: '1', name: 'OneTouch Select Plus', type: 'glucometer' },
    { id: '2', name: 'Dexcom G6 (Sensor)', type: 'cgm' },
    { id: '3', name: 'Fitbit Charge 5', type: 'fitness' },
    { id: '4', name: 'FreeStyle Libre 2', type: 'cgm' },
  ];

  // Convertir dispositivos a formato de CardList
  const getDeviceItems = () => {
    if (selectedTab === 0) {
      // Para dispositivos conectados, mostrar con subtítulo (status)
      return connectedDevices.map(device => ({
        id: device.id,
        type: 'button' as const,
        title: device.name,
        subtitle: device.status,
        buttonType: 'chevron' as const,
        onPress: () => handleConnectedDevicePress(device),
      }));
    } else {
      // Para dispositivos disponibles, mostrar sin subtítulo
      const filtered = selectedTab === 1 
        ? supportedDevices.filter(d => d.type === 'glucometer' || d.type === 'cgm')
        : supportedDevices.filter(d => d.type === 'cgm');
      
      return filtered.map(device => ({
        id: device.id,
        type: 'button' as const,
        title: device.name,
        buttonType: 'chevron' as const,
        onPress: () => handleDevicePress(device),
      }));
    }
  };

  const deviceItems = getDeviceItems();

  const handleDevicePress = (device: Device) => {
    // Navegar a la pantalla de búsqueda del dispositivo
    router.push({
      pathname: '/devices/connect/instructions',
      params: { 
        deviceId: device.id,
        deviceName: device.name,
        deviceType: device.type
      }
    } as any);
  };

  const handleConnectedDevicePress = (device: ConnectedDevice) => {
    // Navegar al detalle del dispositivo conectado
    router.push({
      pathname: `/devices/${device.id}`,
      params: { 
        deviceId: device.id,
        deviceName: device.name,
        deviceType: device.type
      }
    } as any);
  };

  // Obtener título de la sección según el tab
  const getSectionTitle = () => {
    switch (selectedTab) {
      case 0:
        return 'Mis dispositivos conectados';
      case 1:
        return 'Glucómetros soportados';
      case 2:
        return 'Monitores continuos soportados';
      default:
        return 'Dispositivos soportados';
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <Header 
        title="Mis dispositivos"
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
                Selecciona tu dispositivo
            </H1>
          
          <Body className="text-gray-600 leading-6">
            Elige un dispositivo activo para configurarlo.
          </Body>
          
          <Body className="text-gray-600 leading-6">
            Si quieres añadir un dispositivo haz clic en el modelo y sigue las instrucciones.
          </Body>
        </View>

        {/* Lista de dispositivos */}
        <View className="px-6 pt-8">
          {deviceItems.length > 0 ? (
            <CardList
              title={getSectionTitle()}
              items={deviceItems}
            />
          ) : (
            <View className="py-8">
              <Body className="text-gray-500 text-center">
                No hay dispositivos {selectedTab === 0 ? 'activos' : 'disponibles'} en esta categoría
              </Body>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}