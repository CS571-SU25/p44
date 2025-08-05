import { Table } from "react-bootstrap"

export default function SeaCreatureSelector(props) {

    function handleSelected(e, id) {
        if (e.target.checked) {
            props.setSelected([...props.selected, id])
        }
        else {
            let selectedCpy = [...props.selected];
            const index = selectedCpy.indexOf(id);
            if (index > -1) {
                selectedCpy.splice(index, 1);
            }
            props.setSelected(selectedCpy)
        }
    }


    return <Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Selected?   </th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(props.creatures).map((c, idx) => {
                return <tr key={c[0]}>
                    <td><label htmlFor={`${c[1].name}-checkbox`}>{c[1].name}</label></td>
                    <td><input id={`${c[1].name}-checkbox`} type="checkbox" checked={props.selected.includes(c[0])} onChange={e => handleSelected(e, c[0])} /></td>
                </tr>
            })}
        </tbody>

    </Table>
}