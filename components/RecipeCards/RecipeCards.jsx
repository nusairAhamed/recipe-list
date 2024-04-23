import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

export function RecipeCards({ data, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RecipeDetailsScreen", item);
              }}
              style={{
                borderRadius: 5,
                paddingVertical: 20,
                borderColor: "#333",
                borderWidth: 2,

                alignItems: "center",
                flex: 1,
                gap: 10,
                margin: 5,
              }}
            >
              <Image
                source={item.image}
                style={{ height: 120, width: 120 }}
                resizeMode="contain"
              />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
