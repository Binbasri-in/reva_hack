import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { uri } from '../../globalvariable/globalvariable';

const Decrypt = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [encryptedWords, setEncryptedWords] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');
  const [url, setUrl] = useState('');   
  const [d, sd] = useState("")
  const handleUrlChange = (text) => {
    setUrl(text);
  };
  const decrypt_data = (()=>{
    axios.post(`${uri}/decrypt/image`,{
        url
    }).then(resp=>{
        console.log(resp.data)
        sd(resp.data.decoded_text)
        console(d)
    }).catch(e=>{
        console.error(e)
    })
  })
  const handleButton1Press = () => {
    console.log('Button 1 pressed');
    // Add your logic for button 1 functionality here
  };

  const handleButton2Press = () => {
    console.log('Button 2 pressed');
    // Add your logic for button 2 functionality here
    setSelectedImage(null); // Reset the selected image
  setEncryptedWords('');
  setDecryptedMessage(''); 
  
  };
  const handleEncrypt = () => {
    // Implement encryption logic for hiddenText and update the encryptedText state
    // Example implementation using a simple Caesar cipher:
    decrypt_data()
}
  const handleButton3Press = () => {
    console.log('Button 3 pressed');
    // Add your logic for button 3 functionality here
    const decryptedMessage = decryptFunction(); // Replace decryptFunction() with your actual decryption logic
    setDecryptedMessage(decryptedMessage);
  };
  const decryptFunction = () => {
    // Replace this with your actual decryption logic
    // This is just a placeholder example
    return "Decrypted message";
  };

  const handleImageSelect = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied.");
      return;
    }
  
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled && result.assets.length > 0) {
        const selectedAsset = result.assets[0];
        setSelectedImage(selectedAsset.uri);
      }
    } catch (error) {
      console.log("Error selecting image:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Decrypt</Text>
      </View>
      {selectedImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage}} style={styles.image} />
          <Text style={styles.encryptedText}>{encryptedWords}</Text>
        </View>
      )}
       <TouchableOpacity style={styles.uploadButton} onPress={handleImageSelect}>
        <Text style={styles.buttonText}>Upload File or Photos</Text>
      </TouchableOpacity>
      {decryptedMessage ? (
            <Text style={styles.decryptedText}>{decryptedMessage}</Text>
          ) : null}
    <Text style={styles.text}>
        Enter the URL:
      </Text>
      <TextInput
      style={styles.textInput}
        value={url}
        onChangeText={handleUrlChange}
        placeholder="Enter Here"
      />
      <View>
        
      <Text>{d}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Download" onPress={handleButton1Press} />
        <Button title="Reset" onPress={handleButton2Press}/>
        <Button title="Decrypt" onPress={handleEncrypt } />
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
    backgroundColor: 'blue',
    padding: 40,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  uploadButton: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',

  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 200,
  },
  encryptedText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 300,
  },
  decryptedText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },text:{
    marginBottom:20,
    fontSize:16,

},
textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
   // width:400,
  },
});

export default Decrypt;