import { HomeScreen } from "../screens/home-screen"
import { createStackNavigator } from "react-navigation"

export const HomeNavigator = createStackNavigator(
  {
    home: { screen: HomeScreen },
  },
  {
    headerMode: "none",
  },
)
