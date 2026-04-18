import { useSignUp } from "@clerk/expo";
import { useState } from "react";
import {
  View,
  Text,
  Alert,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Image } from "expo-image";
import { authStyles } from "../../assets/styles/auth.styles";
import { COLORS } from "../../constants/colors";

const VerifyEmail = ({ email, onBack }) => {
  const { signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerification = async () => {
  setLoading(true);
  try {
    await signUp.verifications.verifyEmailCode({ code });

    if (signUp.status === "complete") {
      await signUp.finalize({
        navigate: async ({ session }) => {
          await setActive({ session: session.id });
        },
      });
    } else {
      // Try finalizing anyway
      await signUp.finalize({
        navigate: async ({ session }) => {
          await setActive({ session: session.id });
        },
      });
    }
  } catch (err) {
    const errorCode = err?.error?.errors?.[0]?.code;
    if (errorCode === "session_exists") {
      // Already signed in — just redirect
      return;
    }
    Alert.alert("Error", err?.errors?.[0]?.message || err?.message || "Verification failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <View style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "android" ? 64 : 0}
        style={authStyles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={authStyles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={authStyles.imageContainer}>
            <Image
              source={require("../../assets/images/i3.png")}
              style={authStyles.image}
              contentFit="contain"
            />
          </View>

          <Text style={authStyles.title}>Verify Your Email</Text>
          <Text style={authStyles.subtitle}>
            {"We've sent a code to "}{email}
          </Text>

          <View style={authStyles.formContainer}>
            <View style={authStyles.inputContainer}>
              <TextInput
                style={authStyles.textInput}
                placeholder="Enter verification code"
                placeholderTextColor={COLORS.textLight}
                value={code}
                onChangeText={setCode}
                keyboardType="number-pad"
              />
            </View>

            <TouchableOpacity
              style={[authStyles.authButton, loading && authStyles.buttonDisabled]}
              onPress={handleVerification}
              disabled={loading}
              activeOpacity={0.8}
            >
              {loading ? (
                <ActivityIndicator color={COLORS.white} />
              ) : (
                <Text style={authStyles.buttonText}>Verify Email</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={authStyles.linkContainer}
              onPress={onBack}
            >
              <Text style={authStyles.link}>Back to Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default VerifyEmail;