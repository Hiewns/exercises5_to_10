import React from 'react'
import { Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'


function Exercise5() {
    return (
        <Container fluid>
            <Row>
                <Navbar style={{
                    backgroundColor: 'turquoise'
                }}>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src="/LogoFPT.png"
                                width="100"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Trang chủ</Nav.Link>
                                <Nav.Link href="#link">Ngành học</Nav.Link>
                                <Nav.Link href="#link">Tuyển sinh</Nav.Link>
                                <Nav.Link href="#link">Sinh viên</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        Seach:
                        <Form inline>
                            <Form.Control
                                type="text"
                            />
                        </Form>
                    </Container>
                </Navbar>
            </Row>
            <Row>
                <span style={{ backgroundColor: 'orange', width: '100%' }}>
                    <img style={{ padding: '50px', width: '100%' }} src="/SinhvienFpt.png" alt='sinhvienfpt' />
                </span>
            </Row>
            <Row className="footer-row" style={{marginTop:'40px'}}>
                <footer className="app-footer">
                    <Container>
                        <Row className="footer-main align-items-center">
                            <Col md={6} className="footer-left">
                                <h5>Our Address</h5>
                                <p>Khu đô thị FPT Đà Nẵng</p>
                                <p><span className="footer-contact">☎</span>+84023111111</p>
                                <p><span className="footer-contact">☎</span>+852 8765 4321</p>
                                <p><span className="footer-contact">✉</span>fptudn@fpt.edu.vn</p>
                            </Col>
                            <Col md={6} className="footer-right text-md-end">
                                <div className="footer-social">
                                    <span className="social-item">G+</span>
                                    <span className="social-item">f</span>
                                    <span className="social-item">in</span>
                                    <span className="social-item">t</span>
                                    <span className="social-item">You</span>
                                    <span className="social-item">✉</span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="footer-bottom text-center">
                                © Copyright 2023
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </Row>
        </Container>

    )
}

export default Exercise5;
