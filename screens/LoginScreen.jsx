import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.imgContainer}>
        <Image
          style={{ tintColor: "black" }}
          source={require("../assets/logo.png")}
          // source={{
          //   uri: "https://www.pelliniturkiye.com/assets/images/pellini-logo-250x114.png",
          // }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.fieldName}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
        <Text style={styles.fieldName}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={isPasswordSecure ? true : false}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={loading ? true : false}
          style={styles.button}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={loading ? true : false}
          style={styles.button}
          // onPress={handleSignUp}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Create An Account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  imgContainer: {
    width: "100%",
    maxWidth: 400,
    position: "absolute",
    top: 0,
    alignItems: "center",
  },
  inputContainer: {
    width: "98%",
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 5,
  },
  buttonContainer: {
    width: "98%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    width: "100%",
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
