import { createStackNavigator } from "react-navigation-stack"
import { SignupScreen } from "../screens/signup-screen"
import { WelcomeScreen } from "../screens/welcome-screen"

export const AuthNavigator = createStackNavigator(
  {
    welcome: {
      screen: WelcomeScreen,
      path: "welcome",
    },
    signup: { screen: SignupScreen },
  },
  {
    headerMode: "none",
  },
)
