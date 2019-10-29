import { PrimaryNavigator } from "./primary-navigator"
import { createSwitchNavigator } from "react-navigation"
import { WelcomeScreen } from "../screens/welcome-screen"
import { AuthLoadingScreen } from "../screens/auth-loading-screen"
import { createStackNavigator } from "react-navigation-stack"

export const RootNavigator = createStackNavigator(
  {
    AuthLoading: {
      screen: AuthLoadingScreen,
      path: "authloading",
    },
    Auth: {
      screen: WelcomeScreen,
      path: "welcome",
    },
    App: { screen: PrimaryNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
    initialRouteName: "AuthLoading",
  },
)
