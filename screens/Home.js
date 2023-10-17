import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import img from "../assets/Chat-bro.png";

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={tw`items-center flex-1 bg-white`}>
      <Image source={img} style={tw`w-[300px] h-[200px] mt-34 `} />
      <View
        style={tw`mt-3 w-300px items-center justify-center text-[#183642] font-bold`}
      >
        <Text
          style={tw`text-3xl items-center text-center justify-center text-[#183642] font-bold`}
        >
          Life can be stressful sometimes
        </Text>
        <Text
          style={tw`px-5 w-[320px] mt-5 items-center text-center justify-center text-[#183642] text-[15px]`}
        >
          You need to voice out something? Hey, this platform gives you the
          change to do that without your identity getting known.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={tw`bg-[#183642] mt-10 py-4 px-30 rounded-lg text-white `}
      >
        <Text style={tw`text-white `}>Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
