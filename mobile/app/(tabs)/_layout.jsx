import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/expo";

const TabsLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (!isSignedIn) return <Redirect href="/(auth)/sign-in" />;

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default TabsLayout;  