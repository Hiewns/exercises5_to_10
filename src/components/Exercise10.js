import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Form, FormControl, Row, Col, Card, Button } from 'react-bootstrap';
import { menuItems } from '../database';

function Exercise10() {
  return (
    <div className="bg-dark text-light min-vh-100">
      {/* Header / Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4 border-bottom border-secondary">
        <Navbar.Brand href="#home" className="fw-bold">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Form className="d-flex ms-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="bg-secondary border-0 text-light"
                size="sm"
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Hero Section */}
      <div 
        className="position-relative text-center text-white d-flex align-items-center justify-content-center"
        style={{
          height: '400px',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="bg-dark bg-opacity-75 p-4 rounded shadow">
          <h1 className="display-4 fw-bold">Neapolitan Pizza</h1>
          <p className="lead mb-0">Authentic Italian taste in every bite</p>
        </div>
      </div>

      {/* Our Menu Section */}
      <Container className="py-5 text-center">
        <h2 className="mb-4 fw-bold">Our Menu</h2>
        <Row>
          {menuItems.map((item, index) => (
            <Col md={3} sm={6} className="mb-4" key={index}>
              <Card className="bg-secondary text-light h-100 border-0 position-relative">
                {item.sale && (
                  <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">SALE</span>
                )}
                <div style={{ height: '150px', backgroundColor: '#333' }} className="d-flex align-items-center justify-content-center">
                  <img src={item.image} alt={item.name} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fs-6 fw-bold">{item.name}</Card.Title>
                    <div className="mb-2">
                      <span className="text-decoration-line-through text-muted small me-2">{item.oldPrice}</span>
                      <span className="text-warning fw-bold">{item.newPrice}</span>
                    </div>
                  </div>
                  <Button variant="dark" size="sm" className="w-100 border border-secondary text-light">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Book Your Table Section */}
      <Container className="py-5" style={{ maxWidth: '700px' }}>
        <h2 className="text-center mb-4 fw-bold">Book Your Table</h2>
        <Form>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formName">
                <Form.Label className="small">Your Name *</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" className="bg-secondary border-0 text-light" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formDate">
                <Form.Label className="small">Date *</Form.Label>
                <Form.Control type="text" placeholder="dd/mm/yyyy" className="bg-secondary border-0 text-light" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formService">
                <Form.Label className="small">Select a Service *</Form.Label>
                <Form.Select className="bg-secondary border-0 text-light">
                  <option>Choose service...</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4" controlId="formMessage">
            <Form.Control as="textarea" rows={4} placeholder="Write your message.." className="bg-secondary border-0 text-light" />
          </Form.Group>

          <div className="text-center">
            <Button variant="warning" type="submit" className="px-4 fw-bold text-dark">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Exercise10;