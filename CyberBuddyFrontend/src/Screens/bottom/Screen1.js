import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Animated } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Blackcircle from "../../Components/blackcircle";

const Screen1 = ({ navigation }) => {
  const nameAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startNameAnimation();
  }, []);

  const startNameAnimation = () => {
    Animated.sequence([
      Animated.delay(500),
      Animated.timing(nameAnimation, {
        toValue: 1,
        duration: 5500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const nameOpacity = nameAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const nameTranslateX = nameAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  const nameText = "WELCOME, RAGHAV KUMAR JHA";

  const createBlackcircle = (text, icon, navigateTo) => {
    return (
      <View style={styles.blueContainer}>
        <Blackcircle
          onPress={() => navigation.navigate(navigateTo)}
          icon={icon}
          text={text}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Feather name="menu" size={24} color="white" style={styles.headerMenuIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>CYBER BUDDY</Text>
        <View style={styles.iconsContainer}>
          <Feather name="search" size={24} color="white" style={styles.icon}  onPress={()=>navigation.navigate("Search")}/>
          <Feather name="bell" size={24} color="white" style={styles.icon} onPress={()=>navigation.navigate("Notification")}/>
        </View>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <Image source={require("../../Images/homescreen2.jpeg")} style={styles.headerImage} resizeMode="cover" />
        <Animated.Text style={[styles.nameText, { opacity: nameOpacity }, { transform: [{ translateX: nameTranslateX }] }]}>{nameText}</Animated.Text>
          
          
          
       {/* Box design */}
        <View style={{ flexDirection: "row" }}>
          {createBlackcircle("Malicious Link", <Feather name="link" size={40} color="#F30A9A" />, "Malacious")}
          {createBlackcircle("Image Encryption", <MaterialCommunityIcons name="image" size={40} color="#F30A9A" />, "Sofia")}
        </View>
        
        <View style={{ flexDirection: "row" }}>
          {createBlackcircle("Ph.Number", <Feather name="search" size={40} color="#F30A9A" />, "Number")}
          {createBlackcircle("Sarathi", <Feather name="phone-call" size={40} color="#F30A9A" />, "Phone")}
        </View>
        
        {/* Text part after design */}
        <View style={{  marginBottom: 50 }}>
          <Text style={styles.textHeader}>How secure is your website?</Text>
          <Text style={styles.textSubHeader}>Get analysis within minutes</Text>
          <Text style={styles.textItem}>~ Web Security Analysis</Text>
          <Text style={styles.textItem}>~ Cloud Architecture and Security Analysis</Text>
          <Text style={styles.textItem}>~ Database Analysis</Text>
          <Text style={styles.textItem}>~ System and API Security Analysis</Text>
        </View>
        

        {/* Box design */}
        <View style={{ flexDirection: "row" }}>
          {createBlackcircle("DELETE ME", <Feather name="cloud-off" size={40} color="#F30A9A" />, "Delete")}
          {createBlackcircle("OTP BYPASS", <Feather name="message-circle" size={40} color="#F30A9A" />, "Sofia")}
        </View>
        
        <View style={{ flexDirection: "row" }}>
          {createBlackcircle("Metasploit", <MaterialCommunityIcons name="skull" size={40} color="#F30A9A" />, "Metasploit")}
          {createBlackcircle("Social Engineering Attack", <Feather name="users" size={40} color="#F30A9A" />, "Social")}
        </View>
        
     
        <View style={{ flexDirection: "row" }}>
          {createBlackcircle("DOUBLE EXTENSION", <Feather name="lock" size={40} color="#F30A9A" />, "Sofia")}
          {createBlackcircle("DOUBLE ENCODER", <Feather name="lock" size={40} color="#F30A9A" />, "Dencoder")}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010220",
  },
  headerImage: {
    height: 400,
    width: 400,
  },
  scrollViewContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    top: -30,
    color: "white",
    textAlign: "center",
  },
  headerMenuIcon: {
    top: 20,
    color: "white",
  },
  header: {
    backgroundColor: "#010220",
    padding: 10,
    paddingBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 15,
    fontSize: 24,
    elevation:20,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 20,
    marginRight: 70,
  },
  iconsContainer: {
    flexDirection: "row",
    top: 20,
  },
  blueContainer: {
    height: 180,
    width: "50%",
    borderRadius: 10,
  },
  textHeader: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    alignSelf:"center"
  },
  textSubHeader: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 15,
    color: "white",
    marginLeft:15
  },
  textItem: {
    fontSize: 15,
    marginTop: 5,
    color: "white",
    marginLeft:30
  },
});

export default Screen1;
