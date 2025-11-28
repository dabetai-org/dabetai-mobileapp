// app/doctor/_layout.tsx
import { Stack } from "expo-router";

export default function DoctorLayout() {
  return (
    <Stack>
      {/* Pantalla principal de médico */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Chat con médico */}
      <Stack.Screen
        name="chat"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Flujo de vinculación */}
      <Stack.Screen
        name="link"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

