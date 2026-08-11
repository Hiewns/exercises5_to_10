import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col, Nav } from 'react-bootstrap';

function Exercise9() {
  const [count, setCount] = useState(0);

  const cardData = {
    title: "A Title",
    description: "The description goes here.",
    imageUrl: ""
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-warning text-center py-4">
        <Container>
          <div className="bg-white p-3 d-inline-block shadow-sm" style={{ maxWidth: '350px' }}>
            <img src="/LogoFPT.png" alt="FPT Logo" style={{ height: '60px' }} />
          </div>
          <Nav className="justify-content-center">
            <Nav.Link href="#home" className="text-dark fw-bold">Home</Nav.Link>
            <Nav.Link href="#about" className="text-dark fw-bold">About</Nav.Link>
            <Nav.Link href="#contact" className="text-dark fw-bold">Contact</Nav.Link>
          </Nav>
        </Container>
      </header>

      <Container className="flex-grow-1">
        <section className="text-center">
          <h2>Task 1: Personal Profile</h2>
          <p className="lead">Hien Nguyen Duc - FPT Hoa Lac. Passionate about web development and React.</p>
        </section>

        <section className="text-center">
          <h2>Task 2: Hello World Component</h2>
          <div className="p-3 bg-light border rounded d-inline-block">
            <h4>Hello, World!</h4>
          </div>
        </section>

        <section className="text-center">
          <h2>Task 3: Counter Application</h2>
          <div className="d-inline-block p-3 border rounded bg-white shadow-sm">
            <h3>Count: {count}</h3>
            <div>
              <button className="btn btn-success" onClick={() => setCount(count + 1)}>
                Increment
              </button>
              <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
                Decrement
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3">4. Create Simple Card</h2>
          <p>This is a common pattern seen around the web. Facebook messages, Tweets, and so on:</p>
          <Card className="p-2 border-primary" style={{ maxWidth: '500px' }}>
            <Row className="g-0 align-items-center">
              <Col xs={4}>
                <div className="bg-warning bg-opacity-25 d-flex align-items-center justify-content-center p-3 h-100" style={{ minHeight: '120px' }}>
                  <span className="fw-bold fs-4 text-warning">IMG</span>
                </div>
              </Col>
              <Col xs={8}>
                <Card.Body className="py-2">
                  <div className="border-bottom border-warning pb-2">
                    <h3 className="text-warning fw-bold">{cardData.title}</h3>
                  </div>
                  <p className="text-muted">{cardData.description}</p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </section>

        <section id="about" className="text-center">
          <h3>About</h3>
          <p>This is the about section of the website.</p>
        </section>

        <section id="contact" className="text-center">
          <h3>Contact</h3>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </Container>

      <footer className="bg-warning bg-opacity-50 text-center py-3 mt-auto">
        <Container>
          <small>© 2023 Website. All rights reserved.</small>
        </Container>
      </footer>
    </div>
  );
}

export default Exercise9;