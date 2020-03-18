import styled from 'styled-components';

import { Container } from './styles/Main';

const Slide2Wrapper = styled(Container)`
  background-color: #add8e6;
  background-image: linear-gradient(180deg, #add8e6 55%, #e295d3 100%);
  padding: 4rem;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 1px;

  & p {
    margin-top: 0;
  }

  & div {
    width: 200px;
    margin: 0 auto;

    & img {
      width: 100%;
    }'
  }
`;

function Slide2() {
  return (
    <Slide2Wrapper>
      <p>
        Hai Girls, I know many of you is like with branded stuff but you can
        afford it becuase the orice is to high or you have the stuff but have a
        hard time try to sell it.
      </p>

      <p>
        That is why I create this platform for you so you can have or sell your
        stuff.
      </p>

      <p>
        Don't worry about the authenticity because all the stuff is throught the
        process to prove the atuhenticity
      </p>

      <div>
        <img
          src='images/logo/watermark.png'
          alt='watermark'
          rel='noopener noreferrer'
        />
      </div>
    </Slide2Wrapper>
  );
}

export default Slide2;
