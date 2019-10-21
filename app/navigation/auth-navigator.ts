import { createStackNavigator } from "react-navigation-stack"
import { SignupScreen } from "../screens/signup-screen"

export const AuthNavigator = createStackNavigator(
  {
    signup: { screen: SignupScreen },
  },
  {
    headerMode: "none",
  },
)
