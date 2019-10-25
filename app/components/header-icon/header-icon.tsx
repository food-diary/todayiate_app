import * as React from "react"
import { View, ViewStyle } from "react-native"
import { VectorIcon } from "../vector-icon"
import { TouchableOpacity } from "react-native-gesture-handler"

export interface HeaderIconProps {
  name: string
  color: string
  navigationEvent?: Function
  style?: ViewStyle
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function HeaderIcon(props: HeaderIconProps) {
  // grab the props
  const { name, color, navigationEvent, style } = props

  return (
    <TouchableOpacity onPress={() => navigationEvent()}>
      <View style={style}>
        <VectorIcon name={name} size={30} color={color} />
      </View>
    </TouchableOpacity>
  )
}
