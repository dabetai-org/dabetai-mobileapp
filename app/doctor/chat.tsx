// app/doctor/chat.tsx
import { Body } from '@/components/common/Typography';
import { ChatBubble } from '@/components/common/ChatBubble';
import { Header } from '@/components/core/navigation/Header';
import { Icon } from '@/components/common/Icon';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';

// Mock: datos del médico
const doctorName = 'Dr. Fermín Cardenas';
const doctorPhoto = null; // URL de foto si existe

// Mock: mensajes
const initialMessages = [
  {
    id: 1,
    message: 'Buenas tardes, doctor. Hoy me sentí un poco mareado después de comer, ¿puede revisar mis lecturas?',
    type: 'sender' as const,
    time: '6:00 PM'
  },
  {
    id: 2,
    message: 'Claro, Christian. Ya vi tu registro, tu glucosa bajó un poco más de lo habitual. ¿Comiste algo diferente o a otra hora?',
    type: 'recipient' as const,
    time: '6:03 PM'
  },
  {
    id: 3,
    message: 'Sí, comí más tarde de lo normal porque estaba ocupado. Pero ya me siento mejor.',
    type: 'sender' as const,
    time: '6:03 PM'
  },
  {
    id: 4,
    message: 'Me alegra. Trata de mantener tus horarios lo más estables posible. Si esto se repite, podríamos ajustar tu plan.',
    type: 'recipient' as const,
    time: '6:10 PM'
  },
  {
    id: 5,
    message: 'Gracias',
    type: 'sender' as const,
    time: '7:17 PM'
  },
];

export default function DoctorChatScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState(initialMessages);
  const [messageText, setMessageText] = useState('');

  const handleSend = () => {
    if (messageText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        message: messageText.trim(),
        type: 'sender' as const,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessageText('');
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header personalizado con foto del médico */}
      <View className="bg-primary-500 pt-12 pb-4 px-4">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialCommunityIcons 
              name="arrow-left" 
              size={24} 
              color="#FFFFFF"
            />
          </TouchableOpacity>
          
          {/* Foto del médico */}
          <View className="w-10 h-10 rounded-full bg-gray-300 items-center justify-center overflow-hidden">
            {doctorPhoto ? (
              <Image source={{ uri: doctorPhoto }} className="w-full h-full" />
            ) : (
              <Body className="text-white">F</Body>
            )}
          </View>
          
          {/* Nombre del médico */}
          <Body className="text-white font-semibold">{doctorName}</Body>
        </View>
      </View>

      {/* Área de mensajes */}
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView
          className="flex-1 px-4 pt-4"
          contentContainerClassName="pb-4"
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              id={msg.id}
              message={msg.message}
              type={msg.type}
              time={msg.time}
              avatarSource={msg.type === 'recipient' ? doctorPhoto : undefined}
            />
          ))}
        </ScrollView>

        {/* Input de mensaje */}
        <View className="px-4 pb-4 pt-2 bg-gray-50">
          <View className="flex-row items-center gap-2">
            <View className="flex-1 bg-white rounded-2xl border border-gray-300">
              <TextInput
                className="px-4 py-3 text-gray-700"
                placeholder="Envía un mensaje"
                placeholderTextColor="#62748E"
                value={messageText}
                onChangeText={setMessageText}
                multiline
                style={{ maxHeight: 100 }}
              />
            </View>
            
            {/* Botón adjuntar */}
            <TouchableOpacity className="w-12 h-12 rounded-full bg-primary-500 items-center justify-center">
              <Icon name="paperclip" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            
            {/* Botón enviar */}
            <TouchableOpacity 
              className="w-12 h-12 rounded-full bg-primary-500 items-center justify-center"
              onPress={handleSend}
            >
              <Icon name="send" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

