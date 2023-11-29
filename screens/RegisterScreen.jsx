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
  gender: Yup.string().required("Please enter your gender :)"),
  // dateOfBirth:Yup.date().required('Please enter your birthday :)')
});

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Formik
        initialValues={{
          firstName: null,
          lastName: null,
          email: null,
          password: null,
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
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorTxt}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorTxt}>{errors.password}</Text>
                )}
              </View>

              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Gender"
                  value={values.gender}
                  onChangeText={handleChange("gender")}
                  onBlur={() => setFieldTouched("gender")}
                />
                {touched.gender && errors.gender && (
                  <Text style={styles.errorTxt}>{errors.gender}</Text>
                )}
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {}}
                disabled={!isValid}
                style={styles.button}
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
  errorTxt: {
    color: "red",
    fontSize: 11,
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
export default RegisterScreen;
