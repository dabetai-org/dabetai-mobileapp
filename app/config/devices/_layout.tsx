// app/(home)/config/devices/_layout.tsx
import { Stack } from "expo-router";

export default function ConfigDevicesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}