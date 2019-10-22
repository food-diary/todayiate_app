import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, ImageStyle, Dimensions } from "react-native"
import { Screen } from "../../components/screen"
// import { useStores } from "../../models/root-store"
import { color } from "../../theme"
import { RNCamera } from "react-native-camera"
import { useCamera } from "react-native-camera-hooks"
import { CameraOptions } from "react-native-camera-hooks/src/initialState"
import { Button } from "../../components/button"
import { Icon } from "../../components/icon"
import { NavigationStackScreenProps } from "react-navigation-stack"

export interface CameraScreenProps extends CameraOptions, NavigationStackScreenProps<{}> {
}

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
}

const BACK_BUTTON: ViewStyle = {
  
}

const CAMERA: ViewStyle = {
  flex: 1,
  width: "100%",
}

const APERTURE: ImageStyle = {
  width: 35,
  height: 35,
}

export const CameraScreen: React.FunctionComponent<CameraScreenProps> = observer(props => {
  const [
    { cameraRef, ratio, autoFocusPoint },
    { textRecognized, facesDetected, takePicture },
  ] = useCamera(props)

  return (
    <Screen style={ROOT}>
      <Button
        onPress={() => props.navigation.pop()}
        children={<Icon icon={"back"} style={APERTURE} />}
        style={BACK_BUTTON}
      />
      <RNCamera
        ref={cameraRef}
        style={CAMERA}
        autoFocusPointOfInterest={autoFocusPoint.normalized}
        ratio={ratio}
        onTextRecognized={textRecognized}
        onFacesDetected={facesDetected}
      />
      <Button
        onPress={async () => {
          const photo = await takePicture()
          console.log(photo)
          props.navigation.pop()
        }}
        children={<Icon icon={"aperture"} style={APERTURE} />}
      />
    </Screen>
  )
})
