import React from 'react';
import { TouchableOpacity, ImageBackground, Image, Text ,StyleSheet } from 'react-native';

const EventCard = ({ source, isImageBackground = false }) => {
  return (
    <TouchableOpacity style={styles.box}>
      {isImageBackground ? (
        <ImageBackground
          source={source}
          style={styles.image}
          resizeMode="cover"
          borderRadius={20}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Interested!!</Text>
          </TouchableOpacity>
        </ImageBackground>
      ) : (
        <Image source={source} style={styles.image} resizeMode="cover" />
      )}
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
   
    box: {
      width: 410,
      height: 400,
      margin: 10,
      backgroundColor: "#010220",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      elevation: 20,
      borderWidth: 1,
    },
    image: {
      height: "100%",
      width: "100%",
      resizeMode: "center",
      borderRadius: 20,
    }, 
    // button: {
    //   backgroundColor: 'grey',
    //   paddingVertical: 0,
    //   paddingHorizontal: 20,
    //   borderRadius:10,
    //   top:300,
    //   left:20,
    //   width:150,
    //   height:30,
      
    // },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      textAlign:'center'
    },
  });
  
export default EventCard;
