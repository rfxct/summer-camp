import { Logo, Nav, Links, Button } from './styles'

const Footer = () => (
    <Nav>
        <Logo data-highlight='/'>CAMP</Logo>

        <Links>
            <li>Hello</li>
            <li>About</li>
            <li>News</li>
        </Links>
        
        <Button>Sign up</Button>
    </Nav>
)

export default Footer