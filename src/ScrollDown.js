import * as THREE from 'three'
import React, { useMemo, useRef, useLayoutEffect } from 'react'
import { extend, useLoader } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import boldUrl from './assets/fonts/bold.blob'

export default function Text({ fontScale, children, vAlign = 'center', hAlign = 'center', size = 1.5, color = '#000000', ...props }) {
  const font = useLoader(FontLoader, boldUrl)
  extend({ TextGeometry })
  const config = useMemo(
    () => ({
      font,
      size: 40 / fontScale,
      height: 30 / fontScale,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6 / fontScale,
      bevelSize: 2.5 / fontScale,
      bevelOffset: 0,
      bevelSegments: 8
    }),
    [font]
  )
  const mesh = useRef()
  useLayoutEffect(() => {
    const size = new THREE.Vector3()
    mesh.current.geometry.computeBoundingBox()
    mesh.current.geometry.boundingBox.getSize(size)
    mesh.current.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
    mesh.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
  }, [children])
  return (
    <group {...props} scale={[0.12 * size, 0.12 * size, 0.12]}>
      <mesh ref={mesh}>
        <textGeometry args={[children, config]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  )
}
