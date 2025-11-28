// app/doctor/link/share-data.tsx
import { Body, H2, Subtitle } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { ButtonCard } from '@/components/core/cards/ButtonCard';
import { Header } from '@/components/core/navigation/Header';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

interface DataCategory {
  id: string;
  title: string;
  mandatory: boolean;
}

export default function ShareDataScreen() {
  const router = useRouter();
  
  const [sharedData, setSharedData] = useState<Record<string, boolean>>({
    'glucose': false,
    'prediction': false,
    'medical-info': false,
    'medication': false,
    'meals': true,
    'activity': true,
  });

  const [shareDuration, setShareDuration] = useState<string>('3-meses');

  const dataCategories: DataCategory[] = [
    { id: 'glucose', title: 'Glucosa (lecturas y tendencias)', mandatory: false },
    { id: 'prediction', title: 'Predicción de Riesgo (y factores influyentes)', mandatory: false },
    { id: 'medical-info', title: 'Información médica básica', mandatory: false },
    { id: 'medication', title: 'Medicación (dosis y horarios)', mandatory: false },
    { id: 'meals', title: 'Comidas (registros y carbohidratos)', mandatory: true },
    { id: 'activity', title: 'Actividad física', mandatory: true },
  ];

  const handleToggleData = (id: string) => {
    const category = dataCategories.find(cat => cat.id === id);
    if (category?.mandatory) return; // No permitir desactivar datos obligatorios
    
    setSharedData(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleShareAndLink = () => {
    router.push('/doctor/link/linking' as any);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <Header 
        title=""
        variant="onboarding"
      />

      <ScrollView 
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 pt-8 pb-4 gap-6">
          {/* Título */}
          <H2 className="text-center leading-8 text-gray-700">
            Elige qué datos compartir
          </H2>

          {/* Texto introductorio */}
          <Body className="text-gray-600 text-center leading-6">
            Selecciona las categorías de datos que tu médico podrá ver en su aplicación de dabetai.
          </Body>

          {/* Datos a compartir */}
          <View className="gap-4">
            <Subtitle>Datos a compartir</Subtitle>
            
            <View className="bg-white rounded-2xl border border-gray-300 overflow-hidden">
              {dataCategories.map((category, index) => (
                <ButtonCard
                  key={category.id}
                  title={category.title}
                  type="switch"
                  value={sharedData[category.id]}
                  onValueChange={() => handleToggleData(category.id)}
                  state={category.mandatory ? 'disabled' : 'default'}
                  isLast={index === dataCategories.length - 1}
                />
              ))}
            </View>

            <Body className="text-gray-500 text-sm">
              Los datos obligatorios son el mínimo necesario para que el médico pueda darte seguimiento.
            </Body>
          </View>

          {/* Compartir por */}
          <View className="gap-4">
            <Subtitle>Compartir por</Subtitle>
            
            <View className="bg-white rounded-2xl border border-gray-300 overflow-hidden">
              {/* Radio button option */}
              <TouchableOpacity
                onPress={() => setShareDuration('1-mes')}
                className="flex-row items-center px-4 py-4 border-b border-gray-300"
                activeOpacity={0.7}
              >
                <View className="mr-3">
                  <View className={`w-5 h-5 rounded-full border-2 justify-center items-center ${
                    shareDuration === '1-mes' ? 'border-primary-500' : 'border-gray-300'
                  }`}>
                    {shareDuration === '1-mes' && (
                      <View className="w-3 h-3 bg-primary-500 rounded-full" />
                    )}
                  </View>
                </View>
                <Body className="text-gray-700 flex-1">1 mes</Body>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => setShareDuration('3-meses')}
                className="flex-row items-center px-4 py-4 border-b border-gray-300"
                activeOpacity={0.7}
              >
                <View className="mr-3">
                  <View className={`w-5 h-5 rounded-full border-2 justify-center items-center ${
                    shareDuration === '3-meses' ? 'border-primary-500' : 'border-gray-300'
                  }`}>
                    {shareDuration === '3-meses' && (
                      <View className="w-3 h-3 bg-primary-500 rounded-full" />
                    )}
                  </View>
                </View>
                <Body className="text-gray-700 flex-1">3 meses</Body>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => setShareDuration('6-meses')}
                className="flex-row items-center px-4 py-4 border-b border-gray-300"
                activeOpacity={0.7}
              >
                <View className="mr-3">
                  <View className={`w-5 h-5 rounded-full border-2 justify-center items-center ${
                    shareDuration === '6-meses' ? 'border-primary-500' : 'border-gray-300'
                  }`}>
                    {shareDuration === '6-meses' && (
                      <View className="w-3 h-3 bg-primary-500 rounded-full" />
                    )}
                  </View>
                </View>
                <Body className="text-gray-700 flex-1">6 meses</Body>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => setShareDuration('indefinido')}
                className="flex-row items-start px-4 py-4"
                activeOpacity={0.7}
              >
                <View className="mr-3 mt-0.5">
                  <View className={`w-5 h-5 rounded-full border-2 justify-center items-center ${
                    shareDuration === 'indefinido' ? 'border-primary-500' : 'border-gray-300'
                  }`}>
                    {shareDuration === 'indefinido' && (
                      <View className="w-3 h-3 bg-primary-500 rounded-full" />
                    )}
                  </View>
                </View>
                <View className="flex-1">
                  <Body className="text-gray-700">Indefinido</Body>
                  <Body className="text-gray-500 text-sm mt-1">
                    Hasta que lo desactive
                  </Body>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Nota final */}
          <Body className="text-gray-500 text-sm">
            Puedes cambiar estos permisos o dejar de compartir en cualquier momento desde la sección "Mi médico" en configuración.
          </Body>
        </View>
      </ScrollView>

      {/* Botón de acción */}
      <View className="px-6 pb-8 bg-gray-50">
        <Button
          variant="fill"
          color="primary"
          onPress={handleShareAndLink}
          title="Compartir y vincular cuenta"
        />
      </View>
    </View>
  );
}

