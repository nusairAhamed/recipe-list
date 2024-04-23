import { View, TextInput, Text } from "react-native";

export function SearchRecipe() {
  return (
    <View>
      <TextInput
        placeholder="Search Recipe"
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "#fff",
          borderColor: "#ddd",
          borderWidth: 2,
          borderRadius: 8,
          paddingHorizontal: 15,
          marginTop: 10,
          fontSize: 16,
          color: "#333",
        }}
      />
    </View>
  );
}
