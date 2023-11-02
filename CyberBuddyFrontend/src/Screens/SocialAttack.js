import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const Social = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Ionicons name="menu" size={24} style={styles.headerMenuIcon} />
        </TouchableOpacity>
        <MaskedView
          maskElement={
            <Text
              style={[styles.headerTitle, { backgroundColor: "transparent" }]}
            >
              Social Attack
            </Text>
          }
        >
          <LinearGradient
            colors={["red", "black"]}
            start={[0.5, 0]}
            end={[1, 1]}
            style={styles.yellowHeader}
          >
            <Text style={[styles.headerTitle, { opacity: 0 }]}>Social Attack</Text>
          </LinearGradient>
        </MaskedView>
      </View>

      <View style={{ marginLeft: 10 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.heading}>Social Engineering Attacks </Text>
          <Text style={styles.heading1}>Baiting:</Text>
          <Text style={styles.description}>
            • The attacker lures the target with an enticing offer or reward,
            such as a malware-infected USB drive, to manipulate them into taking
            a specific action.{" "}
          </Text>
          <Text style={styles.heading1}>ScareWare: </Text>
          <Text style={styles.description}>
            • Attackers create a sense of urgency or fear by presenting false
            security threats or system errors, tricking users into downloading
            malicious software or purchasing unnecessary security products.
          </Text>
          <Text style={styles.heading1}>Pretexting:</Text>
          <Text style={styles.description}>
            • Attackers gain the trust of the target by creating a false
            scenario or pretext, often impersonating someone in authority, to
            trick them into revealing sensitive information or granting
            unauthorized access.{" "}
          </Text>
          <Text style={styles.heading1}>Phishing:</Text>
          <Text style={styles.description}>
            • Attackers use fraudulent emails, messages, or websites that appear
            legitimate to deceive recipients into providing sensitive
            information, like passwords or credit card details.
          </Text>
          <Text style={styles.heading1}>Spear Phishing:</Text>
          <Text style={styles.description}>
            • Attackers customize their phishing messages to specific
            individuals or organizations, leveraging personal details to create
            highly convincing messages that increase the chances of success.
          </Text>
          <Text style={styles.heading3}>
            These techniques all rely on manipulating human behavior and trust
            to carry out social engineering attacks, making it essential to be
            aware of and educated about them to prevent falling victim to such
            schemes.
          </Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text> 
          <Text>{""}</Text> 
        </ScrollView>
      </View>
    </View>
  );
};

export default Social;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    height: 70,
    backgroundColor: "#fff",
    elevation: 50,
  },
  headerTitle: {
    fontSize: 30,
    color: "#000",
    marginTop: 18,
    paddingLeft: 60,
  },
  headerMenuIcon: {
    color: "#000",
    top: 10,
    marginLeft: 20,
  },
  yellowHeader: {
    textAlign: "center",
    marginTop: -5,
    marginRight:90
   
  },
  scrollContent: {
    flexGrow: 1,
    //padding: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    paddingTop: 10,
  },
  heading1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    //paddingTop:100,
    marginRight: 7,
  },
  description: {
    fontSize: 18,
    color: "#333",
    backgroundColor: "#FFF6F6",
    marginVertical: 10,
    justifyContent:"center",
    alignItems:"center"
  },
  heading3: {
    fontSize: 18,
    color: "#333",
    // backgroundColor:"#FFF6F6",
    // margin:5,
    marginVertical: 10,
  },
});
