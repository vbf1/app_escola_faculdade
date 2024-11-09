import { View, ScrollView, Text } from "react-native";
import { Header } from "../components/header";

import Constants from "expo-constants";
import { Banner } from "../components/banner";
import { Introduction } from "../components/introduction";
import { useEffect, useState } from "react";
import api from "../services/api";
import { IStudents } from "../interface/students.interface";

const statusBarHeight = Constants.statusBarHeight;

export default function IndexPage() {
  const [students, setStudents] = useState<IStudents[]>();

  const fetchData = async () => {
    try {
      const response = await api.get<IStudents[]>(`/students-by-class/${1}`);
      setStudents(response.data);
    } catch (err: any) {
      console.log("Error:", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setStudents]);

  const nameClass = students?.find((student) => student);

  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4 " style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <View className="flex-col gap-6">
          <Introduction />

          {students ? (
            <View className="bg-slate-400 rounded-2xl p-6 flex-col gap-4">
              <View className="flex-row gap-2 items-center">
                <Text className="text-base text-white">Turma :</Text>
                <Text className="text-green-700 text-lg">
                  {nameClass?.class.name}
                </Text>
              </View>
              <View className="flex-row gap-2 items-center">
                <Text className="text-base text-white ">
                  Alunos cadastrados :
                </Text>
                <Text className="text-green-700 text-lg">
                  {students.length}
                </Text>
              </View>
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
