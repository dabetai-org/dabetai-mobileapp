// app/applications/_layout.tsx
import { Stack } from "expo-router";

export default function ApplicationsLayout() {
  return (
    <Stack>
      {/* Pantalla principal de aplicaciones */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Detalle de una aplicación específica */}
      <Stack.Screen
        name="[applicationId]"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Setup completado */}
      <Stack.Screen
        name="setup-complete"
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
      
      {/* Flujo de conexión de aplicaciones */}
      <Stack.Screen
        name="connect"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

