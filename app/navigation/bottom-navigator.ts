import { createBottomTabNavigator } from "react-navigation-tabs"
import { HomeNavigator } from "./home-navigator"
import { ProfileNavigator } from "./profile-navigator"
import { TabBarIcon } from "../components/tab-bar-icon"
import { View, Platform } from "react-native"

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
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style: Platform.OS === "ios" ? IOS_BOTTOM_TAB : ANDROID_BOTTOM_TAB,
    },
  },
)
