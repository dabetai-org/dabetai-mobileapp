// app/doctor/link/_layout.tsx
import { Stack } from "expo-router";

export default function DoctorLinkLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: false,
      }}
    >
      {/* Paso 1: Pedir código */}
      <Stack.Screen
        name="index"
        options={{
          gestureEnabled: true,
        }}
      />
      
      {/* Paso 2: Introducir código */}
      <Stack.Screen
        name="enter-code"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Paso 3: Confirmar datos del médico */}
      <Stack.Screen
        name="confirm"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Paso 4: Elegir datos a compartir */}
      <Stack.Screen
        name="share-data"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Paso 5: Vinculando */}
      <Stack.Screen
        name="linking"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Paso 6: Vinculación exitosa */}
      <Stack.Screen
        name="setup-complete"
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
      
      {/* Error: Vinculación fallida */}
      <Stack.Screen
        name="linking-error"
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
    </Stack>
  );
}

