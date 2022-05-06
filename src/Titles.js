import React, { useEffect, useRef } from 'react'
import Jumbo from './Jumbo'
import { useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'

export default function Titles() {
  const get = useThree((state) => state.get)
  const { width } = useThree((state) => state.viewport)
  const ref = useRef()
  useEffect(() => {
    console.log('viewport: ', get())
  }, [get()])

  return (
    <mesh ref={ref}>
      <Jumbo
        position={[-get().viewport.width / 2.2, get().viewport.width / (get().viewport.width / 6.7), -1]}
        word={'ALULA'}
        shake={0.01}
        fontScale={150 / get().viewport.width}
      />
      <Jumbo
        position={[-get().viewport.width / 2.2, get().viewport.width / (get().viewport.width / 7) - get().viewport.width / 16, -1]}
        word={'LEAKEMARIAM'}
        shake={0.01}
        fontScale={150 / get().viewport.width}
      />
      <Jumbo
        position={[-get().viewport.width / 2.2, 64 / get().viewport.width + 1.1, -1]}
        word={'SOFTWARE'}
        shake={0.01}
        fontScale={300 / get().viewport.width}
      />
      <Jumbo
        position={[get().viewport.width / 4.4 - get().viewport.width / 2.15, 64 / get().viewport.width + 1.1, -1]}
        word={'DEVELOPER'}
        shake={0.01}
        fontScale={300 / get().viewport.width}
      />
      {/* <Jumbo position={[width / 6.7, 2, -2]} word={'PROJECT1'} shake={0.002} fontScale={20} />
      <Jumbo position={[width / 6.7, -0.55, -2]} word={'PROJECT2'} shake={0.003} fontScale={20} />
      <Jumbo position={[width / 6.7, -3.4, -2]} word={'PROJECT3'} shake={0.004} fontScale={20} /> */}
      <Html>
        <div></div>
      </Html>
    </mesh>
  )
}
