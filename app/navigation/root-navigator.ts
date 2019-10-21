import { createStackNavigator } from "react-navigation-stack"
import { PrimaryNavigator } from "./primary-navigator"
import { AuthNavigator } from "./auth-navigator"

export const RootNavigator = createStackNavigator(
  {
    primaryStack: { screen: PrimaryNavigator },
    authStack: { screen: AuthNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
