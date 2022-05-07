import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import CartWidget from "./CartWidget";
import Logo from '../data/Shoederhouse.jpg'

const MyNavbar = () => {


  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="shadow p-0 text-uppercase fst-italic fw-bolder">
      <Container className="h-100">
        <Navbar.Brand className="me-4 h-100 d-flex justify-content-center align-items-center">
          <Link to="/"><img width={100} src={Logo} /></Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="h-100">
          <Nav className="me-auto h-100">
            <Nav.Link className="p-0">
              <Link className="px-4 h-100 d-flex align-items-center" to="/aboutus">
                About Us
              </Link>
            </Nav.Link>
            <NavDropdown className="p-0 h-100 d-flex align-items-center" title="Brands" id="collasible-nav-dropdown">
              <NavDropdown.Item className="p-0">
                <Link className="p-2 d-block fw-bold" to="/category/1">
                  Nike
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider className="m-0" />
              <NavDropdown.Item className="p-0">
                <Link className="p-2 d-block fw-bold" to="/category/2">
                  Adidas
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Link to="/cart"><CartWidget /></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
