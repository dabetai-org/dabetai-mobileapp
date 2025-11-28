// app/(home)/config/applications/_layout.tsx
import { Stack } from "expo-router";

export default function ConfigApplicationsLayout() {
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