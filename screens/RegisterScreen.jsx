import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Dropdown } from "react-native-element-dropdown";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { addDoc, collection } from "firebase/firestore";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../firebase";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your firstname :)"),
  lastName: Yup.string().required("Please enter your lastname :)"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email :)"),
  password: Yup.string()
    .min(5)
    .max(15)
    .required("Please enter your password :)"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please re-enter your password"),
  gender: Yup.string().required("Please enter your gender :)"),
  // dateOfBirth:Yup.date().required('Please enter your birthday :)')
});

const RegisterScreen = () => {
  const auth = FIREBASE_AUTH;

  const handleSignUp = async (values) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      // const userCredentials = addDoc(collection(FIRESTORE_DB, "users"), {
      //   title: "testtest",
      //   done: false,
      // });
      // console.log("user : " + userCredentials);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Formik
        initialValues={{
          firstName: null,
          lastName: null,
          email: null,
          password: null,
          confirmPassword: null,
          gender: null,
        }}
        validationSchema={RegisterSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldTouched,
          isValid,
          handleSubmit,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.fieldName}>First Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  value={values.firstName}
                  onChangeText={handleChange("firstName")}
                  onBlur={() => setFieldTouched("firstName")}
                />
                {touched.firstName && errors.firstName && (
                  <Text style={styles.errorTxt}>{errors.firstName}</Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.fieldName}>Last Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  value={values.lastName}
                  onChangeText={handleChange("lastName")}
                  onBlur={() => setFieldTouched("lastName")}
                />
                {touched.lastName && errors.lastName && (
                  <Text style={styles.errorTxt}>{errors.lastName}</Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.fieldName}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  autoCapitalize="none"
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorTxt}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.fieldName}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  autoCapitalize="none"
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorTxt}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.fieldName}>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={() => setFieldTouched("confirmPassword")}
                  autoCapitalize="none"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorTxt}>{errors.confirmPassword}</Text>
                )}
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.fieldName}>Gender</Text>
                <Dropdown
                  style={styles.input}
                  labelField="label"
                  valueField="value"
                  data={[
                    { label: "Erkek", value: "Erkek" },
                    { label: "Kadın", value: "Kadın" },
                    {
                      label: "Belirtmek İstemiyorum",
                      value: "Belirtmek İstemiyorum",
                    },
                  ]}
                  placeholder="Gender"
                  value={values.gender}
                  onChange={async (item) => {
                    await setFieldTouched("gender");
                    handleChange("gender")(item.value);
                  }}
                />
                {touched.gender && errors.gender && (
                  <Text style={styles.errorTxt}>{errors.gender}</Text>
                )}
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  handleSignUp(values);
                }}
                disabled={!isValid}
                style={[
                  styles.button,
                  isValid ? {} : { backgroundColor: "gray" },
                ]}
              >
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  inputContainer: {
    width: "98%",
    marginBottom: 16,
  },
  input: {
    height: 45,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  inputWrapper: {
    marginBottom: 25,
  },
  buttonContainer: {
    width: "98%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
  fieldName: {
    fontSize: 13,
  },
  errorTxt: {
    color: "red",
    fontSize: 11,
  },
  button: {
    height: 45,
    backgroundColor: "blue",
    padding: 10,
    width: "100%",
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {},
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
export default RegisterScreen;
