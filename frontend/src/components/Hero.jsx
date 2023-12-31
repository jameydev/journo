import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Hero() {
    return (
        <div className="py-5">
            <Container className="d-flex justify-content-center">
                <Card className="p-5 d-flex flex-column align-items-center">
                    <h1 className="text-center mb">
                        Welcome to JOURNO!
                    </h1>
                    <p className="text-center mb-4">
                        This is a simple private journal
                        application built with the MERN stack.
                    </p>
                    <p className="text-center mb-4">
                        Users can register and login to create, edit, delete, and view their own private journal entries.
                    </p>
                    <div className="d-flex">
                        <LinkContainer to="/login">
                            <Button variant="primary" className="me-3">
                                Login
                            </Button>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Button variant="secondary">
                                Register
                            </Button>
                        </LinkContainer>
                    </div>
                </Card>
            </Container>
        </div>
    );
}