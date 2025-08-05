import { Row, Col, Container } from "react-bootstrap";
import SeaCreatureSummary from "../SeaCreatureSummary";
import SeaCreatureRanking from "../SeaCreatureRanking";


export default function SeaHome(props) {
    return <div>
        <h1>Sea Creature Home!</h1>
        <h2>Creatures</h2>
        <Container>
            <Row className="row-gap-3">
                {Object.entries(props.creatures).map(c => {
                    return <Col key={c[0]} xs={12} sm={12} md={6} lg={4} xl={3}>
                        <SeaCreatureSummary {...c} handleVote={props.handleVote} />
                    </Col>
                })}
            </Row>
        </Container>
        <h2>Sea Creature Ranking!</h2>
        <SeaCreatureRanking creatures={props.creatures} />
    </div>
}