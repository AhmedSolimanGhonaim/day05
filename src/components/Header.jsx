import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../css/Header.css'; 
import { counterReducer } from '../store/counterSlice';
import { useSelector } from 'react-redux';


export default function Header() {
  const { count } = useSelector(store => store.counterSlice)

  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          <span className="gradient-text">Shop</span>
          <span className="brand-subtitle">Haven</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active-link' : ''}`
              }
            >
              Home
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/products" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active-link' : ''}`
              }
            >
              Products
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/count" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active-link' : ''}`
              }
            >
              Count ({count})
            </Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}