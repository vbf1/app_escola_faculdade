import { IMessage } from "@/src/interface/message.interface";
import api from "@/src/services/api";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export function Messages() {
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
    <View>
      <Text className="text-lg font-bold text-center">Mensagens</Text>
      {error && <Text>Error: {error}</Text>}
      {messages ? (
        <Text>
          {messages.map((message) => (
            <>
              <Text>{message.id}</Text>
              <Text>{message.content}</Text>
            </>
          ))}
        </Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
