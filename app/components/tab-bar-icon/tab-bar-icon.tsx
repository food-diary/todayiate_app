import * as React from "react"
import { View } from "react-native"
import { VectorIcon } from "../vector-icon"

export interface TabBarIconProps {
  name: string
  focused: boolean
  tintColor?: string
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function TabBarIcon(props: TabBarIconProps) {
  // grab the props
  const { name, tintColor } = props

  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <VectorIcon name={name} size={22} color={tintColor} />
    </View>
  )
}
