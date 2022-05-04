import React, { useState } from 'react'
import './styles.css'
import * as THREE from 'three'
import url from './10.mp4'

export default function FrontVid() {
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
    <group rotation={[Math.PI / 8, Math.PI * 1.2, 0]}>
      <mesh rotation={[0, 0, 0]} position={[0, 0, 1.1]}>
        <planeGeometry args={[3.2, 1.9]} />
        <meshStandardMaterial emissive={'white'} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  )
}
