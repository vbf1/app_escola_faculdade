import { IMessage } from "@/src/interface/message.interface";
import { Text, View } from "react-native";

interface Props {
  messages: IMessage[];
}

function MessageBlock(messages: Props) {
  return (
    <View className="flex-col gap-4">
      {messages.messages.map(
        (message) =>
          message.userID.type_user_id != 1 && (
            <View className="bg-slate-400 py-4 px-6 rounded-2xl">
              <View className="flex-row justify-between items-center">
                <View className="flex-col gap-2">
                  <Text className="text-slate-600">{message.userID.name}</Text>
                  <Text>{message.content}</Text>
                </View>
                <View className="bg-green-600 w-4 h-4 rounded-full" />
              </View>
            </View>
          )
      )}
    </View>
  );
}

export { MessageBlock };
