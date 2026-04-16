import { ClerkProvider, ClerkLoaded } from "@clerk/expo";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors"; // Adjust path if needed
import { tokenCache } from "@clerk/expo/token-cache";



const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

console.log(
  "Clerk Publishable Key:",
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
);

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

