import { Button, Card, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router"

export default function SeaCreatureSummary(props) {
    return <Card className="card h-100">
        <Card.Img alt={props[1].name} src={props[1].imgs[0]} />
        <Card.Body>
            <Card.Title>{props[1].name}</Card.Title>
            <Card.Text>
                {props[1].description}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Link to={`details/${props[1].name}`}><Button className="m-1">See Details</Button></Link>

            <Button className="m-1" onClick={() => props.handleVote(props[0])}>Vote!</Button>
        </Card.Footer>
    </Card>
}