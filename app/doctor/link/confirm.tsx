// app/doctor/link/confirm.tsx
import { Body, BodyBold, H2 } from '@/components/common/Typography';
import { Button } from '@/components/core/buttons/Button';
import { Header } from '@/components/core/navigation/Header';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';

export default function ConfirmDoctorScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const code = params.code as string;

  // Datos mock del médico basados en el código
  const doctorData = {
    name: 'Dr. Fermín Cardenas',
    specialty: 'Endocrinología',
    photo: null, // URL de foto si existe
  };

  const handleConfirm = () => {
    router.push('/doctor/link/share-data' as any);
  };

  const handleCancel = () => {
    router.back();
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
            Confirma los datos de tu médico
          </H2>

          {/* Card con información del médico */}
          <View className="bg-gray-100 rounded-2xl p-6 items-center gap-4">
            {/* Foto del médico */}
            <View className="w-24 h-24 rounded-full bg-gray-300 items-center justify-center overflow-hidden">
              <Body className="text-gray-600">Foto</Body>
            </View>

            {/* Nombre */}
            <H2 className="text-center text-gray-700">
              {doctorData.name}
            </H2>

            {/* Especialidad */}
            <Body className="text-gray-600">
              Especialidad: {doctorData.specialty}
            </Body>
          </View>

          {/* Texto de confirmación */}
          <Body className="text-gray-600 text-center leading-6">
            Por favor, verifica que esta información sea correcta antes de vincular tu cuenta.
          </Body>
        </View>
      </ScrollView>

      {/* Botones de acción */}
      <View className="px-6 pb-8 bg-gray-50 gap-3">
        <Button
          variant="fill"
          color="primary"
          onPress={handleConfirm}
          title="Sí, confirmar y vincular"
        />
        
        <Button
          variant="outline"
          color="primary"
          onPress={handleCancel}
          title="No, este no es mi médico"
        />
      </View>
    </View>
  );
}

