import React from 'react';
import { View, Text, StyleSheet,Linking ,TouchableOpacity,ScrollView,Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const Mask = () => {
        const openWebsite = () => {
          const url = 'https://systemweakness.com/bypassing-otp-verification-79785105779'; 
          Linking.openURL(url);
        };
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
              OTP BYPASS
            </Text>
          }
        >
          <LinearGradient
            colors={["red", "black"]}
            start={[0.5, 0]}
            end={[1, 1]}
            style={styles.yellowHeader}
          >
            <Text style={[styles.headerTitle, { opacity: 0 }]}>OTP BYPASS</Text>
          </LinearGradient>
        </MaskedView>
      </View>



        <View style={{marginLeft:10}}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <Text style={styles.heading}>OTP (One-Time Password) bypass</Text>
                <Text style={styles.description}>
                • One of the ways to bypass OTP verification is by handling the response of a request. What you need to do is enter your credentials and put in a fake OTP code and capture the request. Then intercept the response and change the status code to 200, or some boolean from false to true.{"\n"}
                {"\n"}
                • OTP (One-Time Password) bypass refers to methods or techniques used to avoid the security measures implemented by OTP systems. {"\n"}
                <View style={{ marginBottom: 60 }}>
                <Image
           source={require('../Images/Photo11.jpg')}
            style={{ width: 350, height: 350,alignSelf:"center"}}
            resizeMode="contain"
            onLoad={() => console.log('Image loaded successfully')}
            onError={() => console.log('Error loading image')}
          />
          </View>
          • Engaging in OTP bypass is unethical and illegal. It undermines the security measures put in place to protect user accounts and confidential information. Attempting to bypass OTPs can lead to unauthorized access to someone's account, identity theft, financial fraud, and other malicious activities. {"\n"}
          <View style={{ marginBottom: 60}}>
                <Image
           source={require('../Images/photo12.jpg')}
            style={{ width: 400, height: 400, }}
            resizeMode="contain"
            onLoad={() => console.log('Image loaded successfully')}
            onError={() => console.log('Error loading image')}
          />
          </View>
          <Text style={styles.heading3}>Steps:{"\n"}</Text>
          {"\n"}
          • Open Burp Suite and configure your browser to use it as a proxy. Navigate to the signup page of the Royal Enfield website. Fill in all the required information in the signup form, including your email address, username, contact details and password.{"\n"}
          <View style={{ marginBottom: 60}}>
                <Image
           source={require('../Images/photo13.jpg')}
            style={{ width: 400, height: 400, }}
            resizeMode="contain"
            onLoad={() => console.log('Image loaded successfully')}
            onError={() => console.log('Error loading image')}
          />
          </View>
          <View style={{ marginBottom: 60}}>
                <Image
           source={require('../Images/photo15.jpg')}
            style={{ width: 400, height: 400, }}
            resizeMode="contain"
            onLoad={() => console.log('Image loaded successfully')}
            onError={() => console.log('Error loading image')}
          />
          </View>
          • Intercept the HTTP request sent by the website to verify the OTP. Examine the response received from the server. You should see a response indicating the OTP verification status. Modify the response using Burp Suite's Intercept feature. Look for the section of the response that determines the OTP verification result.{"\n"}
          <View style={{ marginBottom: 60}}>
                <Image
           source={require('../Images/Picture5.jpg')}
            style={{ width: 400, height: 400, }}
            resizeMode="contain"
            onLoad={() => console.log('Image loaded successfully')}
            onError={() => console.log('Error loading image')}
          />
          </View>
          • In the code of the response, locate the section that indicates a false OTP verification (possibly with a 404 error). Replace the false result (false and 404) with a successful verification result (false and 200).{"\n"}
          <View style={{ marginBottom: 60}}>
                <Image
           source={require('../Images/Picture6.jpg')}
            style={{ width: 400, height: 400, }}
            resizeMode="contain"
            onLoad={() => console.log('Image loaded successfully')}
            onError={() => console.log('Error loading image')}
          />
          </View>
          •  Forward the modified request to the server using Burp Suite. Check the website's response. If the modified response is accepted, it means you successfully bypassed the OTP verification.{"\n"}
          <View style={{ marginBottom: 60}}>
                <Image
           source={require('../Images/photo12.jpg')}
            style={{ width: 400, height: 400, }}
            resizeMode="contain"
            onLoad={() => console.log('Image loaded successfully')}
            onError={() => console.log('Error loading image')}
          />
          </View>
          <Text style={styles.heading3}>Prevention:{"\n"}</Text>
          {"\n"}
          Preventing OTP bypass requires a multi-layered approach to ensure the security of your system.
          Here are some steps you can take to enhance the security of your OTP system and minimize the risk of bypass:{"\n"}
          {"\n"}
          
               •	Strong OTP Generation: Use a reliable and robust OTP generation algorithm. Avoid predictable or weak OTP generation methods that can be easily guessed or reverse-engineered.{"\n"}
               {"\n"}
          • Length and Complexity: Increase the length and complexity of the OTP to make it harder to guess or brute-force.{"\n"}
          {"\n"}
          • Time-based OTPs: Implement time-based OTPs (TOTP) that change periodically{"\n"}
          {"\n"}
          • Rate Limiting: Implement rate limiting mechanisms to prevent brute-force attacks and limit the number of authentication attempts within a given time period. {"\n"}
          {"\n"}
          • Multi-Factor Authentication (MFA): Combine OTP with other authentication factors, such as something the user knows (password) and something the user has (physical token, biometrics), to create a multi-factor authentication system. {"\n"}
          {"\n"}
          • Secure Storage: Store OTPs securely on the server-side. Implement appropriate encryption and access controls to protect the OTP data from unauthorized access.{"\n"}
          {"\n"}
          
               </Text>
                <Text style={styles.description2}>
                Remember, while implementing these measures can significantly reduce the risk of OTP bypass, it's essential to regularly monitor and assess the security of your system and adapt to emerging threats and vulnerabilities
          
                </Text>
          <View style = {styles.link}>
          <TouchableOpacity onPress={openWebsite}>
          <Text style={styles.link}>Check Out The Website</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>
          <Text>{""}</Text>

           <Text>{""}</Text>
                </TouchableOpacity>
                
                </View>
                </ScrollView>
        </View>
    </View>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  description2:{
    fontSize:18,
  },

  link:{
paddingTop:10,
fontWeight:'bold',
fontSize:18,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingTop:10,
    marginRight:7,
  },
  heading3:{
    fontSize: 22 ,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingTop:100,
    marginRight:7,
  },
  description: {
    fontSize: 18,
    color: '#333',
    backgroundColor:"#FFF6F6",
   // margin:5,
   marginVertical:10,
  },
});

export default Mask;