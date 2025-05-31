import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { ScrollView } from "react-native";

const AboutUsPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} style={styles.headerMenuIcon} />
        </TouchableOpacity>
       <Text style={styles.headerTitle}>ABOUT US!</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../Images/SplashLogo2.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Welcome to Cyber Buddy!</Text>
          <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                At Cyber Buddy, we strive to provide innovative solutions for a safer
                and connected digital world.
              </Text>
              <Text style={styles.description}>
                Cyber Buddy is a cybersecurity Application that helps SMBs be secure. It
                provides a comprehensive Cyber Situational Awareness solution for SMBs &
                startups to protect their digital assets. We assist entrepreneurs to
                focus on their businesses while we will ensure their systems are safe.
                Our automated security monitoring infrastructure continuously monitors
                your web presence to ensure safety against hackers & human errors.
              </Text>
              <Text style={styles.description}>
                With Cyber Buddy, you can enjoy peace of mind while exploring the vast
                possibilities of the digital realm.
              </Text>
          </View>
          <Text style={styles.footerText}>
            © 2023 Cyber Buddy. All rights reserved.
          </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
      logo: {
        width: 200, 
        height: 200,
        marginBottom: 30, 
        alignSelf: "center",
      },
      header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center", 
        paddingTop: 10,
        height: 70,
        backgroundColor: "transparent",
      },
      headerTitle: {
        fontSize: 30,
        color: "#333333", 
        marginTop:5,
        fontWeight: "bold",
        textAlign:"center",
        right:50
      },
      headerMenuIcon: {
        color: "#333333",
        marginRight:100,
        marginTop:10
      },
      container: {
        flex: 1,
        backgroundColor: "#f9f9f9f9",
        borderRadius: 15, 
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5, 
        shadowRadius: 4,
        elevation: 10,
        margin: 20, 
        marginTop:40
      },
      title: {
        fontSize: 28, 
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20, 
        textDecorationLine: "underline",
        color: "#333333",
        marginTop: -40,
      },
      descriptionContainer: {
        flex: 1,
        justifyContent: "space-evenly", 
      },
      description: {
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 10,
        color: "#555555",
      },
      footerText: {
        width: "100%",
        backgroundColor: "#ffffff", 
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "flex-end",
        marginTop: 45,
        color: "#555555", 
        borderBottomEndRadius:20
      },
      
  });
  
export default AboutUsPage;
