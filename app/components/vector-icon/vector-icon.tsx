import * as React from "react"
import Icon from "react-native-vector-icons/AntDesign"
import Ionicon from "react-native-vector-icons/Ionicons"
import { View, ViewStyle } from "react-native"

export interface VectorIconProps {
  name: string
  color: string
  size: number
  type?: string
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
const antIcon = (props: VectorIconProps) => <Icon {...props} />
const ioniconIcon = (props: VectorIconProps) => <Ionicon {...props} />

export function VectorIcon(props: VectorIconProps) {
  // grab the props

  return (
    <View style={{ margin: 0, padding: 0 }}>
      {props.type === "ionicon" ? ioniconIcon(props) : antIcon(props)}
    </View>
  )
}
