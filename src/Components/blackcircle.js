import React from "react";
import { TouchableOpacity, Text,StyleSheet} from "react-native";

const Blackcircle = ({ onPress, icon, text }) => {
  return (
    <TouchableOpacity
      style={styles.blueContainer}
      onPress={onPress}
    >
      {icon}
      <Text style={styles.blueText}>{text}</Text>
    </TouchableOpacity>
  );
};

// Styles for Blackcircle component
const styles = StyleSheet.create({
    blueContainer: {
      height: 150,
      width: 150,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 30,
      marginHorizontal: 10,
      elevation: 20,
      borderWidth: 2,
      borderColor: "#CC4E59",
      backgroundColor:"#010220"
      
    },
    blueText: {
      color: "white",
      fontSize: 10,
      fontWeight: "bold",
      marginTop: 10,
      textAlign: "center",
    },
  });
  

export default Blackcircle;
