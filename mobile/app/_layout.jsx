import { ClerkProvider } from "@clerk/expo";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { tokenCache } from "@clerk/expo/token-cache";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Missing Clerk Publishable Key");
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <SafeAreaProvider>
        <Slot />
      </SafeAreaProvider>
    </ClerkProvider>
  );
}