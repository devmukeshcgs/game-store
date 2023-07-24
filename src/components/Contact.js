import React, { useState } from "react";
import { Form, Alert, Button, Container, Row, Col } from "react-bootstrap";

const Contact = () => {
    const [fullName, setFullName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            // await logIn(email, password);
            // navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="p-4  mt-3 ">
            <Container>
                <Row>
                    <Col></Col>
                    <Col className="box p-4" xs={8}>
                        <h3>Request A Quote Today</h3>
                        <small>We respond within 12 hours
                        </small>

                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formFullName">
                                        <Form.Control
                                            type="test"
                                            placeholder="Full name"
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formCompany">
                                        <Form.Control
                                            type="test"
                                            placeholder="Company"
                                            onChange={(e) => setCompany(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Select aria-label="Default select example">
                                            {/* <select id="subject" name="subject" class="valid"> */}
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="HTML5 Game Licensing">HTML5 Game Licensing</option>
                                            <option value="Trade Show Games">Trade Show Games</option>
                                            <option value="White Label Games">White Label Games</option>
                                            <option value="Game Reskin">Game Reskin</option>
                                            <option value="Games For Online Events and Virtual Conferences">Games For Online Events and Virtual Conferences</option>
                                            <option value="Microsite Games">Microsite Games</option>
                                            <option value="Branded Games">Branded Games</option>
                                            <option value="Skill Based Games">Skill Based Games</option>
                                            <option value="NFT Marketing Games">NFT Marketing Games</option>
                                            <option value="Playable Ads">Playable Ads</option>
                                            <option value="White Label Games Portal">White Label Games Portal</option>
                                            <option value="Game API Feed">Game API Feed</option>
                                            <option value="Custom Game Development">Custom Game Development</option>
                                            <option value="Offline Licenses">Offline Licenses</option>
                                            <option value="Custom Licenses">Custom Licenses</option>
                                            <option value="Digital Signage Games">Digital Signage Games</option>
                                            <option value="Looking for a specific game">Looking for a specific game</option>
                                            <option value="Market Research/Press">Market Research/Press</option>
                                            <option value="Partnership Proposal">Partnership Proposal</option>
                                            {/* </select> */}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email address"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        Note: Please use your corporate email address. We currently do not accept inquiries from gmail.com/yahoo.com/free email providers.

                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col> <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        type="text"
                                        placeholder="Message"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                </Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" type="Submit">Submit</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
