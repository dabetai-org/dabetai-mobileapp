// app/applications/connect/importing.tsx
import { Body, BodyBold, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { Header } from '@/components/core/navigation/Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

export default function ImportingScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { appId, appName } = params;
  
  const [progress, setProgress] = useState(0);
  const [imported, setImported] = useState(0);
  const totalEntries = 1200;

  useEffect(() => {
    // Simular progreso de importación
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          // Navegar a importación exitosa cuando termine
          setTimeout(() => {
            router.push({
              pathname: '/applications/connect/import-success',
              params: { appId, appName }
            } as any);
          }, 500);
          return 100;
        }
        return prev + 2; // Incrementar 2% cada vez
      });
      
      setImported(prev => {
        const newValue = Math.min(prev + 24, totalEntries);
        return newValue;
      });
    }, 500); // Actualizar cada 500ms

    return () => {
      clearInterval(progressTimer);
    };
  }, []);

  const handleCancel = () => {
    // Cancelar importación y volver
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
          {/* Icono de sincronización */}
          <View className="w-16 h-16 items-center justify-center">
            <MaterialCommunityIcons 
              name="sync" 
              size={48} 
              color="#374151" // gray-700
            />
          </View>
          
          {/* Título */}
          <H2 className="text-center leading-8 text-gray-700">
            Importando datos de {appName}
          </H2>
          
          {/* Barra de progreso */}
          <View className="w-full gap-3">
            {/* Barra de progreso visual */}
            <View className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <View 
                className="h-full bg-primary-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </View>
            
            {/* Texto de progreso */}
            <BodyBold className="text-primary-500 text-center">
              Importadas {imported} de {totalEntries} entradas
            </BodyBold>
          </View>
          
          {/* Descripción */}
          <Body className="text-gray-600 text-center leading-6 px-4">
            Por favor, mantén la aplicación abierta mientras se transfiere la información. Esto puede tardar unos minutos.
          </Body>
        </View>

        {/* Botón cancelar en la parte inferior */}
        <View className="pb-8">
          <Button
            variant="outline"
            color="danger"
            onPress={handleCancel}
            title="Cancelar sincronización"
          />
        </View>
      </View>
    </View>
  );
}

