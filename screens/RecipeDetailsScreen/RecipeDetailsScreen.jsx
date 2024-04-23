import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export function RecipeDetailsScreen({ route, navigation }) {
  const { name, image, description } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#129575" }}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <MaterialIcons name="arrow-back-ios-new" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          marginTop: 150,
          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={image}
            style={{ width: 300, height: 200, marginTop: -120 }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            color: "#129575",
            fontWeight: "bold",
            paddingBottom: 10,
          }}
        >
          {name}
        </Text>

        <Text
          style={{
            fontSize: 18,
            textAlign: "justify",
            color: "black",
          }}
        >
          {description}
        </Text>
      </View>
    </SafeAreaView>
  );
}
