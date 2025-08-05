import { Table } from "react-bootstrap"

export default function SeaCreatureRanking(props) {
    return <Table>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Votes</th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(props.creatures).toSorted((a, b) => b[1].votes - a[1].votes).map((c, idx) => {
                return <tr key={c[0]}>
                    <td>{idx + 1}</td>
                    <td>{c[1].name}</td>
                    <td>{c[1].votes}</td>
                </tr>
            })}
        </tbody>
    </Table>
}