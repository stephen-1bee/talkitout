import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomSheet from "@gorhom/bottom-sheet";

const DataUi = ({ message, user_id, email, view, reply }) => {
  return (
    <View
      style={tw`w-[340px] h-[109px] bg-[#FFFFFF] rounded-md ml-4 mt-5 border border-[0.5px]`}
    >
      <View style={tw`p-4`}>
        <Text style={tw`text-left font-semibold text-[#183642]`}>
          {user_id}
        </Text>
        <Text style={tw`text-left text-[#183642] mt-1`}>{message}</Text>
      </View>
      <View style={tw`flex-row  justify-between px-4`}>
        <Text style={tw`text-[#183642] text-left `}>views</Text>
        <Text style={tw`text-[#183642] text-left `}>reply</Text>
      </View>
    </View>
  );
};

const UserPage1 = ({ navigation }) => {
  const [visibleModal, setvisibleModal] = useState(false);
  const [message, setmessgae] = useState("");
  const [allPosts, setallPosts] = useState([]);

  // handle add message
  const addMessage = () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        message: message,
        user_id: null,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://talkitout-api.onrender.com/api/v1/posts/create",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.message === "post created successfully") {
            Alert.alert("Success", result.message);
            console.log(result.message);
            navigation.navigate("UserPage");
          } else {
            Alert.alert("Sorry", result.msg);
          }
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log(err);
    }
  };

  // get all messgae
  const getAllPosts = async () => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(
        "https://talkitout-api.onrender.com/api/v1/posts/all",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setallPosts(result.posts);
          console.log(result.posts);
        })
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <View style={tw` b-40`}>
      {/* Nav */}
      <View style={tw`bg-black shadow mt-5 h-14 flex-row items-center`}>
        <TouchableOpacity
          style={tw`ml-3`}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text style={tw`text-[15px] font-bold ml-2 text-lg text-left`}>
          TalkItOut
        </Text>
      </View>

      <View style={tw`bg-white`}>
        <Text style={tw`text-[#183642] text-lg font-bold px-6 mt-5`}>
          Posts
        </Text>
        <View style={tw`mb-24`}>
          <FlatList
            data={allPosts}
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
        <View style={tw`h-9 w-20 bg-black`}></View>
        <TouchableOpacity
          style={tw`absolute top-[510px] left-[300px] bg-[#183642] w-[54px] h-[55px] rounded-lg items-center justify-center `}
          onPress={() => setvisibleModal(true)}
        >
          <Entypo name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={visibleModal}
        onRequestClose={() => setvisibleModal(false)}
        presentationStyle="pageSheet"
        animationType="slide"
      >
        <Text
          onPress={() => setvisibleModal(false)}
          style={tw`ml-78 text-lg font-bold mt-5`}
        >
          Done
        </Text>
        <View style={tw`items-center `}>
          <Text style={tw`mr-50 mt-18 text-[20px] font-bold text-left`}>
            Add a Post
          </Text>
          <TextInput
            onChangeText={(e) => setmessgae(e)}
            style={tw`w-[303px] placeholder:py-12 h-[142px] px-4 m-4 bg-gray-100`}
            placeholder="Share your thought"
          />
          <TouchableOpacity
            onPress={() => addMessage(navigation)}
            style={tw`bg-[#183642] w-[302px] h-[48px] mt-5 py-4 px-30 rounded text-white `}
          >
            <Text style={tw`text-white `}>Add a post</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default UserPage1;
