// app/(home)/devices/connect/instructions.tsx
import { Body, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { CardList } from '@/components/core/cards/CardList';
import { Header } from '@/components/core/navigation/Header';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function InstructionsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { deviceId, deviceName, deviceType } = params;

  const handleStartSearch = () => {
    // Navegar a searching
    router.push({
      pathname: '/devices/connect/searching',
      params: { deviceId, deviceName, deviceType }
    } as any);
  };

  // Lista de instrucciones como InfoCards
  const instructionItems = [
    {
      id: '1',
      type: 'info' as const,
      title: '1. Asegúrate de que tu glucómetro One Touch Select Plus esté encendido y con batería suficiente.',
      state: 'info' as const,
    },
    {
      id: '2',
      type: 'info' as const,
      title: '2. Pon tu glucómetro en modo de emparejamiento: Bluetooth.',
      description: '(Consulta el manual de tu dispositivo para ver cómo hacerlo, o ve al menú "Configuración" o "Bluetooth").',
      state: 'info' as const,
    },
    {
      id: '3',
      type: 'info' as const,
      title: '3. Asegúrate de que tu glucómetro One Touch Select Plus esté aún en modo de búsqueda y batería suficiente.',
      state: 'info' as const,
    },
    {
      id: '4',
      type: 'info' as const,
      title: '4. Pon tu glucómetro en modo de emparejamiento: Bluetooth.',
      description: '(Consulta el manual de tu dispositivo para ver cómo hacerlo, o ve al menú "Configuración" o "Bluetooth").',
      state: 'info' as const,
    },
    {
      id: '5',
      type: 'info' as const,
      title: '5. Toca el botón "Buscar glucómetro" abajo para que la aplicación inicie la búsqueda.',
      state: 'info' as const,
    },
  ];

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
      >
        <View className="px-5 pt-6 pb-8">
          {/* Título */}
          <H2 className="text-center leading-8 text-gray-700 mb-4">
            Conecta tu {deviceName}
          </H2>
          
          {/* Descripción */}
          <Body className="text-gray-600 text-center leading-6 mb-6">
            Sigue estos sencillos pasos para emparejar tu glucómetro con dabetai y empezar a sincronizar tus mediciones.
          </Body>

          {/* Lista de instrucciones usando CardList */}
          <CardList
            title="Instrucciones de emparejamiento"
            items={instructionItems}
          />
        </View>
      </ScrollView>

      {/* Botón en la parte inferior */}
      <View className="px-5 pb-8">
        <Button
          variant="fill"
          color="primary"
          onPress={handleStartSearch}
          title="Buscar glucómetro"
        />
      </View>
    </View>
  );
}