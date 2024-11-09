import { Header } from "../components/header";
import "../styles/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Header />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="messages" options={{ headerShown: false }} />
    </Stack>
  );
}
