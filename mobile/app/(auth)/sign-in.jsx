import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text } from "react-native";

import { authStyles } from "../../assets/styles/auth.styles";


const SignInScreen = () => {

  const  router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn(); 

  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState("");
  const [ showPassword, setShowPassword ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const handleSignIn = async () => {
    if(!email || !password){
      Alert.alert("Error","Please fill in all fields")
    } 

    if(isLoaded) return;

    setLoading(true)

    try {
     const signInAttempt =  await signIn.create({
        identifier:email,
        password
      })

      if(signInAttempt.status === "complete") {
        await setActive({session:signInAttempt.createdSessionId})

      } else {
        Alert.alert("Error","Sign up failed. Please try again.");
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
      
    } catch (err) {
      Alert.alert("Error", error.errors?.[0]?.message || "Sign in failed");
      console.error(JSON.stringify(err, null, 2));
      
    } finally {
      setLoading(false);

    }

  };

  return (
    <View style={authStyles.container} >
      <Text>Sign In Sreen</Text>
    </View>
  );
};

export default SignInScreen;