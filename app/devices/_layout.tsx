// app/(home)/devices/_layout.tsx
import { Stack } from "expo-router";

export default function DevicesLayout() {
  return (
    <Stack>
      {/* Pantalla principal de dispositivos */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Detalle de un dispositivo específico */}
      <Stack.Screen
        name="[deviceId]"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Flujo de conexión de dispositivos */}
      <Stack.Screen
        name="connect"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}