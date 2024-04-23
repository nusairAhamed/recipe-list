import { View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import { Topbar } from "../../components/TopBar/Topbar";
import { SearchRecipe } from "../../components/SearchRecipe/SearchRecipe";
import { DifficultyBtns } from "../../components/DifficultyBtns/DifficultyBtn";
import { RecipeCards } from "../../components/RecipeCards/RecipeCards.jsx";
// Data
import {
  DifficultyLevels as DifficultyLevelData,
  recipeList as recipeListData,
} from "../../data.js";

export function Dashboard({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 10 }}
    >
      <Topbar />
      <SearchRecipe />
      <DifficultyBtns data={DifficultyLevelData} />
      <RecipeCards data={recipeListData} navigation={navigation} />
    </SafeAreaView>
  );
}
