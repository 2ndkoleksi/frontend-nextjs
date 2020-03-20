import MainLayout from '../components/layout/MainLayout'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`
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


`

function Contact() {
  return (
    <MainLayout>
      <Wrapper>
        <h2>— You can contact us on —</h2>

        <FontStyle>
          <a href='https://www.instagram.com/2ndkoleksi/' target='_blank'>
            Instagram
          </a>{' '}
          and{' '}
          <a
            href='https://wa.me/62878718080-78?text=Saya%20tertarik%untuk%menitipkan%20barang%20saya'
            target='_blank'
          >
            <font>Whatsapp</font>
          </a>
        </FontStyle>
      </Wrapper>
    </MainLayout>
  )
}

export default Contact
