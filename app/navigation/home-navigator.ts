import { createStackNavigator } from "react-navigation-stack"
import { HomeScreen } from "../screens/home-screen"

export const HomeNavigator = createStackNavigator(
  {
    home: { screen: HomeScreen },
  },
  {
    headerMode: "none",
  },
)
