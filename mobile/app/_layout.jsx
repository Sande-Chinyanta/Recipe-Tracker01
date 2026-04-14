import { ClerkProvider, ClerkLoaded } from "@clerk/expo";
import { Slot } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors"; // Adjust path if needed

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Define tokenCache ONLY ONCE
const tokenCache = {
  async getToken(key) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error("Error saving token:", err);
    }
  },
};

if (!publishableKey) {
  throw new Error(
    "Add your Clerk Publishable Key to the .env file"
  );
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: COLORS.background }}
        >
          <Slot />
        </SafeAreaView>
      </ClerkLoaded>
    </ClerkProvider>
  );
}