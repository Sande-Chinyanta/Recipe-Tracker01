import { View, Text, ScrollView } from "react-native";
import { authStyles } from "../../assets/styles/auth.styles";


const HomeScreen = () => {
  return (
    <ScrollView
    contentContainerStyle={authStyles.scrollContent}
     keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={false}
    >
    <View>
      <Text>HomeScreen</Text>
    </View>
    </ScrollView>
  )
};

export default HomeScreen;