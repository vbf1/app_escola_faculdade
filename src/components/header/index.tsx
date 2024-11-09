import { View, Text, Pressable } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable className="w-10 h-10 md:w-20 md:h-20 bg-white rounded-full flex justify-center items-center">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className="flex-row items-center justify-center gap-1">
        <Text className="text-lg font-bold">Escola APP</Text>
      </View>

      <Pressable className="w-10 h-10 md:w-20 md:h-20 bg-white rounded-full flex justify-center items-center">
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  );
}
