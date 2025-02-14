import { Navbar, Nav, Container } from 'react-bootstrap' 
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RiUserLine } from 'react-icons/ri'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/' className='logo'>Amphora</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'>
                <MdOutlineShoppingCart />Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <RiUserLine /> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>     
    </header>
  )
}

export default Header
