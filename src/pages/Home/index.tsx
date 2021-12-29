import { Main, Form, Image } from './styles'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Home = () => (
    <>
        <Main>
            <Navbar />

            <section>
                <div>
                    <h1>SUMMER<br />CAMP’21</h1>

                    <Form>
                        <input type="text" placeholder="Email address" />
                        <button>Sign up</button>
                    </Form>
                </div>

                <Image src="fogueira.png" />
            </section>
        </Main>
        <Footer></Footer>
    </>
)

export default Home