import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaCog, FaJournalWhills, FaPage4, FaPagelines, FaParagraph, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { clearCredentials } from '../slices/authSlice';

export default function Header() {
    const { userInfo } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(clearCredentials());
            navigate('/');
        }
        catch (err) {
            console.error(err);
        }
    };

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <FaJournalWhills /> Journ0
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {userInfo ? (
                                <>
                                    <NavDropdown title={userInfo.name} id="username">
                                        <LinkContainer to="/new-entry">
                                            <NavDropdown.Item><FaParagraph /> New Entry</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/profile">
                                            <NavDropdown.Item><FaCog /> Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={logoutHandler}><FaSignOutAlt /> Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                    <>
                                        <LinkContainer to="/login">
                                            <Nav.Link><FaSignInAlt /> Login</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/register">
                                            <Nav.Link><FaSignInAlt /> Register</Nav.Link>
                                        </LinkContainer>
                                    </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}