import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Screen4 = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (text) => {
    setInput(text);
  };

  const sendMessage = async () => {
    if (input) {
      setMessages([...messages, { text: input, user: true }]);
      const response = await fetchOpenAIResponse(input);
      setMessages([...messages, { text: response, user: false }]);
      setInput('');
    }
  };

  const fetchOpenAIResponse = async (input) => {
    try {
      // const apiKey = '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';

      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-002/completions',
        {
          prompt: input,
          max_tokens: 50, // Adjust as needed
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );
      return response.data.choices[0].text;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      return 'Sorry, there was an error';
    }
  };

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
        <Text style={styles.headerText}>CYBER BOT</Text>
        
      </View>
      <ScrollView style={styles.messageContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              {
                backgroundColor: message.user ? 'lightblue' : '#F30A9A',
                alignSelf: message.user ? 'flex-start' : 'flex-end',
              },
            ]}
          >
            <Text style={{ color: message.user ? 'black' : 'white' }}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={handleInputChange}
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.customButton} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#010220"
  },
  headerMenuIcon: {
    top: 20,
    color: "white",
  },
  header: {
    backgroundColor: "#010220",
    padding: 10,
    paddingBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 15,
    fontSize: 24,
    elevation: 20,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 20,
    flex:1,
    textAlign:"center"
    
  },
  messageContainer: {
    flex: 1,
    marginTop:25
  },
  message: {
    margin: 8,
    padding: 12,
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor:"white"
    borderColor:"white"
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
    margin: 8,
    color:"white"
  },
  customButton: {
    backgroundColor: '#F30A9A',
    padding: 10, 
    borderRadius: 5, 
    marginRight:10,
    height:45
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold', 
    textAlign: 'center', 
    
  },
});

export default Screen4;
