import { View, Text, Pressable } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";

function Header() {
  const pathname = usePathname();

  let pageTitle;

  switch (pathname) {
    case "/":
      pageTitle = "Inicio";
      break;
    case "/messages":
      pageTitle = "Mensagens";
      break;
    default:
      pageTitle = "Página Desconhecida";
  }

  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Link href="/" asChild>
        <Pressable className="w-10 h-10 md:w-20 md:h-20 bg-white rounded-full flex justify-center items-center">
          <Ionicons name="home-outline" size={20} color="#121212" />
        </Pressable>
      </Link>
      <View className="flex-row items-center justify-center gap-1">
        <Text className="text-lg font-bold">{pageTitle}</Text>
      </View>

      <Link href="/messages" asChild>
        <Pressable className="w-10 h-10 md:w-20 md:h-20 bg-white rounded-full flex justify-center items-center">
          <Feather name="message-square" size={20} color="#121212" />
        </Pressable>
      </Link>
    </View>
  );
}

export { Header };
