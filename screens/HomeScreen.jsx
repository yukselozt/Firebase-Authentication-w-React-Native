import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../firebase";

const HomeScreen = () => {
  return (
    <View>
      <Button title="Sign Out" onPress={() => FIREBASE_AUTH.signOut()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
