import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ThreeColumns = () => (
    <div className="d-flex flex-wrap">
        <Col md={4}>
            <Card>
                <Card.Header>Column 1</Card.Header>
                <Card.Body>This is the content for column 1.</Card.Body>
            </Card>
        </Col>
        <Col md={4}>
            <Card>
                <Card.Header>Column 2</Card.Header>
                <Card.Body>This is the content for column 2.</Card.Body>
            </Card>
        </Col>
        <Col md={4}>
            <Card>
                <Card.Header>Column 3</Card.Header>
                <Card.Body>This is the content for column 3.</Card.Body>
            </Card>
        </Col>
    </div>
);

export default ThreeColumns;
