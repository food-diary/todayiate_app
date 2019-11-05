import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, RefreshControl, StatusBar } from "react-native"
import { Text } from "../../components/text"
import { useStores } from "../../models/root-store"
import { color } from "../../theme"
import { SafeAreaView, NavigationScreenProps } from "react-navigation"
import { ScrollView } from "react-native-gesture-handler"

export interface HomeScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  flex: 1,
}

const SCROLLVIEW: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
}

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = observer(props => {
  const [refreshing, setRefreshing] = React.useState(false)
  const { pictureStore } = useStores()
  const { pictures } = pictureStore

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [refreshing])

  React.useEffect(() => {
    pictureStore.getPictures()
    return () => pictureStore.cleanPictures()
  }, [refreshing])

  return (
    <SafeAreaView style={ROOT}>
      <ScrollView
        contentContainerStyle={SCROLLVIEW}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <Text text={JSON.stringify(pictures)} style={{ color: color.palette.black }} />
      </ScrollView>
    </SafeAreaView>
  )
})
