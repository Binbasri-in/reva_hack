import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import axios from "axios";

const Number = ({navigation}) => {
  const handleUrlChange = (text) => {
    setUrl(text);
  };
  
  const handleButtonClick = () => {
    ismalicious();
  };
  const [url, setUrl] = useState("");
  const [vulnerabilities, setVulnab] = useState([]);
  const ismalicious = () => {
    fetch("https://www.ipqualityscore.com/api/json/phone/9iPPy5URQZ7s4Bk4KbU37T0uPPKPloWU/+91"+url)
      .then(resp => resp.json())
      .then(data => {
        if (Array.isArray(data)) {
          setVulnab(data);
        console.log(vulnerabilities);
        } else {
          const result = [data];
          setVulnab(result);
        console.log(vulnerabilities);

        }
        // Process the data or update the state accordingly
      })
      .catch(error => {
        console.log(error);
        // Handle any errors that occurred during the fetch request
      });
  };
  
  const scanWebsite = () => {

    // Perform vulnerability scanning logic here
    // This is where you would integrate with a vulnerability scanning library or API
    // For simplicity, let's assume vulnerabilities are returned as an array of objects
    const mockVulnerabilities = [
      {
        id: 1,
        title: "Cross-Site Scripting (XSS)",
        explanation:
          "XSS allows an attacker to execute malicious scripts on web pages viewed by other users.",
      },
      {
        id: 2,
        title: "SQL Injection",
        explanation:
          "SQL Injection allows an attacker to manipulate a database by injecting malicious SQL code.",
      },
      {
        id: 3,
        title: "Insecure Direct Object References",
        explanation:
          "Insecure Direct Object References allow an attacker to access unauthorized resources or data.",
      },
    ];

    setVulnab(mockVulnerabilities);
  };

  const handleVulnerabilityPress = (vulnerability) => {
    Alert.alert(vulnerability.title, vulnerability.explanation, [
      { text: "Close", onPress: () => {} },
    ]);
  };

  const handleClear = () => {
    setUrl("");
    setVulnab([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <MaskedView
          maskElement={
            <Text
              style={[styles.headerTitle, { backgroundColor: "transparent" }]}
            >
              Number Scanner
            </Text>
          }
        >
          <LinearGradient
            colors={["red", "black"]}
            start={[0.5, 0]}
            end={[1, 1]}
            style={styles.yellowHeader}
          >
            <Text style={[styles.headerTitle, { opacity: 0 }]}> Number Scanner</Text>
          </LinearGradient>
        </MaskedView>
      </View>

      <TextInput
      style={styles.input}
      placeholder="Enter you contact number"
      onChangeText={handleUrlChange}
      value={url}
    />


      <TouchableOpacity onPress={handleButtonClick} style={styles.scan}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          Scan
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
        {vulnerabilities.map((item, index) => (
          <View key={index} style={styles.item}>
            {Object.entries(item).map(([key, value]) => (
              <View key={key} style={styles.row}>
                <Text style={styles.key}>{key}: </Text>
                <Text style={styles.value}>{JSON.stringify(value)}</Text>
              </View>
            ))}
          </View>
        ))}
            </View>
      </ScrollView>

      {vulnerabilities.length > 0 && (
        <>
          <TouchableOpacity onPress={handleClear} style={styles.clear}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>Clear</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

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
    marginLeft:60,
    alignSelf:"center"
  },
  headerMenuIcon: {
    color: "#000",
    top: 10,
    marginLeft: 20,
  },
  yellowHeader: {
    textAlign: "center",
    marginTop: -5,
    textAlign:"center"
  },

  input: {
    height: 40,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 25,
    width: 300,
    alignSelf: "center",
    padding:5,
    borderRadius:10
  },
  scan: {
    backgroundColor: "black",
    width: 100,
    borderRadius: 20,
    alignSelf: "center",
    padding: 5,
    height: 40,
  },
  vulnerabilitiesContainer: {
    marginTop: 20,
    marginLeft:10
  },
  vulnerabilitiesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  vulnerabilityItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  vulnerabilityTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  clear:{
    backgroundColor: "black",
    width: 200,
    borderRadius: 20,
    alignSelf: "center",
    padding: 5,
    height: 40,
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#eee',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  key: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {},
});

export default Number;
