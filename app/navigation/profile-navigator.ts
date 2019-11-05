import { createStackNavigator } from "react-navigation"
import { ProfileScreen } from "../screens/profile-screen"

export const ProfileNavigator = createStackNavigator(
  {
    user: { screen: ProfileScreen },
  },
  {
    headerMode: "none",
  },
)
