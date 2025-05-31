import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./Main";
import AboutUsPage from "../About";
import CustomDrawer from "./CustomDrawer";
import Education from "../Education";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
       <Drawer.Screen
        name="About"
        component={AboutUsPage}
        options={{ headerShown: false }}
      />
       <Drawer.Screen
        name="Education"
        component={Education}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
