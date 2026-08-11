import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Exercise7() {
    return (
        <Container>
            <h2>Cards Columns</h2>
            <Row>
                <Col md={4}>
                    <Card className="text-white border-0 rounded-0" style={{ backgroundColor: '#2d82ec' }}>
                        <Card.Body>
                            <div className="bg-white">
                                <Card.Img 
                                    src="car.png" 
                                    alt="Car" 
                                    className="w-100 object-fit-contain"
                                />
                            </div>
                            <Card.Text className="text-center text-dark" style={{ fontSize: '0.95rem' }}>
                                Some text inside the first card
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="text-white border-0 rounded-0" style={{ backgroundColor: '#f3c64f' }}>
                        <Card.Body>
                            <div className="bg-white">
                                <Card.Img 
                                    src="car.png" 
                                    alt="Car" 
                                    className="w-100 object-fit-contain"
                                />
                            </div>
                            <Card.Text className="text-center text-dark" style={{ fontSize: '0.95rem' }}>
                                Some text inside the first card
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="text-white border-0 rounded-0" style={{ backgroundColor: '#cc5252' }}>
                        <Card.Body>
                            <div className="bg-white">
                                <Card.Img 
                                    src="car.png" 
                                    alt="Car" 
                                    className="w-100 object-fit-contain"
                                />
                            </div>
                            <Card.Text className="text-center text-dark" style={{ fontSize: '0.95rem' }}>
                                Some text inside the first card
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Exercise7