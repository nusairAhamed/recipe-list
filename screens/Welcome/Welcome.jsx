import { View, Text, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import WelcomeBg from "../../assets/welcome.png";
import logo from "../../assets/logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Welcome({ navigation }) {
  return (
    <ImageBackground source={WelcomeBg} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Image source={logo} style={{ marginBottom: 20 }} />
          <Text style={{ color: "white", fontSize: 22 }}>
            100K+ Premium Recipies
          </Text>
          <View style={{ marginVertical: 50 }}></View>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 50,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Get{"\n"}Cooking
          </Text>
          <Text style={{ color: "white", fontSize: 18, marginBottom: 30 }}>
            Simple Way to find Tasty Recipes
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#129575",
              paddingHorizontal: 30,
              paddingVertical: 20,
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Start Cooking
            </Text>
            <Feather name="arrow-right" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
