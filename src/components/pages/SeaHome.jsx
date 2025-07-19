import { Row, Col, Container } from "react-bootstrap";
import SeaCreatureSummary from "../SeaCreatureSummary";


export default function SeaHome(props) {
    return <div>
        <h1>Sea Creatures!</h1>
        <Container>
            <Row className="row-gap-3">
                {props.creatures.map(c => {
                    console.log(c)
                    return <Col key={c.id} xs={12} sm={12} md={6} lg={4} xl={3}>
                        <SeaCreatureSummary {...c} />
                    </Col>
                })}
            </Row>
        </Container>
    </div>
}