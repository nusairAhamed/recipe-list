import { View, Text, Image } from "react-native";
import avatar from "../../assets/Avatar.png";

export function Topbar() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Hello Nusair</Text>
        <Text style={{ fontSize: 14, color: "#A9A9A9" }}>
          What are you cooking today
        </Text>
      </View>
      <View style={{}}>
        <Image source={avatar} />
      </View>
    </View>
  );
}
