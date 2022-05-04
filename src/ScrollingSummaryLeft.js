import { Suspense, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image } from '@react-three/drei'
import SpheresMobile from './SpheresMobile'
import Jumbo from './Jumbo'

function ImagesMobile() {
  const group = useRef()
  return (
    <group position={[0, 0, 0]} scale={0.3} ref={group}>
      <SpheresMobile />
    </group>
  )
}

function Words() {
  return (
    <group position={[-1, 0, 0]} scale={1}>
      <h1></h1>
    </group>
  )
}

export default function ScrollingSummaryMobileLeft() {
  const { width } = useThree((state) => state.viewport)

  return (
    <mesh>
      <ScrollControls horizontal infinite={false} damping={2} distance={1} pages={2.4}>
        <Scroll>
          <ImagesMobile />
        </Scroll>
        <Scroll>
          <mesh>
            <Jumbo position={[-1.1, 4.1, 10]} word={'ALULA'} shake={0.01} fontScale={28} />
            <Jumbo position={[-1.1, 3.85, 10]} word={'LEAKEMARIAM'} shake={0.01} fontScale={28} />
            <Jumbo position={[-1.1, 3.55, 10]} word={'SOFTWARE'} shake={0.01} fontScale={53} />
            <Jumbo position={[-0.15, 3.55, 10]} word={'DEV'} shake={0.01} fontScale={53} />
          </mesh>
        </Scroll>
      </ScrollControls>
      <Preload />
    </mesh>
  )
}
