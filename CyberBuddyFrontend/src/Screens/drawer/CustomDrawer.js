import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { TouchableOpacity } from "react-native-gesture-handler";
  import { Ionicons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";

  
  const CustomDrawer = () => {

    
    // handeling logout
    const handelLogout = async () =>{
    //  
    }
  
  
    const navigation = useNavigation();
    return (
      <View style={[styles.container]}>
        <View>
          <View style={[styles.backgroundColor]}>
            <TouchableOpacity>
              <Image
                source={require("../../Images/Login2.webp")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 60,
                  left: 80,
                  marginTop: 40,
                  borderColor:"white",
                  borderWidth:1
                }}
              />
            </TouchableOpacity>
  
            <Text style={[styles.headerText]}>RAGHAV KUMAR JHA</Text>
            <Text style={[styles.headerText2]}>jraghavkumar029@gmail.com</Text>
          </View>
          <ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="person-circle"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>Profile</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Main")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="home"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("About")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="information-circle"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>About us </Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate("Education")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="book"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>Education</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Education")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="reader-outline"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>Quiz</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Education")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="game-controller"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>GAMES</Text>
              </View>
            </TouchableOpacity>



            <TouchableOpacity onPress={() => navigation.navigate("Education")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="help-circle"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>FAQ</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Education")}>
              <View style={[styles.option]}>
                <Ionicons
                  name="shield"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text style={[styles.optiontext]}>Policy</Text>
              </View>
            </TouchableOpacity>
           
  
  
            <TouchableOpacity onPress={handelLogout}>
              <View
                style={[styles.option ]}
              >
                <Ionicons
                  name="log-out"
                  size={30}
                  color="black"
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.optiontext,
                  ]}
                >
                  LOGOUT
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#441159",
      flex: 1,
      opacity: 1,
      borderWidth: 1,
    },
    backgroundColor: {
      backgroundColor: "#441159",
     
    },
    headerText: {
      fontSize: 14,
      color: "white",
      textDecorationLine: "underline",
      fontFamily: "Rajdhani",
      marginTop: 20,
      textAlign:"center"
    },
    headerText2: {
      fontSize: 14,
      color: "white",
      textDecorationLine: "underline",
      fontFamily: "Rajdhani",
      bottom: 5,
      textAlign:"center"
    },
    option: {
      marginTop: 20,
      height: 45,
      width:"95%",
      flexDirection: "row",
      textAlign:'center',
      alignContent:'center',
      backgroundColor: "lightgrey",
      borderRadius:20,
      alignSelf:"center"
    },
    optiontext: {
      fontFamily: "Rajdhani",
      left: 20,
      fontSize: 17,
      top: 8,
    },
    icon: {
      textAlign: "right",
      left: 10,
      top: 5,
    },
  });
  
  export default CustomDrawer;
  