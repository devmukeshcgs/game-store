import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

function MainNavigation() {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">GameStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user && user.email}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    {!user ?
                        <Link to="/">Login</Link>
                        :
                        <button variant="link" onClick={handleLogout}>Log out </button>
                    }
                    <Nav>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavigation;