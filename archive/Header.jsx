import { Navbar, Nav, Container } from 'react-bootstrap'
import { BiShoppingBag } from 'react-icons/bi'
import { LuUser2 } from 'react-icons/lu'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo1.png'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} alt='Agora logo' width={25} className='logo'/>
              Amphora
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
              <Nav.Link>
                <BiShoppingBag /> Cart
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
              <Nav.Link>
                <LuUser2 /> Sign In
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
