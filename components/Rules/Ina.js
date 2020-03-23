import styled from 'styled-components';
import Link from 'next/link';

import { consignedRules, unconsignedRules } from '../../data/rules';
// import CardRules from '../styles/Card';
import ListWrapper from '../styles/ListRules'

const Wrapper = styled.div`
  padding: 4rem 2rem;
  & h1 {
    margin: 0;
    text-align: center;
  }
  // background: url(/images/logo/watermark.png) no-repeat center center fixed;
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: contain;
`;

const RulesContent = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
  // grid-gap: 1rem;
  // padding: 2rem 1rem;
`;

const ImgWrapper = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
  width: 100px;
  height: 100px;

  & img {
    max-width: 100%;
  }
`;

function InaRules() {
  return (
    <Wrapper>
      <h1>ATURAN PENGIRIMAN</h1>
      <div>
        <h2>Titip Barang Tidak Langsung Di Kita</h2>
        <RulesContent>
          {unconsignedRules.map((data, index) => (
            <ListWrapper content={data} id={index + 1} key={index} />
          ))}
        </RulesContent>
      </div>

      <div>
        <h2>Titip Barang Langsung Di Kita</h2>
        <RulesContent>
          {consignedRules.map((data, index) => (
            <ListWrapper content={data} id={index + 1} key={index} />
          ))}
        </RulesContent>
      </div>

      <ImgWrapper>
        <Link href='/'>
          <img
            src='/images/logo/watermark.png'
            alt='logo'
            rel='noopener noreferrer'
          />
        </Link>
      </ImgWrapper>
    </Wrapper>
  );
}

export default InaRules;
