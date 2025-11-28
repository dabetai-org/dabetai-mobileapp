// app/doctor/index.tsx
import { Body, H2, Subtitle } from '@/components/common/Typography';
import { Icon } from '@/components/common/Icon';
import { Button } from '@/components/core/buttons/Button';
import { ButtonCard } from '@/components/core/cards/ButtonCard';
import { Header } from '@/components/core/navigation/Header';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';

// Mock: verificar si hay médico conectado
const hasConnectedDoctor = true; // Cambiar a false para ver pantalla sin médico

export default function DoctorScreen() {
  const router = useRouter();

  // Si no hay médico conectado, mostrar pantalla para vincular
  if (!hasConnectedDoctor) {
    return (
      <View className="flex-1 bg-gray-50">
        <Header 
          title="Mi médico"
          variant="section"
        />

        <ScrollView 
          className="flex-1"
          contentContainerClassName="pb-8"
          showsVerticalScrollIndicator={false}
        >
          <View className="px-6 pt-6 pb-4 gap-3">
            <H2 className="text-center leading-8 text-gray-700">
              Pide a tu médico el código de dabetai
            </H2>
            
            <Body className="text-gray-600 text-center leading-6">
              Para vincular tu cuenta, tu médico te proporcionará un código único desde su aplicación web de dabetai.
            </Body>
          </View>

          {/* Placeholder para imagen/video */}
          <View className="px-6 pt-4">
            <View className="bg-gray-200 rounded-2xl h-48 items-center justify-center">
              <Body className="text-gray-500">Imagen/Video aquí</Body>
            </View>
          </View>
        </ScrollView>

        {/* Botón de acción */}
        <View className="px-6 pb-8 bg-gray-50">
          <Button
            variant="fill"
            color="primary"
            onPress={() => router.push('/doctor/link' as any)}
            title="Ya tengo el código"
          />
        </View>
      </View>
    );
  }

  // Si hay médico conectado, mostrar pantalla con datos del médico
  const [sharedData, setSharedData] = useState<Record<string, boolean>>({
    'glucose': false,
    'prediction': false,
    'medical-info': false,
    'medication': false,
    'meals': true,
    'activity': true,
  });

  const [shareDuration, setShareDuration] = useState<string>('3-meses');

  return (
    <View className="flex-1 bg-gray-50">
      <Header 
        title="Mi médico"
        variant="section"
      />

      <ScrollView 
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Sección de perfil del médico */}
        <View className="bg-gray-100 px-6 pt-8 pb-6">
          {/* Foto del médico */}
          <View className="items-center mb-4">
            <View className="w-24 h-24 rounded-full bg-gray-300 items-center justify-center overflow-hidden">
              <Body className="text-gray-600">Foto</Body>
            </View>
          </View>

          {/* Nombre del médico */}
          <H2 className="text-center text-gray-700 mb-2">
            Dr. Fermín Cardenas
          </H2>

          {/* Información */}
          <View className="gap-1 items-center mb-6">
            <Body className="text-gray-600">Especialidad: Endocrinología</Body>
            <Body className="text-gray-600">Clínica: IMSS Córdoba</Body>
          </View>

          {/* Botón enviar mensaje */}
          <Button
            variant="fill"
            color="primary"
            iconPosition="left"
            icon={<Icon name="send" size={20} />}
            className="bg-success-500 active:bg-success-800"
            onPress={() => router.push('/doctor/chat' as any)}
            title="Enviar mensaje"
          />
        </View>

        {/* Datos a compartir */}
        <View className="px-6 pt-8">
          <View className="gap-4">
            {/* Título */}
            <Subtitle>Datos a compartir</Subtitle>

            {/* Lista de datos con switches */}
            <View className="bg-white rounded-2xl border border-gray-300 overflow-hidden">
              <ButtonCard
                title="Glucosa (lecturas y tendencias)"
                type="switch"
                value={sharedData['glucose']}
                onValueChange={(value) => setSharedData({ ...sharedData, 'glucose': value })}
                isLast={false}
              />
              <ButtonCard
                title="Predicción de Riesgo (y factores influyentes)"
                type="switch"
                value={sharedData['prediction']}
                onValueChange={(value) => setSharedData({ ...sharedData, 'prediction': value })}
                isLast={false}
              />
              <ButtonCard
                title="Información médica básica"
                type="switch"
                value={sharedData['medical-info']}
                onValueChange={(value) => setSharedData({ ...sharedData, 'medical-info': value })}
                isLast={false}
              />
              <ButtonCard
                title="Medicación (dosis y horarios)"
                type="switch"
                value={sharedData['medication']}
                onValueChange={(value) => setSharedData({ ...sharedData, 'medication': value })}
                isLast={false}
              />
              <ButtonCard
                title="Comidas (registros y carbohidratos)"
                type="switch"
                value={sharedData['meals']}
                onValueChange={(value) => setSharedData({ ...sharedData, 'meals': value })}
                state="disabled"
                isLast={false}
              />
              <ButtonCard
                title="Actividad física"
                type="switch"
                value={sharedData['activity']}
                onValueChange={(value) => setSharedData({ ...sharedData, 'activity': value })}
                state="disabled"
                isLast={true}
              />
            </View>

            <Body className="text-gray-500 text-sm">
              Los datos obligatorios son el mínimo necesario para que el médico pueda darte seguimiento.
            </Body>
          </View>
        </View>

        {/* Compartir por */}
        <View className="px-6 pt-8">
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
        </View>

        {/* Medios de contacto */}
        <View className="px-6 pt-8">
          <View className="gap-4">
            <Subtitle>Medios de contacto</Subtitle>

            <View className="bg-white rounded-2xl border border-gray-300 overflow-hidden">
              <ButtonCard
                title="fermin.cardenas@imss.com"
                icon="mail"
                type="chevron"
                onPress={() => {}}
                isLast={false}
              />
              <ButtonCard
                title="2712667366"
                icon="phone"
                type="chevron"
                onPress={() => {}}
                isLast={false}
              />
              <ButtonCard
                title="Av. 11. Córdoba. Calle 9."
                icon="map-pin"
                type="chevron"
                onPress={() => {}}
                isLast={true}
              />
            </View>
          </View>
        </View>

        {/* Botón cancelar vinculación */}
        <View className="px-6 pt-8">
          <Button
            variant="outline"
            color="danger"
            onPress={() => {}}
            title="Cancelar vinculación"
          />
        </View>
      </ScrollView>
    </View>
  );
}

