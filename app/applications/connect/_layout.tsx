// app/(home)/applications/connect/_layout.tsx
import { Stack } from "expo-router";

export default function ApplicationsConnectLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: false,
      }}
    >
      {/* Seleccionar aplicación */}
      <Stack.Screen
        name="index"
        options={{
          gestureEnabled: true,
        }}
      />
      
      {/* Autorizando con la aplicación */}
      <Stack.Screen
        name="authorizing"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Autorización exitosa */}
      <Stack.Screen
        name="authorization-success"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Autorización fallida */}
      <Stack.Screen
        name="authorization-error"
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
      
      {/* Importando datos */}
      <Stack.Screen
        name="importing"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Importación exitosa */}
      <Stack.Screen
        name="import-success"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Importación fallida */}
      <Stack.Screen
        name="import-error"
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
    </Stack>
  );
}