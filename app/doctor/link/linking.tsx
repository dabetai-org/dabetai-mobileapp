// app/doctor/link/linking.tsx
import { Body, BodyBold, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';

// Mock: datos del médico
const doctorName = 'Dr. Fermín Cárdenas';

export default function LinkingScreen() {
  const router = useRouter();

  useEffect(() => {
    // Simular proceso de vinculación
    const linkingTimer = setTimeout(() => {
      // Simular éxito después de 3 segundos
      router.push('/doctor/link/setup-complete' as any);
    }, 3000);

    return () => {
      clearTimeout(linkingTimer);
    };
  }, []);

  const handleCancel = () => {
    router.back();
  };

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
            Vinculando tu cuenta con el {doctorName}
          </H2>
          
          {/* Descripción */}
          <View className="gap-2 px-4">
            <Body className="text-gray-600 text-center leading-6">
              Estamos estableciendo la conexión segura y configurando los permisos de datos.
            </Body>
            <Body className="text-gray-600 text-center leading-6">
              Por favor, <BodyBold className="text-gray-700">no cierres la aplicación</BodyBold>.
            </Body>
          </View>
        </View>

        {/* Botón cancelar */}
        <View className="pb-8">
          <Button
            variant="outline"
            color="danger"
            onPress={handleCancel}
            title="Cancelar vinculación"
          />
        </View>
      </View>
    </View>
  );
}

