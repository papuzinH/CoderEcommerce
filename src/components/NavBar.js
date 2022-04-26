import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from "react-bootstrap";
import CartWidget from "./CartWidget";

const MyNavbar = () => {

  
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/">ShoeDerHouse</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Sobre Nosotros</Nav.Link>
            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/category/1">Deportivas</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                <Link to="/category/2">Urbanas</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                <Link to="/category/3">Running</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
          <Link to="/cart"><CartWidget/></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
