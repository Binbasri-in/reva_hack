import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./normal/Splash";
import Parent from "./normal/Parent";
import Login from "./Login";
import Phone from "./SancharSarathi";
import Malacious from "./Malacious";
import Encryption from "./Encryption";
import Number from "./Number1";
import Sofia from "./Sofia";
import Decrypt from "./Decrypt";
import Social from "./SocialAttack";
import Metasploit from "./Metasploit";
import Mask from "./Otp";
import Delete from "./Delete";
import Dencoder from "./DoubleEncoder";
import Notification from "./Notification";
import Search from "./Search";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Encryption"
          component={Encryption}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Phone"
          component={Phone}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Malacious"
          component={Malacious}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Number"
          component={Number}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sofia"
          component={Sofia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Decrypt"
          component={Decrypt}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mask"
          component={Mask}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Delete"
          component={Delete}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Metasploit"
          component={Metasploit}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Social"
          component={Social}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dencoder"
          component={Dencoder}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
