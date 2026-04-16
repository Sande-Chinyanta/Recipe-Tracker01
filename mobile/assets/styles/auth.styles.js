import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLORS } from "../../constants/colors";

const { height, width } = Dimensions.get("window");

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingBottom: 30,
    justifyContent: "center",
  },

  /* Image Section */
  imageContainer: {
    height: height * 0.28,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: width * 0.75,
    height: width * 0.75,
    resizeMode: "contain",
  },

  /* Titles */
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text,
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: COLORS.textLight,
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },

  /* Form */
  formContainer: {
    width: "100%",
  },

  inputContainer: {
    marginBottom: 18,
    position: "relative",
  },

  textInput: {
    fontSize: 16,
    color: COLORS.text,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: COLORS.card || COLORS.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  textInputFocused: {
    borderColor: COLORS.primary,
  },

  /* Password Visibility Icon */
  eyeButton: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -10 }],
    padding: 4,
  },

  /* Authentication Button */
  authButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 18,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    // Elevation for Android
    elevation: 3,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.white,
    textAlign: "center",
  },

  /* Links */
  linkContainer: {
    alignItems: "center",
    marginTop: 5,
    paddingBottom: 10,
  },

  linkText: {
    fontSize: 15,
    color: COLORS.textLight,
  },

  link: {
    color: COLORS.primary,
    fontWeight: "600",
  },

  /* Divider (Optional) */
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },

  dividerText: {
    marginHorizontal: 10,
    color: COLORS.textLight,
    fontSize: 14,
  },

  /* Loader Screen */
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },

  loaderText: {
    marginTop: 12,
    fontSize: 16,
    color: COLORS.textLight,
  },
});