import { Text, View } from "react-native";

function Introduction() {
  return (
    <View className="bg-slate-400 rounded-2xl p-6 flex-col gap-4">
      <Text className="text-base text-white ">
        Olá, seja muito bem vindo Professor Victor B.!
      </Text>
      <Text className="text-base text-white">
        Esse é o Escola APP, a solução completa para o gerenciamento da sua
        escola.
      </Text>
    </View>
  );
}

export { Introduction };
