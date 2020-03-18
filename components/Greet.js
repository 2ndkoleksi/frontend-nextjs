import { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'

import DownArrow from '../public/images/svg/down-arrow.svg'

const AnimatedWrapper = styled.div`
  width: 400px;
`

const AnimatedDiv = styled(animated.div)`
  overflow: hidden;
  width: 100%;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity, height;
  white-space: nowrap;
  cursor: pointer;
  line-height: 80px;
`

const AnimatedChildDiv = styled(animated.div)`
  overflow: 'hidden';
  height: ${(props) => props.height};
`

const HomeSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: lightblue;

  ${AnimatedWrapper} {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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
      color: '#8fa5b6'
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' }
    ],
    leave: [
      { color: '#c23369' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 }
    ],
    update: { color: '#28b4d7' }
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Sell', 'Branded', 'Stuff']), 2000))
    ref.current.push(setTimeout(() => set(['Sell', 'Stuff']), 5000))
    ref.current.push(
      setTimeout(() => set(['Sell', 'Authentic', 'Stuff']), 8000)
    )
  }, [])

  useEffect(() => void reset(), [])

  return (
    <HomeSection>
      <AnimatedWrapper>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <AnimatedDiv key={key} style={rest} onClick={reset}>
            <AnimatedChildDiv height={innerHeight}>{item}</AnimatedChildDiv>
          </AnimatedDiv>
        ))}
      </AnimatedWrapper>
      <div>
        <DownArrow />
      </div>
    </HomeSection>
  )
}

export default Greet
