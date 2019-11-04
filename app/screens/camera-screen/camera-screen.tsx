import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, Platform, TouchableOpacity, Dimensions, View } from "react-native"
// import { useStores } from "../../models/root-store"
import { color, spacing } from "../../theme"
import { RNCamera } from "react-native-camera"
import { useCamera } from "react-native-camera-hooks"
import { CameraOptions } from "react-native-camera-hooks/src/initialState"
import { NavigationStackScreenProps, NavigationStackProp } from "react-navigation-stack"
import { VectorIcon } from "../../components/vector-icon"
import { SafeAreaView } from "react-navigation"
import { HeaderIcon } from "../../components/header-icon"

export interface CameraScreenProps extends CameraOptions, NavigationStackScreenProps<{}> {}

const ROOT: ViewStyle = {
  flex: 1,
  justifyContent: "flex-start",
  alignContent: "stretch",
}

const CAMERA: ViewStyle = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
}

const APERTURE: ViewStyle = {
  width: "100%",
  position: "absolute",
  bottom: 20,
  flex: 1,
  alignItems: "center",
}

const BACK_BUTTON: ViewStyle = {
  width: "100%",
  position: "absolute",
  top: Platform.OS === "ios" ? 22 : 9,
  left: 6,
  flex: 1,
}

const renderBackbutton = (navigation: NavigationStackProp) => {
  return (
    <View style={BACK_BUTTON}>
      <HeaderIcon
        name="arrowleft"
        color={color.palette.white}
        navigationEvent={() => navigation.pop()}
        style={{ padding: spacing.tiny, marginLeft: spacing.tiny }}
      />
    </View>
  )
}

export const CameraScreen: React.FunctionComponent<CameraScreenProps> = observer(props => {
  const [
    { cameraRef, ratio, autoFocusPoint },
    { textRecognized, facesDetected, takePicture },
  ] = useCamera(props)

  return (
    <SafeAreaView style={ROOT}>
      <RNCamera
        ref={cameraRef}
        style={CAMERA}
        autoFocusPointOfInterest={autoFocusPoint.normalized}
        ratio={ratio}
        onTextRecognized={textRecognized}
        onFacesDetected={facesDetected}
      />
      {renderBackbutton(props.navigation)}
      <View style={APERTURE}>
        <TouchableOpacity
          onPress={async () => {
            const photo = await takePicture()
            props.navigation.pop()
          }}
        >
          <VectorIcon
            name={`${Platform.OS === "android" ? "md" : "ios"}-aperture`}
            color={color.palette.white}
            size={80}
            type="ionicon"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
})
