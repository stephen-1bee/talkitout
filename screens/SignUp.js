import {
  View,
  Text,
  ScrollView,
  TextInputBase,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";

const SignUp = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={tw`flex-1 items-center justify-center bg-[#f9fafd]`}
    >
      <View style={tw`items-center  justify-center gap-5`}>
        <Text style={tw`text-3xl text-[#183642] text-center font-bold w-60`}>
          Create an unreal identity
        </Text>
        <Text style={tw`text-[#183642] text-center text-[17px] px-9`}>
          It should not necessarily be your real identity. just anything goes.
        </Text>
      </View>

      {/* form */}
      <View style={tw`mt-12 mb-8 gap-6`}>
        <TextInput
          placeholder="Username"
          style={tw`w-[302px] h-[47px] shadow-md py-5 px-4 rounded bg-[#FFFFFF] `}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          style={tw`w-[302px] h-[47px] shadow-md py-5  px-4 rounded bg-[#FFFFFF] `}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={tw`bg-[#183642] mt-10 py-4 w-[302px] rounded-lg text-white `}
      >
        <Text style={tw`text-white text-[15px] text-center`}>
          Create Persona
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUp;
