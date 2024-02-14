import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
  Button,
  Form
} from "react-bootstrap";
import "../Styles/Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";

function RelastoNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="d-flex gap-3 align-items-center me-5">
          <img src="/assets/logo.svg" alt="" />
          <p className="nav_brand text-left font-markoone text-orange-A700 text-xl w-auto m-0">
            Relasto
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className=" nav_link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className=" nav_link" href="/listing">
              Listing
            </Nav.Link>
            <NavDropdown title="Agent" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/agent">Agents</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className=" nav_link" href="/property">
              Property
            </Nav.Link>
            <Nav.Link className=" nav_link" href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link className=" nav_link" href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className=" nav_link" href="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav className="m-0">
            <div className="d-flex align-items-center">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">
                  <AiOutlineSearch />
                </Button>
              </Form>
            </div>
            <Nav.Link href="/login">
              <Button variant="dark">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RelastoNavbar;
