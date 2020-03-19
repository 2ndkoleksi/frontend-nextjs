import { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'

import DownArrow from '../public/images/svg/down-arrow.svg'
import Slide2 from './Slide2'

const AnimatedWrapper = styled.div`
  height: 250px;
  max-height: 250px;
`

const AnimatedDiv = styled(animated.div)`
  overflow: hidden;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity, height;
  white-space: nowrap;
  cursor: pointer;
  line-height: 80px;
`

const AnimatedChildDiv = styled(animated.div)`
  overflow: hidden;
  height: 80px;
`

const HomeSection = styled.div`
  padding-top: 4rem;
`

function Greet() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#cae9f0'
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#fff' },
      { transform: 'perspective(600px) rotateX(0deg)' }
    ],
    leave: [
      { color: '#cae9f0' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 }
    ],
    update: { color: '#FF4893' }
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Sale', 'Branded', 'Stuff']), 2000))
    ref.current.push(setTimeout(() => set(['Sale', 'Stuff']), 5000))
    ref.current.push(
      setTimeout(() => set(['Sale', 'Authentic', 'Stuff']), 8000)
    )
  }, [])

  useEffect(() => void reset(), [])

  return (
    <HomeSection>
      <AnimatedWrapper>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <AnimatedDiv key={key} style={rest}>
            <AnimatedChildDiv>{item}</AnimatedChildDiv>
          </AnimatedDiv>
        ))}
      </AnimatedWrapper>
      <div>
        <Slide2 />
      </div>

    </HomeSection>
  )
}

export default Greet
