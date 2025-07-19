import { Button, Card } from "react-bootstrap"
import { Link } from "react-router"

export default function SeaCreatureSummary(props) {
    return <Card className="p-3">
        <Card.Img alt={props.name} src={props.img} />
        <Card.Title>{props.name}</Card.Title>
        <Link to={`details/${props.name}`}><Button >See Details</Button></Link>
    </Card>
}