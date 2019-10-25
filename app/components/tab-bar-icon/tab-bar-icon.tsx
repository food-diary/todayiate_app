import * as React from "react"
import { View, ViewStyle } from "react-native"
import { VectorIcon } from "../vector-icon"

export interface TabBarIconProps {
  name: string
  focused?: boolean
  tintColor?: string
  bodyStyle?: ViewStyle
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function TabBarIcon(props: TabBarIconProps) {
  // grab the props
  const { name, tintColor, bodyStyle } = props

  return (
    <View style={bodyStyle || { width: 30, height: 30, margin: 5 }}>
      <VectorIcon name={name} size={30} color={tintColor} />
    </View>
  )
}
