// app/(home)/devices/connect/pairing-device.tsx
import { Body, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function PairingDeviceScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { deviceId, deviceName, deviceType } = params;

  useEffect(() => {
    // Simular proceso de emparejamiento que falla
    const pairingTimer = setTimeout(() => {
      // Navegar a la pantalla de error después de 3 segundos
      router.push({
        pathname: '/devices/connect/syncing',
        params: { deviceId, deviceName, deviceType }
      } as any);
    }, 3000);

    return () => {
      clearTimeout(pairingTimer);
    };
  }, []);

  const handleCancel = () => {
    // Volver a la lista de dispositivos encontrados
    router.back();
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
          {/* Icono de Bluetooth */}
          <View className="w-16 h-16 items-center justify-center">
            <MaterialCommunityIcons 
              name="bluetooth" 
              size={48} 
              color="#374151" // gray-700
            />
          </View>
          
          {/* Título */}
          <H2 className="text-center leading-8 text-gray-700 px-4">
            Emparejando con {deviceName}
          </H2>
          
          {/* Descripción */}
          <Body className="text-gray-600 text-center leading-6 px-6">
            Por favor, revisa la pantalla de tu glucómetro y la pantalla de tu teléfono. Si aparece un código en ambos, verifica que coincidan y confirmalo.
          </Body>
        </View>

        {/* Botón cancelar en la parte inferior */}
        <View className="pb-8">
          <Button
            variant="outline"
            color="danger"
            onPress={handleCancel}
            title="Cancelar emparejamiento"
          />
        </View>
      </View>
    </View>
  );
}