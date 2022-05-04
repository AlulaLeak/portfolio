import { useEffect, useRef, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, Stars } from '@react-three/drei'
import Frames from './Frames'
import VideoText from './VideoText'
import ScrollingSummary from './ScrollingSummary'
import ScrollingSummaryMobileUp from './ScrollingSummaryMobileUp'
import Titles from './Titles'
import Navbar from './Navbar'

export default function App() {
  const [clicked, setClicked] = useState(false)
  const [ready, setReady] = useState(false)
  const store = { clicked, setClicked, ready, setReady }
  const scrollRef = useRef()

  return (
    <>
      {window.innerWidth < 500 && (
        <>
          <Navbar />
          <Canvas gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
            <Stars />
            <ScrollingSummaryMobileUp />
            <Environment preset="city" />
          </Canvas>
        </>
      )}
      {window.innerWidth >= 500 && (
        <Canvas gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
          <VideoText {...store} position={[0, -40, 2]} />
          <Stars />
          <Titles />
          <color attach="background" args={['#191920']} />
          <Environment preset="city" />
          <group position={[0, -0.5, 0]}>
            <Frames />
          </group>
          <mesh ref={scrollRef}>
            <ScrollingSummary />
          </mesh>
        </Canvas>
      )}
    </>
  )
}
