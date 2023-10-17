import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";

const SignUp = ({ navigation }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = () => {
    try {
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
        "https://talkitout-api.onrender.com/api/v1/users/login",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.message === "user login successful") {
            Alert.alert("Success", result.message);
            console.log(result);
            navigation.navigate("UserPage");
          } else {
            Alert.alert("Sorry", result.message);
          }
        })
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log(err);
    }
  };

  // get all posts

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={tw`flex-1 items-center justify-center`}
    >
      <View>
        <Text style={tw`text-3xl text-[#183642] text-center font-bold w-60`}>
          Login Now
        </Text>
        <Text style={tw`text-[#183642] text-center text-[17px] px-9`}>
          Login now to continue
        </Text>
      </View>

      {/* form */}
      <View style={tw`mt-12 mb-8 gap-6`}>
        <TextInput
          onChangeText={(e) => setusername(e)}
          placeholder="Username"
          style={tw`w-[302px] h-[47px] shadow-md py-4 px-4  rounded bg-[#FFFFFF] `}
        />
        <TextInput
          onChangeText={(e) => setpassword(e)}
          secureTextEntry={true}
          placeholder="password"
          style={tw`w-[302px] h-[47px] shadow-md py-4  px-4  rounded bg-[#FFFFFF] `}
        />
      </View>
      <TouchableOpacity
        onPress={() => handleLogin(navigation)}
        style={tw`bg-[#183642] mt-10 py-4 w-[302px] rounded-lg text-white `}
      >
        <Text style={tw`text-white text-center  text-[15px]`}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
