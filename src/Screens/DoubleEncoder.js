import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Clipboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const Dencoder = ({ navigation }) => {
  const [inputText, setInputText] = useState("");
  const [encodedText, setEncodedText] = useState("");
  const [decodedText, setDecodedText] = useState("");
  const [isDoubleEncoded, setIsDoubleEncoded] = useState(false);

  const handleEncode = () => {
    // Double encode the input string
    const firstEncoded = encodeURIComponent(inputText);
    const secondEncoded = encodeURIComponent(firstEncoded);

    // Set the encoded text
    setEncodedText(secondEncoded);
    setIsDoubleEncoded(true);
  };

  const handleDecode = () => {
    // Perform double decoding on the decodedText
    const firstDecoded = decodeURIComponent(decodedText);
    const secondDecoded = decodeURIComponent(firstDecoded);

    // Set the double decoded string
    setEncodedText("");
    setDecodedText(secondDecoded);
    setIsDoubleEncoded(false);
  };

  const handleCopy = async () => {
    await Clipboard.setString(encodedText);
    alert("Copied to clipboard");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              style={styles.headerMenuIcon}
            />
          </TouchableOpacity>
          <MaskedView
            maskElement={
              <Text
                style={[styles.headerTitle, { backgroundColor: "transparent" }]}
              >
                DOUBLE ENCODER
              </Text>
            }
          >
            <LinearGradient
              colors={["red", "black"]}
              start={[0.5, 0]}
              end={[1, 1]}
              style={styles.yellowHeader}
            >
              <Text style={[styles.headerTitle, { opacity: 0 }]}>
                {" "}
                DOUBLE ENCODER
              </Text>
            </LinearGradient>
          </MaskedView>
        </View>

        <View>
          <Text style={styles.heading}>Double Encoder:</Text>
          <Text style={styles.description}>
            • Double encoding refers to the act of applying URL encoding (also
            known as percent-encoding) multiple times to a string. URL encoding
            is a way to represent special characters in a URL by replacing them
            with a "%" sign followed by their hexadecimal representation. For
            example, the character <Text>{"\u003C"}</Text> is represented as
            "%3C" when URL encoded.{"\n"}
            {"\n"}
            Example:{"\n"}
            Double-encoded String:{" "}{"\n"}
            <TouchableOpacity>
              <Text>
                %2541%253c%253f%253c%255c%253f {"\n"}Decoded String: A
                <Text>{"\u003C"}</Text> ?<Text>{"\u003C"}</Text> \?
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a string"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.button} onPress={handleEncode}>
            <Text style={styles.buttonText}>Encode</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outputContainer}>
          <Text style={styles.label}>Double Encoded String:</Text>
          <Text style={styles.output}>{encodedText}</Text>
          <TouchableOpacity style={styles.copyButton} onPress={handleCopy}>
            <Text style={styles.copyButtonText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.heading}>Double Decoder:</Text>
      <Text style={styles.description}>
        To perform double encoding on an input string, we can utilize a Python
        program. First, we prompt the user to enter a string they want to double
        encode. The program takes this input and applies URL encoding twice to
        the string using the urllib.parse.quote function. Checking Double
        Encoding
        {"\n"}
        {"\n"}
        Scanning for double encoding involves checking if an input string has
        undergone multiple layers of encoding.
      </Text>
      <View style={styles.outputContainer}>
        <Text style={styles.label}>Double Encoded String:</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter double encoded string"
          value={decodedText}
          onChangeText={setDecodedText}
        />
        <TouchableOpacity style={styles.button} onPress={handleDecode}>
          <Text style={styles.buttonText}>Decode</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.outputContainer}>
        <Text style={styles.label}>Decoding Status:</Text>
        <Text style={styles.output}>
          {isDoubleEncoded
            ? "The entered string is double encoded."
            : "The entered string is not double encoded."}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Dencoder;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    paddingTop: 10,
    marginLeft:10
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
    paddingLeft: 20,
  },
  headerMenuIcon: {
    color: "#000",
    top: 10,
    marginLeft: 20,
  },
  yellowHeader: {
    textAlign: "center",
    marginTop: -5,
    marginRight: 50,
  },

  description: {
    fontSize: 16,
    color: "#333",
    backgroundColor: "#FFF6F6",
    marginLeft: 10,
    marginVertical: 10,
  },
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  outputContainer: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 4,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  output: {
    fontSize: 14,
    marginBottom: 8,
  },
  copyButton: {
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 4,
    alignSelf: "flex-end",
  },
  copyButtonText: {
    color: "#FFF",
    fontSize: 14,
  },
});
