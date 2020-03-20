import styled from 'styled-components'

import { consignedRulesEn, unconsignedRulesEn } from '../../data/rules'
import CardRules from '../styles/CardRules'

const Wrapper = styled.div`
  padding: 4rem 2rem;
  & h1 {
    margin: 0;
    text-align: center;
  }
  background: url(/images/logo/watermark.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: contain;
`

const RulesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
  grid-gap: 1rem;
  padding: 2rem 1rem;
`

function InaRules() {
  return (
    <Wrapper>
      <h1>CONSIGNMENT RULES</h1>
      <div>
        <h2>Stuffs Are Not Keep In Us</h2>
        <RulesContent>
          {unconsignedRulesEn.map((data, index) => (
            <CardRules content={data} id={index + 1} key={index} />
          ))}
        </RulesContent>
      </div>

      <div>
        <h2>Stuffs Are Keep In Us</h2>
        <RulesContent>
          {consignedRulesEn.map((data, index) => (
            <CardRules content={data} id={index + 1} key={index} />
          ))}
        </RulesContent>
      </div>
    </Wrapper>
  )
}

export default InaRules
