import { Suspense, useRef } from 'react'
import { useLoader, useThree, planeBufferGeometry } from '@react-three/fiber'
import { Circle, Preload, ScrollControls, Scroll } from '@react-three/drei'
import SpheresMobile from './SpheresMobile'
import Jumbo from './Jumbo'
import * as THREE from 'three'
import faceImg from './profile.jpeg'

function ImagesMobile() {
  return (
    <mesh position={[0, 0, 0]} scale={0.3}>
      <SpheresMobile />
    </mesh>
  )
}

function Words() {
  return (
    <group position={[-1, 0, 0]} scale={1}>
      <h1></h1>
    </group>
  )
}

export default function ScrollingSummaryMobileUp() {
  const { width } = useThree((state) => state.viewport)
  const texture = useLoader(THREE.TextureLoader, faceImg)

  return (
    <mesh>
      <ScrollControls infinite={false} damping={2} distance={1} pages={2.4}>
        <Scroll>
          <ImagesMobile />
        </Scroll>
        <Scroll>
          <mesh position={[-0.5, 0, 0]}>
            <Jumbo position={[-1.1, 4.1, 10]} word={'ALULA'} shake={0.01} fontScale={28} />
            <Jumbo position={[-1.1, 3.85, 10]} word={'LEAKEMARIAM'} shake={0.01} fontScale={28} />
            <Jumbo position={[-1.1, 3.55, 10]} word={'SOFTWARE'} shake={0.01} fontScale={53} />
            <Jumbo position={[-0.15, 3.55, 10]} word={'DEV'} shake={0.01} fontScale={53} />
          </mesh>
        </Scroll>
        <mesh>
          <Scroll html>
            <div></div>
          </Scroll>
        </mesh>
      </ScrollControls>
      <Preload />
    </mesh>
  )
}
