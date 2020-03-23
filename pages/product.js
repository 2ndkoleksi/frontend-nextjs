import styled from 'styled-components'

import MainLayout from '../components/layout/MainLayout'
import Card from '../components/styles/Card'
import { imgSources } from '../data/products'

const Wrapper = styled.div`
  & h1 {
    margin-top: 0;
    text-align: center;
  }
`
const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 20px;
  grid-template-rows: auto;

  @media(max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  }
`

export default () => (
  <MainLayout>
    <Wrapper>
      <h1>Products</h1>
      <Products>
        {imgSources.map((data, index) => (
          <Card content={data} key={index} />
        ))}
      </Products>
    </Wrapper>
  </MainLayout>
)
