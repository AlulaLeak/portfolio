import React, { useEffect } from 'react'
import Jumbo from './Jumbo'
import { useThree } from '@react-three/fiber'

export default function Titles() {
  const { width } = useThree((state) => state.viewport)
  return (
    <mesh>
      <Jumbo position={[-width / 2 - 7, 60, -100]} word={'ALULA'} shake={0.01} fontScale={40 / width} />
      <Jumbo position={[-width / 2 - 7, 55, -100]} word={'LEAKEMARIAM'} shake={0.01} fontScale={40 / width} />
      <Jumbo position={[width / 6.7, 2, -2]} word={'PROJECT1'} shake={0.002} fontScale={20} />
      <Jumbo position={[width / 6.7, -0.55, -2]} word={'PROJECT2'} shake={0.003} fontScale={20} />
      <Jumbo position={[width / 6.7, -3.4, -2]} word={'PROJECT3'} shake={0.004} fontScale={20} />
    </mesh>
  )
}
