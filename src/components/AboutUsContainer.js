//Packages
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const AboutUsContainer = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(()=>{setLoading(false)}, 2000);
    }, []);    
    
    return (<>
        {loading == false ?
            <Container >
                <Row className="py-5 vh-100">
                    <Col xs={6}>
                        <img style={{ width: "100%" }} src="https://foolsparadise.de/static/c5f877cc607316806acdc92ed202909d/85319/sneaker_floating_3753da6b66.png" />
                    </Col>
                    <Col xs={6} className="py-5 align-self-center">
                        <Row className="mb-2">
                            <Col>
                                <h1>We bring the style to your feets</h1>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et scelerisque elit. Curabitur semper tortor sit amet arcu aliquet, a vestibulum lacus pretium. Phasellus euismod consectetur varius. Curabitur ut neque ligula.</p>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col>
                            </Col>
                            <Link to="/"> <Button>Go to shop</Button></Link>
                        </Row>
                    </Col>
                </Row>
            </Container> : (<div className="d-flex justify-content-center align-items-center vh-100">
                <img width={400} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6409fc47039767.586e69e19a37a.gif" />
            </div>)
        }</>
    )
}

export default AboutUsContainer