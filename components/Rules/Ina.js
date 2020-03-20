import styled from 'styled-components'

import { consignedRules, unconsignedRules } from '../../data/rules'
import CardRules from '../styles/CardRules'

const Wrapper = styled.div`
  padding: 4rem 2rem;
  & h1 {
    margin: 0;
    text-align: center;
  }
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
      <h1>ATURAN PENGIRIMAN</h1>
      <div>
        <h2>Titip Barang Tidak Langsung Di Kita</h2>
        <RulesContent>
          {unconsignedRules.map((data, index) => (
            <CardRules content={data} id={index + 1} ke={index} />
          ))}
        </RulesContent>
      </div>

      <div>
        <h2>Titip Barang Langsung Di Kita</h2>
        <RulesContent>
          {consignedRules.map((data, index) => (
            <CardRules content={data} id={index + 1} ke={index} />
          ))}
        </RulesContent>
      </div>
    </Wrapper>
  )
}

export default InaRules
