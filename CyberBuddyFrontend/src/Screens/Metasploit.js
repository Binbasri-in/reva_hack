import React from 'react';
import { View, Text, StyleSheet,ScrollView,Image, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const Metasploit = () => {
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
              METASPLOIT
            </Text>
          }
        >
          <LinearGradient
            colors={["red", "black"]}
            start={[0.5, 0]}
            end={[1, 1]}
            style={styles.yellowHeader}
          >
            <Text style={[styles.headerTitle, { opacity: 0 }]}>METASPLOIT</Text>
          </LinearGradient>
        </MaskedView>
      </View>


        <View style={{marginLeft:10}}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                  <Text style={styles.heading}>Metasploit:</Text>
                  <Text style={styles.description}>
                  • Metasploit is a popular open-source framework for developing, testing, and executing exploits against a target system. It is widely used by security professionals, penetration testers, and red teamers to identify and exploit vulnerabilities in networked systems.
            {"\n"}
            {"\n"}
                  • The Metasploit framework provides a comprehensive platform for exploiting vulnerabilities, automating common tasks, and creating custom payloads. It includes a large collection of exploits, payloads, and auxiliary modules that can be used to target various systems, services, and applications.
            {"\n"}
            {"\n"}
                  • In addition to its use in penetration testing, Metasploit can also be used to educate IT professionals and students about the dangers of cyber threats and the importance of securing systems.
            {"\n"}
            {"\n"}
                  • It's important to note that the use of Metasploit and similar tools requires a thorough understanding of their capabilities and limitations, as well as a deep knowledge of computer security and the potential consequences of exploiting vulnerabilities. Improper use of Metasploit can cause harm to systems and networks, and potentially lead to legal consequences.
            {"\n"}
            {"\n"}
            
                  </Text>
                  <View style={{ marginBottom: 60}}>
                  <Image
             source={require('../Images/Picture25.jpg')}
              style={{ width: 350, height: 350,alignSelf:"center"}}
              resizeMode="contain"
              onLoad={() => console.log('Image loaded successfully')}
              onError={() => console.log('Error loading image')}
            />
            </View>
                  </ScrollView>
        </View>
      </View>
  )
}

export default Metasploit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontWeight: 'bold',
        marginBottom: 16,
        paddingTop:10,
        marginRight:7,
      },
      description: {
        fontSize: 18,
        color: '#333',
        backgroundColor:"#FFF6F6",
       // margin:5,
       marginVertical:10,
      },
})