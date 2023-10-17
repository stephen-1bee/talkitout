import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";

const messageInfo = [
  {
    email: "koffworld32453",
    message:
      " I have a girlfriend who doesn't want to leave me but I want to. I just don't know what to do now.",
    views: "2000 Views",
    reply: "Reply",
  },
];

const DataUi = ({ email, message, views, reply }) => {
  return (
    <View style={tw`w-[340px] h-[109px] bg-[#FFFFFF] rounded-md ml-4`}>
      <View style={tw`items-center justify-center p-4 `}>
        <Text style={tw`mr-49 font-semibold text-[#183642]`}>{email}</Text>
        <Text style={tw`ml-1  text-[#183642]`}>{message}</Text>
      </View>
      <View style={tw`flex-row item-center justify-between px-5`}>
        <Text style={tw`text-[#183642] `}>{views}</Text>
        <Text>{reply}</Text>
      </View>
    </View>
  );
};

const UserPage = ({ navigation }) => {
  const [visibleModal, setvisibleModal] = useState(false);

  return (
    <View>
      {/* Nav */}
      <View style={tw`bg-[#ffffff] shadow mt-5 h-14 flex-row items-center `}>
        <TouchableOpacity
          style={tw`ml-3`}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={tw`text-[15px] font-bold ml-4 text-lg text-left`}>
          TalkItOut
        </Text>
      </View>

      <View style={tw`bg-[#f0f0f0]`}>
        <Text style={tw`text-[#183642] text-lg font-bold px-6 `}>Posts</Text>
        <View>
          <FlatList
            data={messageInfo}
            renderItem={({ item }) => (
              <DataUi
                email={item.email}
                message={item.message}
                views={item.views}
                reply={item.reply}
              />
            )}
          />
        </View>
        <TouchableOpacity
          style={tw`absolute top-[510px] left-[300px] bg-[#183642] w-[54px] h-[55px] rounded-lg items-center justify-center `}
          onPress={() => setvisibleModal(true)}
        >
          <Entypo name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Modal
        visible={visibleModal}
        onRequestClose={() => setvisibleModal(flase)}
        presentationStyle=""
        animationType="formSheet"
      >
        <Text
          onPress={() => setvisibleModal(false)}
          style={tw`ml-78 text-lg font-bold mt-12`}
        >
          Done
        </Text>
        <View style={tw`items-center `}>
          <Text style={tw`mr-50 mt-24 text-[20px] font-bold text-left`}>
            Add a Post
          </Text>
          <TextInput
            style={tw`w-[303px] h-[142px] m-4 bg-gray-100 `}
            placeholder="Share your thought"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={tw`bg-[#183642] w-[302px] h-[48px] mt-5 py-4 px-30 rounded text-white `}
          >
            <Text style={tw`text-white `}>Add a post</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default UserPage;
