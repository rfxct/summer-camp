import { Main, Form, Image } from './styles'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Home = () => (
  <>
    <Main>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <section>
        <div>
          <h1>SUMMER<br />CAMP’21</h1>

          <Form>
            <input type="text" placeholder="Email address" />
            <button type="button">Sign up</button>
          </Form>

          <small>
            <a href="https://www.figma.com/community/file/1054740581613032228" rel="noopener noreferrer" target="_blank">
              Figma project
            </a>
            <span>•</span>
            <a href="https://github.com/rfxct" rel="noopener noreferrer" target="_blank">
              My Github
            </a>
          </small>
        </div>

        <Image id="background-img" src="fogueira.png" />
      </section>
    </Main>

    {/* Footer */}
    <Footer />
  </>
)

export default Home
