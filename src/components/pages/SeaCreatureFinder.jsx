import { Container, Row, Col, Table } from "react-bootstrap";
import { useState } from "react";
import SeaCreatureSelector from "../SeaCreatureSelector";


export default function SeaCreatureFinder(props) {

    const [selected, setSelected] = useState([])

    return <div>
        <h1>Creature Finder</h1>
        <Container fluid>
            <Row xl={2} md={2} sm={1} xs={1}>
                <Col>
                    <h2>Creatures</h2>
                    <p>Select the creatures you want to find!</p>
                    <SeaCreatureSelector creatures={props.creatures} selected={selected} setSelected={setSelected} />
                </Col>
                <Col>
                    <h2>Results</h2>
                    <p>Here's where you can find those creatures!</p>
                    <Table>
                        <thead>
                            <tr>
                                <th>Aquarium</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(props.aquariums).filter(a => selected.every(c => a.creatures.includes(c))).map(a => {
                                return <tr>
                                    <td>{a.name}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </div>

}