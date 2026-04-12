import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}>
      <Text style={styles.text}></Text>

      <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",}}
      
      style={{
        width: 100,
        height: 100,
      }}     
      />

      <TouchableOpacity>

      <Text>CLICK ME PLEASE Text </Text>
      
      </TouchableOpacity>

      <Link href={"/about"}>About page</Link>

      


    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
  text: { color: "red", fontSize: 20 },
});