import { createStackNavigator } from "react-navigation-stack"
import { ProfileScreen } from "../screens/profile-screen"

export const ProfileNavigator = createStackNavigator(
  {
    user: { screen: ProfileScreen },
  },
  {
    headerMode: "none",
  },
)
