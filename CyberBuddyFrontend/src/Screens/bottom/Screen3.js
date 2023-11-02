import { StyleSheet, Text, View, FlatList, Image, RefreshControl,TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { uri } from '../../../globalvariable/globalvariable';

const Screen3 =  ({navigation}) => {
  const [allNews, setAllNews] = useState([])
  const [refreshing, setRefreshing] = useState(false);

  const get_news = () =>{
     axios.get(`${uri}/news/data-breach`)
    .then(resp=>{
      const response = resp.data
      if (Array.isArray(response)) {
        setAllNews(response)
      } else {
        const result = [resp.data];
        setAllNews(result)
      }
    }).catch(e=>{
      console.error(e)
    })
  }

  useEffect(()=>{
    get_news()
  },[])

  const News = ({ news }) => {
    return (
      
      <View style={styles.card}>
        <Image
        source={{ uri: news.newsImgURL }}
        style={{ width: "100%", height: 350,borderRadius:20
      }}
      />
        <Text style={{fontWeight:'bold'}}>Author: {news.author}</Text>
        <Text></Text>
        <Text>Full News: {news.fullNews}</Text>
        <Text></Text>
        <Text style={{fontWeight:'bold'}}>Date: {news.newsDate}</Text>
      </View>
    );
  };

  const renderNews = ({ item }) => {
    return <News news={item} />;
  };
  const handleRefresh = () => {
    setRefreshing(true);
    get_news();
    setRefreshing(false);
  };

  return (
    <View>
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
              NEWS
            </Text>
          }
        >
          <LinearGradient
            colors={["red", "black"]}
            start={[0.5, 0]}
            end={[1, 1]}
            style={styles.yellowHeader}
          >
            <Text style={[styles.headerTitle, { opacity: 0 }]}> NEWS</Text>
          </LinearGradient>
        </MaskedView>
      </View>
      <View>
        {/* {allDeptEvents.length < 1 ? (
          <Text>No events found.</Text>
        ) : ( */}
          <FlatList
            data={allNews}
            renderItem={renderNews}
            keyExtractor={(item) => item.id.toString()}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
          />
        {/* )} */}
      </View>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    paddingLeft: 40,
  },
  headerMenuIcon: {
    color: "#000",
    top: 10,
    marginLeft: 20,
  },
  yellowHeader: {
    textAlign: "center",
    marginTop: -5,
    marginRight:150
   
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    width:360,
    marginLeft:10,
    borderWidth:1,
    marginTop:10
  },
})