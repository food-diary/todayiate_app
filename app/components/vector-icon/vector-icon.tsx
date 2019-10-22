import * as React from "react"
import Icon from "react-native-vector-icons/FontAwesome5"

export interface VectorIconProps {
  /**
   * icon's name
   */
  name: string

  /**
   * icon's color
   */
  color: string

  /**
   * icon's size
   */
  size: number
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function VectorIcon(props: VectorIconProps) {
  // grab the props
  const { name, size, color } = props

  return <Icon name={name} size={size} color={color} />
}
