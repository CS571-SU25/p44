import { Image } from "react-bootstrap"

export default function SeaCreatureDetails(props) {
    return <div>
        <h1>{props.name}</h1>
        <Image src={props.img} alt={props.name} style={{ maxHeight: "20rem" }}></Image>
        <h2>Aquariums</h2>
        <ul>{props.aquariums.map(a => {
            return <li key={a}>{a}</li>
        })}</ul>
    </div>
}