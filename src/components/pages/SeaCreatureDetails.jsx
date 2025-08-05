import { Image } from "react-bootstrap"

export default function SeaCreatureDetails(props) {
    return <div>
        <h1>{props[1].name}</h1>
        <Image src={props[1].imgs[0]} alt={props[1].name} style={{ maxHeight: "20rem" }}></Image>
        <h2>Description</h2>
        <p>{props[1].description}</p>
        <h2>Aquariums</h2>
        <ul>{props[1].aquariums.map(a => {
            return <li key={a}>{a}</li>
        })}</ul>
    </div>
}