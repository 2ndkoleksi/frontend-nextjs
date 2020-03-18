import Head from 'next/head'

import { Container, Main, Footer } from '../styles/Main'
import Navigation from '../Navbar'

function MainLayout({ children, title = '2ndkoleksi' }) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>

      {/* <Navigation /> */}

      <Main>{children}</Main>

      {/* <Footer>2ndkoleksi, 2014 - {new Date().getFullYear()}</Footer> */}
    </Container>
  )
}

export default MainLayout
