import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import { CameraScreen } from "../screens/camera-screen"
import { createStackNavigator } from "react-navigation-stack"
import { CameraRollScreen } from "../screens/camera-roll-screen"
import { TabBarIcon } from "../components/tab-bar-icon"
import { PicPreviewScreen } from "../screens/pic-preview-screen"
import { color } from "../theme"
import { HeaderIcon } from "../components/header-icon"

const PhotoNavigator = createMaterialBottomTabNavigator(
  {
    camera: createStackNavigator(
      {
        takeCamera: { screen: CameraScreen },
        preview: { screen: PicPreviewScreen },
      },
      {
        initialRouteName: "takeCamera",
        headerMode: "none",
      },
    ),
    cameraRoll: createStackNavigator(
      {
        takeCameraRoll: {
          screen: CameraRollScreen,
          navigationOptions: ({ navigation }) => ({
            headerLeft: () =>
              HeaderIcon({
                name: "arrowleft",
                color: color.palette.purple,
                navigationEvent: () => navigation.pop(),
                style: { paddingHorizontal: 15 },
              }),
          }),
        },
        preview: { screen: PicPreviewScreen },
      },
      {
        initialRouteName: "takeCameraRoll",
      },
    ),
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        let name = "camera"
        if (navigation.state.routeName === "cameraRoll") {
          name = "picture"
        }
        const bodyStyle = { width: 30, height: 30, marginBottom: 10 }
        return TabBarIcon({ focused, tintColor, name, bodyStyle })
      },
      barStyle: { backgroundColor: color.palette.white },
      labeled: false,
      activeColor: color.palette.purple,
      inactiveColor: color.palette.offWhite,
    }),
  },
)

export default createStackNavigator(
  {
    PhotoNavigator,
  },
  {
    headerMode: "none",
  },
)
