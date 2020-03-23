import MainLayout from '../components/layout/MainLayout';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const Span = styled.span`
  display: inline-block;
  padding: 1rem;
`;

const FontStyle = styled.div`
  font-size 64px;

  & a {
    border-bottom: 2px solid;
    color: #222;
    text-decoration: none;
    outline: 0;
    transition: all 0.3s;
    padding: 1rem;
  }
`;

function Contact() {
  return (
    <MainLayout>
      <Wrapper>
        <h2>— You can contact us on —</h2>

        <FontStyle>
          <a href='https://www.instagram.com/2ndkoleksi/' target='_blank'>
            Instagram
          </a>
          <Span>or</Span>
          <a
            href='https://wa.me/6287871808078?text=Hai%20Sis%20,%20saya%20tertarik%20untuk%20menitipkan%20barang%20saya'
            target='_blank'>
            <font>Whatsapp</font>
          </a>
        </FontStyle>
      </Wrapper>
    </MainLayout>
  );
}

export default Contact;
