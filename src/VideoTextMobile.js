import React, { useState } from 'react'
import './styles.css'
import url from './14.mp4'
import { Text } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function VideoTextMobile({ positionPass = [0, 0, 0] }) {
  const textRef = useRef()

  useFrame((state) => {
    textRef.current.rotation.x = state.mouse.y / 6 - 0.9
    textRef.current.rotation.y = state.mouse.x / 40
  })

  const [video] = useState(() => {
    const vid = document.createElement('video')
    vid.src = url
    vid.crossOrigin = 'Anonymous'
    vid.loop = true
    vid.muted = true
    vid.play()
    return vid
  })

  return (
    <mesh ref={textRef} position={positionPass}>
      <Text font="/inter-bold.woff" fontSize={1} letterSpacing={-0.06}>
        {` Scroll Up`}
        <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </Text>
    </mesh>
  )
}
