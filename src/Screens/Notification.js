import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { getNotificationInbox } from "native-notify";
import { FlatList } from "react-native";

export default function Notification() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let notifications = await getNotificationInbox(14292, "iEb8whWvC1FqlFsHI9KqYV");
      console.log("notifications: ", notifications);
      setData(notifications);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.notification_id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    marginTop:10
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  notificationCard: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  notificationMessage: {
    fontSize: 16,
    marginBottom: 8,
  },
  notificationDate: {
    fontSize: 12,
    color: "#888",
    flex:1,
    alignSelf:'flex-end'
  },
});
