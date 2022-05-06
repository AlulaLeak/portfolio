import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ScrollControls, Stars, Scroll, Preload, Text, Html } from '@react-three/drei'
import ScrollingSummaryMobileUp from './ScrollingSummaryMobileUp'
import Titles from './Titles'
import Navbar from './Navbar'
import './App.css'
import Zoom from 'react-reveal/Zoom'
import Flash from 'react-reveal/Flash'
import { animated } from '@react-spring/three'
import { useInView } from 'react-intersection-observer'

export default function App() {
  const [showScroll, setScroll] = useState(false)
  const [showFlash, setFlash] = useState(false)
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0
  })

  useEffect(() => {
    setTimeout(() => {
      setScroll(true)
    }, 1500)
    setTimeout(() => {
      setFlash(true)
    }, 3500)
  }, [!inView])

  return (
    <>
      {window.innerWidth < 500 && (
        <>
          <Navbar />
          <Canvas gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
            <Stars />
            <ScrollingSummaryMobileUp position={[0, 0, 2]} />
            <Environment preset="city" />
          </Canvas>
        </>
      )}
      {window.innerWidth >= 500 && (
        <>
          {/* <Navbar /> */}
          <Canvas gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
            {/* <VideoText {...store} position={[0, -40, 2]} positionPass={[0, -2.75, -1.5]} /> */}
            <ScrollControls infinite={false} damping={2} distance={1} pages={6}>
              <Stars />
              <Scroll>
                <Html className="top-screen-text">
                  <Zoom duration={2000} when={showScroll}>
                    <div ref={ref}>Hi,</div>
                    <br />
                    <div>
                      test Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                      voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                    </div>
                    <div className="bottom-half">{'-----'}</div>
                  </Zoom>
                </Html>
                <animated.mesh position={[0, 0, 10]}>
                  <Html className="top-screen-text">
                    <Zoom duration={3000} when={showScroll}>
                      <Flash forever={true} duration={6000} when={showFlash}>
                        <div className={`scroll-down-desktop`}>scroll down</div>
                      </Flash>
                    </Zoom>
                  </Html>
                </animated.mesh>
                <animated.mesh position={[0, -50, 0]}>
                  <Html className="skills-title">laskdjfljadsflkjsadlk</Html>
                </animated.mesh>

                <Titles />
                <Preload all />
              </Scroll>
              <color attach="background" args={['#191920']} />
              <Environment preset="city" />
            </ScrollControls>
          </Canvas>
        </>
      )}
    </>
  )
}
