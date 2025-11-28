// app/(home)/devices/connect/_layout.tsx
import { Stack } from "expo-router";

export default function ConnectLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right', // Animación consistente
        gestureEnabled: false, // Deshabilitar gesto de regreso para mantener el flujo
      }}
    >
      {/* Paso 1: Seleccionar dispositivo */}
      <Stack.Screen
        name="index"
        options={{
          gestureEnabled: true, // Permitir regresar solo en la primera pantalla
        }}
      />
      
      {/* Paso 1b: Instrucciones del dispositivo */}
      <Stack.Screen
        name="instructions"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Paso 2: Buscando dispositivo */}
      <Stack.Screen
        name="searching"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Paso 3: Emparejando dispositivo */}
      <Stack.Screen
        name="pairing"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Paso 3b: Emparejando dispositivo específico */}
      <Stack.Screen
        name="pairing-device"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Paso 4: Sincronizando datos */}
      <Stack.Screen
        name="syncing"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Paso 4b: Progreso de sincronización */}
      <Stack.Screen
        name="syncing-progress"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Paso 4c: Sincronización completada */}
      <Stack.Screen
        name="syncing-complete"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Paso 5: Configuración completada */}
      <Stack.Screen
        name="setup-complete"
        options={{
          headerShown: false,
          gestureEnabled: true, // Permitir regresar al finalizar
        }}
      />
      
      {/* Pantalla de error */}
      <Stack.Screen
        name="pairing-error"
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
      
      {/* Pantalla de error de sincronización */}
      <Stack.Screen
        name="syncing-error"
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
    </Stack>
  );
}