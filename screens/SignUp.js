import {
  View,
  Text,
  ScrollView,
  TextInputBase,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

const SignUp = ({ navigation }) => {
  // statest to handle signUp
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  // Handle Sign Up
  const handleSignUp = async () => {
    try {
      // if (!username || !password) {
      //   Alert.alert("Error", "Fields cannnot be left Empty");
      // }
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: username,
        password: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://talkitout-api.onrender.com/api/v1/users/create",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.message === "user added successfully") {
            Alert.alert("Success", result.message);
            console.log(result);
            navigation.navigate("Login");
          } else {
            Alert.alert("Sorry", result.error);
          }
        })
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={tw`flex-1 items-center justify-center bg-[#f9fafd]`}
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
          onChangeText={(e) => setusername(e)}
          placeholder="Username"
          style={tw`w-[302px] h-[47px] shadow-md py-4 px-3 rounded bg-[#FFFFFF] `}
        />
        <TextInput
          onChangeText={(e) => setpassword(e)}
          secureTextEntry={true}
          placeholder="password"
          style={tw`w-[302px] h-[47px] shadow-md py-4  px-4 rounded bg-[#FFFFFF] `}
        />
      </View>
      <TouchableOpacity
        onPress={() => handleSignUp(navigation)}
        style={tw`bg-[#183642] mt-10 py-4 w-[302px] rounded-lg text-white `}
      >
        <Text style={tw`text-white text-[15px] text-center`}>
          Create Persona
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
