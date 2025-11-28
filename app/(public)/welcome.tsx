import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/(auth)/register");
  };

  const handleLogin = () => {
    router.push("/(auth)/login");
  };

  const handleTermsPress = () => {
    router.push("/(public)/tyc");
  };

  const handlePrivacyPress = () => {
    router.push("/(public)/privacy");
  };

  return (
    <View className="flex-1 bg-gray-100">
      <View className="flex-1 justify-between px-4 py-8">
        {/* Logo superior */}
        <View className="items-center pt-8">
          <Text className="text-purple-600 font-bold text-3xl">STRONGIFY</Text>
        </View>

        {/* Contenido central */}
        <View className="items-center gap-6">
          {/* Icono principal */}
          <View className="bg-purple-600 rounded-3xl w-32 h-32 items-center justify-center">
            <View className="border-4 border-white rounded-full w-16 h-16 items-end justify-end">
              <View className="bg-white w-4 h-2 rounded-t-full" style={{ marginBottom: -2 }} />
            </View>
          </View>

          {/* Título */}
          <Text className="text-center text-gray-800 font-bold text-2xl">
            ¡Comienza tu{"\n"}transformación!
          </Text>

          {/* Botones */}
          <View className="w-full gap-4 px-4">
            <TouchableOpacity
              onPress={handleRegister}
              className="bg-purple-600 rounded-full py-4 items-center"
            >
              <Text className="text-white font-semibold text-base">Registrarse</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={handleLogin}
              className="border-2 border-purple-600 rounded-full py-4 items-center"
            >
              <Text className="text-purple-600 font-semibold text-base">Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Términos y condiciones */}
        <View className="px-6">
          <Text className="text-center text-xs text-gray-500">
            Continúa solo si estás de acuerdo con nuestros{" "}
            <Text className="text-purple-600" onPress={handleTermsPress}>
              Términos y condiciones
            </Text>{" "}
            y nuestra{" "}
            <Text className="text-purple-600" onPress={handlePrivacyPress}>
              Política de privacidad
            </Text>
            .
          </Text>
        </View>
      </View>
    </View>
  );
}