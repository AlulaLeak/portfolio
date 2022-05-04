import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Image } from '@react-three/drei'

function Sphere(props) {
  return (
    <mesh castShadow {...props} renderOrder={-2000000}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial metalness={0.5} color="white" />
    </mesh>
  )
}

export default function Spheres() {
  const { height } = useThree((state) => state.viewport)

  const group = useRef()
  useFrame((state) => {
    group.current.children[0].position.x = THREE.MathUtils.lerp(group.current.children[0].position.x, -10 - state.mouse.x * 5, 0.01)
    group.current.children[1].position.x = THREE.MathUtils.lerp(group.current.children[1].position.x, 18 + state.mouse.x * 5, 0.03)
    group.current.children[2].position.x = THREE.MathUtils.lerp(group.current.children[2].position.x, 1 - state.mouse.x * 5, 0.02)
    group.current.children[3].position.x = THREE.MathUtils.lerp(group.current.children[3].position.x, 5 + state.mouse.x * 5, 0.05)
    group.current.children[4].position.x = THREE.MathUtils.lerp(group.current.children[4].position.x, -5 - state.mouse.x * 5, 0.06)
    group.current.children[5].position.x = THREE.MathUtils.lerp(group.current.children[5].position.x, -2 + state.mouse.x * 5, 0.07)
    group.current.children[6].position.x = THREE.MathUtils.lerp(group.current.children[6].position.x, -10 + state.mouse.x * 5, 0.1)
    group.current.children[7].position.x = THREE.MathUtils.lerp(group.current.children[7].position.x, 5 + state.mouse.x * 5, 0.05)
    group.current.children[8].position.x = THREE.MathUtils.lerp(group.current.children[8].position.x, -5 - state.mouse.x * 5, 0.06)
    group.current.children[9].position.x = THREE.MathUtils.lerp(group.current.children[9].position.x, -2 + state.mouse.x * 5, 0.07)
    group.current.children[10].position.x = THREE.MathUtils.lerp(group.current.children[10].position.x, 5 + state.mouse.x * 5, 0.05)
  })
  return (
    <group ref={group}>
      <Sphere position={[-2, 0, 0]} scale={2} /> {/* 1 */}
      <Sphere position={[2, 0, 1]} scale={1.25} /> {/* Good */}
      <Sphere position={[-2.3, -height, 2]} scale={1} /> {/* Good */}
      <Sphere position={[-0.6, -height - 1, 3]} scale={1.5} /> {/* Good */}
      <Sphere position={[0.75, -height, 3.5]} scale={1.75} /> {/* Good */}
      <Sphere position={[0, -height * 1.5, 2.5]} scale={1.75} />
      <Sphere position={[0, -height * 2 - height / 4, 0]} scale={2} /> {/* Good */}
      <Sphere position={[-2, -height * 2 - height / 4 - 3, 0]} scale={2} /> {/* 1 */}
      <Sphere position={[2, -height * 2 - height / 4 - 15, 1]} scale={1.25} /> {/* Good */}
      <Sphere position={[-2.3, -height * 2 - height / 4 - 27, 2]} scale={1} /> {/* Good */}
      <Sphere position={[-0.6, -height * 2 - height / 4 - 39, 3]} scale={1.5} /> {/* Good */}
    </group>
  )
}
