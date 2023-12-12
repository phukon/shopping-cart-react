import { Button, Container, Nav, Navbar as NavbarBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBS className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: '3rem', height: '3rem' }}
            variant="outline-primary"
            className="rounded-circle"
          >
            🛒
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center">
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBS>
  );
};
