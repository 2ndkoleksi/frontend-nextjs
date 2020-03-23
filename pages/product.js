import styled from 'styled-components';

import Card from '../components/styles/Card'
import { imgSources } from '../data/products';

const Wrapper = styled.div`
  height: 100%;
`;

const Products = styled.div`
  // height: 300px;
  // width: 300px;

  // & img {
  //   max-width: 100%;
  //   max-height: 100%;
  // }
`;

export default () => (
  <Wrapper>
    <h1>Products</h1>
    {imgSources.map((data, index) => (
      <Products key={data}>
        <Card content={data} key={index} />
      </Products>
    ))}
  </Wrapper>
);
