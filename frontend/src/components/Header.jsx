import { Navbar, Nav, Container } from 'react-bootstrap' 
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RiUserLine } from 'react-icons/ri'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Amphora</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'>
                <MdOutlineShoppingCart />Cart
              </Nav.Link>
              <Nav.Link href='/login'>Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>     
    </header>
  )
}

export default Header
