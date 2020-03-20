import styled from 'styled-components'

import { consignedRules, unconsignedRules } from '../../data/rules'
import CardRules from '../styles/CardRules'

const Wrapper = styled.div`
  padding-top: 4rem;
  & h1 {
    margin: 0;
    text-align: center;
  }
`

const RulesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-gap: 1rem;
  padding: 2rem 1rem;
`

function InaRules() {
  return (
    <Wrapper>
      <h1>ATURAN PENGIRIMAN</h1>
      <RulesContent>
        {consignedRules.map((data, index) => (
          <CardRules content={data} id={index + 1} ke={index} />
        ))}
      </RulesContent>

      <RulesContent>
        {unconsignedRules.map((data, index) => (
          <CardRules content={data} id={index + 1} ke={index} />
        ))}
      </RulesContent>
    </Wrapper>
  )
}

export default InaRules
