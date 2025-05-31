import React from 'react';
import { View, Text, StyleSheet,Linking ,TouchableOpacity,ScrollView,Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const Encryption = ({navigation}) => {
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
        <MaskedView
          maskElement={
            <Text
              style={[styles.headerTitle, { backgroundColor: "transparent" }]}
            >
             EXTENSIONS
            </Text>
          }
        >
          <LinearGradient
            colors={["red", "black"]}
            start={[0.5, 0]}
            end={[1, 1]}
            style={styles.yellowHeader}
          >
            <Text style={[styles.headerTitle, { opacity: 0 }]}>EXTENSIONS</Text>
          </LinearGradient>
        </MaskedView>
      </View>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
  <Text style={styles.heading}>Double Extension and Malicious Files </Text>
  <Text style={styles.heading1}>What is a Double Extension? </Text>
  <Text style={styles.description}>• A double extension refers to a file name that has two file extensions separated by a dot. For example, example_file.tar.gz is a file with a double extension because it has both .tar and .gz extensions. </Text>
  <Text style={styles.heading1}>Exploiting Double Extension </Text>
  <Text style={styles.description}>• Malicious actors often utilize double extension filenames to deceive users and bypass security measures. By using a legitimate file extension in the first part and a malicious extension in the second part, they can trick users into thinking a file is harmless while disguising it as a malicious file type.</Text>
  <Text style={styles.heading1}>Detecting Double Extension</Text>
  <Text style={styles.description}>• To detect a double extension, we can analyze the file name and check if it contains two extensions separated by a dot. However, it's important to note that this approach solely relies on the file name and does not guarantee the actual content's integrity. </Text>
  <Text style={styles.heading1}>Content Scanning</Text>
  <Text style={styles.description}>• To further analyze the file for potential malicious content, one can scan the file's content to check for specific patterns or signatures. This involves reading the file's content and searching for known patterns associated with malware or malicious code. However, this approach requires advanced analysis techniques and is specific to the file type and potential threats being targeted. </Text>
  </ScrollView>
  </View>
  )
}

export default Encryption

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
        marginRight:120
       
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
        marginLeft:10
      },
      heading1:{
        fontSize: 18,
       fontWeight: 'bold',
        marginBottom: 16,
        //paddingTop:100,
        marginLeft:10,
      },
      description: {
        fontSize: 18,
        color: '#333',
        backgroundColor:"#FFF6F6",
       // margin:5,
       marginVertical:10,
       marginLeft:10
      },
})