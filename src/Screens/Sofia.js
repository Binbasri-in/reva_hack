import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";
import { uri } from "../../globalvariable/globalvariable";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Sofia = ({ navigation }) => {
  const [url, setUrl] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [hiddenText, setHiddenText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [imgResp, setImagResp] = useState("");
  const handleUrlChange = (text) => {
    setUrl(text);
  };

  // give image link and message to backend
  const post_data = () => {
    axios
      .post(`${uri}/post/image/text/data`, {
        url,
        hiddenText,
      })
      .then((resp) => {
        console.log(resp.data);
        setImagResp(resp.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleImageFetch = () => {
    // Fetch the image based on the URL and update the imageUri state
    // Example implementation using fetch:

    fetch(url)
      .then((response) => response.url)
      .then((uri) => setImageUri(uri))
      .catch((error) => console.error(error));
  };

  const handleHiddenTextChange = (text) => {
    setHiddenText(text);
  };

  const handleEncrypt = () => {
    // Implement encryption logic for hiddenText and update the encryptedText state
    // Example implementation using a simple Caesar cipher:
    post_data();

    const shift = 1;
    const encrypted = hiddenText
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) + shift))
      .join("");
    setEncryptedText(encrypted);
  };

  const handleDownload = () => {
    // const fileUrl = imgResp; // Replace with your file URL
    // // Get the file name from the URL
    // const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
    // // Define the file path where the downloaded file will be saved
    // const filePath = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}`;
    // // Start the file download
    // RNFetchBlob.config({
    //   fileCache: true,
    //   path: filePath,
    // })
    //   .fetch('GET', fileUrl)
    //   .then((res) => {
    //     console.log('File downloaded:', res.path());
    //     // Handle the downloaded file as needed
    //   })
    //   .catch((error) => {
    //     console.error('Error downloading file:', error);
    //   });
  };

  const handleDecrypt = () => {
    navigation.navigate("Decrypt");
  };

  const handleReset = () => {
    setUrl("");
    setImageUri("");
    setHiddenText("");
    setEncryptedText("");
  };

  return (
    <ScrollView
      style={{ backgroundColor: "#010220" }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity
           onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} style={{top: 30,left:5,
    color: "white"}} />
        </TouchableOpacity>
          <Text style={styles.headerText}>STEGANOGRAPHY</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Encode</Text>
      </View>
      <Text style={styles.text}>Enter the URL:</Text>
      <TextInput
        style={styles.textInput}
        value={url}
        onChangeText={handleUrlChange}
        placeholder="Enter Here"
      />
      <View style={{ width: 250, alignSelf: "center" }}>
        {/* <Button
          title="Fetch Image"
          onPress={handleImageFetch}
          style={styles.fetchButton}
        /> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Fetch Image</Text>
        </TouchableOpacity>
      </View>
      {imageUri !== "" && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
      <Text style={styles.Htext}>Enter the Hidden Text:</Text>
      <TextInput
        value={hiddenText}
        onChangeText={handleHiddenTextChange}
        placeholder="Enter here"
        style={styles.HtextInput}
      />
      <View style={styles.buttonRow}>
        {/* <Button title="Download" onPress={handleDownload} />
        <Button title="Reset" onPress={handleReset} />
        <Button title="Encrypt" onPress={handleEncrypt} /> */}

      <TouchableOpacity onPress={handleDownload} style={styles.button}>
        <Text style={styles.buttontext}>Download</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset} style={[styles.button,{left:5}]}>
        <Text style={styles.buttontext}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleEncrypt} style={[styles.button,{left:7}]}>
        <Text style={styles.buttontext}>Encrypt</Text>
      </TouchableOpacity>
      </View>
      <View style={{borderWidth:2,borderColor:"white",left:15,marginRight:15,width:"90%",height:60}}>
        <TextInput style={{color:"white"}}>{imgResp.image_uri}</TextInput>
      </View>
      <View style={styles.decode}>
        {/* <Button title="DECODE" onPress={handleDecrypt} /> */}
        <TouchableOpacity
          style={styles.button}  onPress={handleDecrypt}
        >
          <Text style={styles.buttontext}>DECODE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#010220",
    padding: 10,
    marginTop: 0,
    height: 80,
    paddingTop: 15,
  },
  mainContainer: {
    justifyContent: "center",
    // alignItems:'center',
  },
  fetchButton: {
    width: 250,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    marginBottom:10
  },
  container: {
    paddingBottom: 10,
    backgroundColor: "#010220",
  },
  text: {
    marginBottom: 20,
    fontSize: 16,
    marginLeft: 10,
    color: "white",
  },
  Htext: {
    //marginBottom:20,
    fontSize: 16,
    marginTop: 50,
    marginLeft: 10,
    color: "white",
  },

  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 10,
    color: "white",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: 350,
    marginLeft: 10,
    color: "white",
  },
  HtextInput: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    width: 350,
    marginLeft: 10,
    color: "white",
  },
  image: {
    marginTop: 20,
    width: 300,
    height: 300,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    margin: 60,
    marginHorizontal:10
  },
  decode: {
    width: 350,
    alignSelf: "center",
    marginTop:20
  },
  button: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#CC4E59",
    width: 120,
    borderRadius: 20,
    height: 30,
  },
  buttontext: {
    color: "white",
    fontSize:18,
    alignSelf:"center",
    justifyContent:"center"
  },
});

export default Sofia;
