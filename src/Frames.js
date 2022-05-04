import { useRoute, useLocation } from 'wouter'
import { useEffect, useRef } from 'react'
import Frame from './Frame'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import url1 from './greeting-vid2.mp4'
import url2 from './coming-soon.jpg'
import url3 from './coming-soon2.jpg'
import url4 from './bet-app-vid.mp4'

const GOLDENRATIO = 1.61803398875

export default function Frames({ q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const { width } = useThree((state) => state.viewport)

  const images = [
    { position: [0, 0, 2.5], rotation: [0, 0, 0], url: url1, text: `Hi! I'm Alula and welcome to my portfolio.`, mediaType: 'video' },
    {
      position: [width / 5.7, -2.5, -2],
      rotation: [0, 0, 0],
      url: url2,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum!`,
      mediaType: 'picture'
    },
    {
      position: [width / 5.7, 0.3, -2],
      rotation: [0, 0, 0],
      url: url3,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum!`,
      mediaType: 'picture'
    },
    {
      position: [width / 5.7, 3, -2],
      rotation: [0, 0, 0],
      url: url4,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum!`,
      mediaType: 'video'
    }
  ]
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    state.camera.position.lerp(p, 0.025)
    state.camera.quaternion.slerp(q, 0.025)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props, idx) => <Frame key={idx} url={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  )
}
