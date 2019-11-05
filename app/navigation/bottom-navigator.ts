import { HomeNavigator } from "./home-navigator"
import { ProfileNavigator } from "./profile-navigator"
import { TabBarIcon } from "../components/tab-bar-icon"
import { View, Platform } from "react-native"
import { color } from "../theme"
import { createBottomTabNavigator } from "react-navigation"

const IOS_BOTTOM_TAB = {
  borderTopWidth: 0,
  shadowOpacity: 0.3,
  shadowColor: "#ddd",
}

const ANDROID_BOTTOM_TAB = {
  borderTopWidth: 0.2,
  borderTopColor: "#ddd",
}

export const BottomNavigator = createBottomTabNavigator(
  {
    homeStack: { screen: HomeNavigator },
    Add: {
      screen: View,
      navigationOptions: {
        tabBarOnPress: ({ navigation }) => navigation.navigate("photoStack"),
      },
    },
    profileStack: { screen: ProfileNavigator },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        let name = ""
        if (navigation.state.routeName === "Add") {
          name = "camera"
        } else {
          name = navigation.state.routes[0].routeName
        }
        return TabBarIcon({ focused, tintColor, name })
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: color.palette.green,
      inactiveTintColor: color.palette.lighterGrey,
      style: Platform.OS === "ios" ? IOS_BOTTOM_TAB : ANDROID_BOTTOM_TAB,
    },
    initialRouteName: "homeStack"
  },
)
