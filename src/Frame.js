import { useRef, useState, useEffect } from 'react'
import getUuid from 'uuid-by-string'
import { extend, useFrame } from '@react-three/fiber'
import { useCursor, Image, Text } from '@react-three/drei'
import * as THREE from 'three'
import './Frame.css'

const GOLDENRATIO = 1.61803398875

export default function Frame({ mediaType, text, url, c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const vidRef = useRef()
  const image = useRef()
  const frame = useRef()
  const name = getUuid(url)
  const textRef = useRef()
  useCursor(hovered)

  const [frontVideo] = useState(() => {
    if (mediaType === 'video') {
      const vid = document.createElement('video')
      vid.src = url
      vid.crossOrigin = 'Anonymous'
      vid.loop = true
      vid.muted = true
      vid.play()
      return vid
    }
  })

  useFrame((state) => {
    if (mediaType === 'picture') {
      image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
      image.current.scale.x = THREE.MathUtils.lerp(image.current.scale.x, 0.85 * (hovered ? 0.85 : 1), 0.1)
      image.current.scale.y = THREE.MathUtils.lerp(image.current.scale.y, 0.9 * (hovered ? 0.905 : 1), 0.1)
      frame.current.material.color.lerp(c.set(hovered ? 'orange' : 'white'), 0.1)
    }
  })

  function newTab() {
    window.open('https://www.github.com', '_blank')
  }

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial ref={textRef} color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        {mediaType === 'video' && (
          <meshStandardMaterial emissive={'white'} side={THREE.DoubleSide}>
            <videoTexture ref={vidRef} attach="map" args={[frontVideo]} />
            <videoTexture ref={vidRef} attach="emissiveMap" args={[frontVideo]} />
          </meshStandardMaterial>
        )}
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        {mediaType === 'picture' && <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />}
      </mesh>
      <mesh>
        <Text className="side-text" maxWidth={0.6} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.05}>
          {text}
        </Text>
        <Text
          onPointerOver={(e) => (e.stopPropagation(), hover(true))}
          onPointerOut={() => hover(false)}
          onClick={() => newTab()}
          maxWidth={0.5}
          anchorX="left"
          anchorY="top"
          position={[0.55, GOLDENRATIO - 0.9, 0]}
          fontSize={0.07}>
          [ Github Link ]
        </Text>
      </mesh>
    </group>
  )
}
