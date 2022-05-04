import { Suspense, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image } from '@react-three/drei'
import Spheres from './Spheres'
import './Frame.css'

function Images() {
  const group = useRef()
  return (
    <group position={[-5, 0, 0]} scale={0.3} ref={group}>
      <Spheres />
    </group>
  )
}

function Words() {
  return (
    <group position={[-1, 0, 0]} scale={1}>
      <h1 style={{ position: 'absolute', top: '2vh', left: '1em', fontSize: '1.8vw', width: '9em' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae.
      </h1>
      <h1 className="side-text" style={{ position: 'absolute', top: '22vh', fontSize: '1.8vw', left: '10em', width: '9em' }}>
        Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
        quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
      </h1>
      <h1 style={{ position: 'absolute', top: '82vh', left: '0.5vw', fontSize: '4vw', width: '9em' }}>home</h1>
      <h1 style={{ position: 'absolute', top: '142vh', left: '1em', fontSize: '3.4vw', width: '9em' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam!
      </h1>
    </group>
  )
}

export default function ScrollingSummary({ position }) {
  return (
    <mesh position={position}>
      <Suspense fallback={null}>
        <ScrollControls infinite={false} damping={2} distance={1} pages={2.4}>
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
            <Words />
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </mesh>
  )
}
