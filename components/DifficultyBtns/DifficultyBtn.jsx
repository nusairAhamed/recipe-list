import { View, Text, TouchableOpacity } from "react-native";

export function DifficultyBtns({ data }) {
  return (
    <View style={{ flexDirection: "row", gap: 10, marginVertical: 20 }}>
      {data.map((item) => {
        return (
          <TouchableOpacity
            key={item.name}
            style={{
              backgroundColor: item.isActive ? "#129575" : "white",
              paddingHorizontal: 20,
              paddingVertical: 12,
              borderRadius: 5,
            }}
          >
            <Text
              style={{ fontSize: 18, color: item.isActive ? "white" : "black" }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
