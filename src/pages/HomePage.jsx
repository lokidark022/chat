
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Header from './component/Header';
import Message from './component/Message';
const Homepage = () => {

    return(
        <>
         
            <Container fluid>
                <Row>

                    <Col><Header></Header></Col>
                </Row>
                <Row>
                    <Col style={{height:"80vh",width:"100%"}}><Message></Message></Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
     
        </>
    )
}
export default Homepage