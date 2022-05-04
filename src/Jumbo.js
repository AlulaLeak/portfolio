import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Text from './ScrollDown'

export default function Jumbo({ fontScale, position, word, shake }) {
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * shake))
  return (
    <group ref={ref}>
      <Text fontScale={fontScale} hAlign="right" position={position} children={word} />
    </group>
  )
}
