import { View, ScrollView, Text } from "react-native";
import { Header } from "../components/header";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import { IMessage } from "../interface/message.interface";
import api from "../services/api";
import { MessageBlock } from "../components/messages";

const statusBarHeight = Constants.statusBarHeight;

export default function MessagesPage() {
  const [messages, setMessages] = useState<IMessage[]>();
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const response = await api.get("/all-messages");
      setMessages(response.data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setMessages]);

  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <View style={{ marginTop: 20 }}>
          {error && <Text>Error: {error}</Text>}
          {messages ? (
            <MessageBlock messages={messages} />
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
