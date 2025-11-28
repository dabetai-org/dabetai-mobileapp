// app/(home)/devices/connect/pairing.tsx
import { Body, H2 } from '@/components/common/Typography';
import { CardList } from '@/components/core/cards/CardList';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function PairingScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { deviceId, deviceName, deviceType } = params;

  // Dispositivos encontrados (simulados)
  const foundDevices = [
    {
      id: '1',
      type: 'button' as const,
      title: 'OneTouch Select Plus',
      buttonType: 'chevron' as const,
      onPress: () => handleSelectDevice('1', 'OneTouch Select Plus'),
    },
    {
      id: '2',
      type: 'button' as const,
      title: 'Accu-Chek Guide',
      buttonType: 'chevron' as const,
      onPress: () => handleSelectDevice('2', 'Accu-Chek Guide'),
    },
  ];

  const handleSelectDevice = (selectedDeviceId: string, selectedDeviceName: string) => {
    // Navegar a pairing-device con el dispositivo seleccionado
    router.push({
      pathname: '/devices/connect/pairing-device',
      params: { 
        deviceId: selectedDeviceId, 
        deviceName: selectedDeviceName, 
        deviceType 
      }
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
      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Sección superior con icono y textos */}
        <View className="px-5 pt-8 pb-4 gap-6">
          {/* Icono de check */}
          <View className="w-16 h-16 items-center justify-center self-center">
            <MaterialCommunityIcons 
              name="check-circle-outline" 
              size={48} 
              color="#374151" // gray-700
            />
          </View>
          
          {/* Título */}
          <H2 className="text-center leading-8 text-gray-700">
            Búsqueda exitosa
          </H2>
          
          {/* Descripción */}
          <Body className="text-gray-600 text-center leading-6">
            Se han encontrado los siguientes dispositivos. Selecciona al que deseas emparejar.
          </Body>
        </View>

        {/* Espaciador */}
        <View className="flex-1" />

        {/* Lista de dispositivos encontrados */}
        <View className="px-5 pb-8">
          <CardList
            title="Dispositivos encontrados"
            items={foundDevices}
          />
        </View>
      </ScrollView>
    </View>
  );
}