
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";


const Header = () => {
    let styleButton = {
        color: '#000000',
        fontСize: '12px',
        lineHeight: '14px',
        display: 'inline-block',
        border: '1px solid #eee',
        borderRadius: '50%',
        width: '80px',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        padding: '24px 13px 24px 13px',
        backgroundColor: '#F2F3F3',
    }
    let { user } = useAuthContext()

    let guestNav = (
        <Nav>
            <Nav.Link to="/register" as={Link}>Register</Nav.Link>
            <Nav.Link to="/login" as={Link}>Login</Nav.Link>
        </Nav>)

    let userNav = (
        <Nav>
            <Nav.Link to="/logout" as={Link}>Logout</Nav.Link>
        </Nav>

    )

    return (
        <Navbar sticky="top" style={{ backgroundColor: "#f5f0ec", borderBottom: "1px", borderBottomColor: "#e6dbd1", borderBottomStyle: "solid" }}>
            <Container>
                <Navbar.Brand to="/" as={Link}><img
                    src="/StudioNovo.png"
                /></Navbar.Brand>
                <NavbarToggle aria-controls='responsive-navbar-nav' />
                <NavbarCollapse id='responsive-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={Link}>Home</Nav.Link>
                        <Nav.Link to="/about-as" as={Link}>About as</Nav.Link>
                        <Nav.Link to="/custom-products" as={Link}>Custom products</Nav.Link>
                        {user.email ? <Nav.Link to="/my-love" as={Link}>My love</Nav.Link> : ""}

                    </Nav>


                    {user.email
                        ? <Button to="/create" as={Link} style={styleButton}>Create product</Button>
                        : ""
                    }
                    
                    {user.email
                        ? userNav
                        : guestNav
                    }


                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}
export default Header