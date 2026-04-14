import { View, Text } from "react-native";
const SignUpScreen = () => {

const router = useRouter();
const { isLoaded, signUp } = usesignUp();
const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");
const [ showPassword, setShowPassword ] = useState(false);  
const [ loading, setLoading ] = useState(false);
const [pendingVerification, setPendingVerication] = useState();


  return (
    <View>
      <Text>
        
        SignUp
    
      </Text>
    </View>
  )
};

export default SignUpScreen;