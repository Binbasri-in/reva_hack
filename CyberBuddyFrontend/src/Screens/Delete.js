import React from 'react';
import { View, Text, StyleSheet,Linking ,TouchableOpacity,ScrollView,Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
const Delete = () => {
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
              DELETE ME
            </Text>
          }
        >
          <LinearGradient
            colors={["red", "black"]}
            start={[0.5, 0]}
            end={[1, 1]}
            style={styles.yellowHeader}
          >
            <Text style={[styles.headerTitle, { opacity: 0 }]}>DELETE ME</Text>
          </LinearGradient>
        </MaskedView>
      </View>

     <View style={{marginLeft:10}}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
  <Text style={styles.heading}>DeleteMe</Text>
  <Text style={styles.heading1}>DeleteMe is a hands-free subscription service that will remove your personal information that’s being sold online.</Text>
  <Text style={styles.heading2}>How To use DeleteMe?</Text>
  <Text style={styles.description}>
  • Submit personal information for removal from search engines.{"\n"}
  {"\n"}
  • DeleteMe experts find and remove your personal information.{"\n"}
  {"\n"}
  • Receive a detailed DeleteMe report in 7 days. {"\n"}
  {"\n"}
  • We remove your personal information every 3 months.{"\n"}
  {"\n"}
  </Text>
  <Text style={styles.heading2}>Monthly Report:</Text>
  <View style={{ marginBottom: 60}}>
      <Image
         source={require('../Images/Picture30.jpg')}
          style={{ width: 400, height: 400,alignSelf:"center" }}
          resizeMode="contain"
          onLoad={() => console.log('Image loaded successfully')}
          onError={() => console.log('Error loading image')}
        />
        </View>
        <View style={{ marginBottom: 60}}>
      <Image
         source={require('../Images/Picture31.jpg')}
          style={{ width: 400, height: 400,alignSelf:"center" }}
          resizeMode="contain"
          onLoad={() => console.log('Image loaded successfully')}
          onError={() => console.log('Error loading image')}
        />
        </View>
        <View style={{ marginBottom: 60}}>
      <Image
         source={require('../Images/Picture35.jpg')}
          style={{ width: 400, height: 400,alignSelf:"center",marginBottom:50 }}
          resizeMode="contain"
          onLoad={() => console.log('Image loaded successfully')}
          onError={() => console.log('Error loading image')}
        />
        </View>
  </ScrollView>
  </View> 
  </View>
  );
};

export default Delete

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
        marginRight:7,
      },
      heading1:{
        fontSize: 18,
       // fontWeight: 'bold',
        marginBottom: 16,
        //paddingTop:100,
        marginRight:7,
      },
      heading2:{
        fontSize: 17,
        // fontWeight: 'bold',
         marginBottom: 16,
         //paddingTop:100,
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