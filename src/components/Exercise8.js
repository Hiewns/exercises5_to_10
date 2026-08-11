import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Container, 
  Form, 
  Row, 
  Col, 
  InputGroup, 
  Button 
} from 'react-bootstrap';

function Exercise8() {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1a1a1a' }}>Form đặt vé máy bay</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formHoTen">
          <Form.Label style={{ fontWeight: 600, color: '#333' }}>Họ tên</Form.Label>
          <InputGroup>
            <Form.Control 
              type="text" 
              placeholder="Họ tên" 
              style={{ borderRadius: '8px', borderColor: '#ddd' }}
            />
            <InputGroup.Text style={{ background: '#f8f9fa', borderColor: '#ddd' }}>vnđ</InputGroup.Text>
          </InputGroup>
          <Form.Text className="text-muted" style={{ fontSize: '0.85rem' }}>
            Phải nhập 5 ký tự, in hoa....
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDiaChi">
          <Form.Label style={{ fontWeight: 600, color: '#333' }}>Địa chỉ</Form.Label>
          <Form.Control type="text" style={{ borderRadius: '8px', borderColor: '#ddd' }} />
          <Form.Text className="text-muted" style={{ fontSize: '0.85rem' }}>
            Phải nhập 5 ký tự, in hoa....
          </Form.Text>
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formDiTu">
              <Form.Label style={{ fontWeight: 600, color: '#333' }}>Đi từ</Form.Label>
              <Form.Select style={{ borderRadius: '8px', borderColor: '#ddd' }}>
                <option value="Hà nội">Hà nội</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formDen">
              <Form.Label style={{ fontWeight: 600, color: '#333' }}>Đến</Form.Label>
              <Form.Select style={{ borderRadius: '8px', borderColor: '#ddd' }}>
                <option value="Hà nội">Hà nội</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>
          <Form.Check 
            type="checkbox"
            id="diCheck"
            label="Đi"
          />
          <Form.Check 
            type="checkbox"
            id="veCheck"
            label="Về"
          />
        </Form.Group>

        <div className="d-grid mt-4">
          <Button variant="primary" type="submit" style={{ borderRadius: '8px', padding: '0.75rem', fontWeight: 600, background: '#2563eb', border: 'none' }}>
            Đặt vé
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Exercise8;