import React from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'
import { products } from '../database'

function Exercise6() {
    return (
        <div>
                <Navbar expand="lg" bg="light">
                <Container fluid>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#dropdown">Dropdown</Nav.Link>
                        </Nav>
                        <Form className="d-flex align-items-center">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section className="position-relative bg-secondary text-white text-center d-flex align-items-center justify-content-center" style={{ height: '530px', backgroundColor: '#e2e2e2' }}>
                <div className="position-absolute start-0 fs-1 px-4 cursor-pointer" style={{ cursor: 'pointer' }}>‹</div>
                <div className="fs-1 fw-light text-muted">1920 x 530</div>
                <div className="position-absolute end-0 fs-1 px-4" style={{ cursor: 'pointer' }}>›</div>
                <div className="position-absolute bottom-0 mb-3 d-flex gap-2">
                    <span className="bg-white rounded-circle d-inline-block" style={{ width: '10px', height: '10px', opacity: 0.5 }}></span>
                    <span className="bg-white rounded-circle d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                    <span className="bg-white rounded-circle d-inline-block" style={{ width: '10px', height: '10px', opacity: 0.5 }}></span>
                </div>
            </section>

            <Container className="my-5">
                <Row className="mb-4">
                    <Col>
                        <h2 className="text-secondary fw-normal">NEW PRODUCT</h2>
                        <p className="text-primary mb-0" style={{ fontSize: '0.9rem' }}>List product description</p>
                    </Col>
                </Row>

                <Row>
                    {products.map((product, index) => (
                        <Col key={index} md={3} sm={6} className="mb-4">
                            <div className="border h-100 bg-white position-relative">
                                <div className="position-relative bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '280px', backgroundColor: '#e9ecef' }}>
                                    {product.sale && (
                                        <div className="position-absolute top-0 end-0 bg-warning text-white px-4 py-1 fw-bold" style={{ transform: 'rotate(45deg) translate(15px, -10px)', fontSize: '0.8rem' }}>
                                            Sale
                                        </div>
                                    )}
                                    <span className="text-muted">280 x 280</span>
                                </div>
                                <div className="p-3">
                                    <div className="fw-normal text-secondary mb-2">{product.title}</div>
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <span className="text-muted text-decoration-line-through" style={{ fontSize: '0.85rem' }}>{product.oldPrice}</span>
                                        <span className="text-dark fw-bold" style={{ fontSize: '0.95rem' }}>{product.price}</span>
                                    </div>
                                    <div className="d-flex gap-1">
                                        <Button variant="primary" size="sm" className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#1e3d59', borderColor: '#1e3d59' }}>
                                            🛒
                                        </Button>
                                        <Button variant="outline-secondary" size="sm" className="text-secondary w-100" style={{ fontSize: '0.85rem' }}>
                                            Xem chi tiết
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Exercise6;