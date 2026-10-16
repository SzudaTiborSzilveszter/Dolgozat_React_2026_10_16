import type { szobaTipus} from "../tanuloszobak";
import '../Kartya.css'
import { useTanuloszobaContext } from "../contexts/TanuloszobaContext"

interface KartyaProps{
    elem: szobaTipus,
    index:number
}

function Kartya({elem,index}:KartyaProps){
    const { foglalasKezelo } = useTanuloszobaContext()

    return (
        <div className="kartya">
            <span>{elem.nev}</span>
            <p>{elem.szobafajta}</p>
            <p>ID: {elem.id}</p>
            <p>Emelet: {elem.emelet}</p>
            <p>Férőhely: {elem.ferohely} fő</p>
            <p>Foglalt helyek: {elem.foglalt_helyek} fő</p>
            <button onClick={()=>foglalasKezelo(index)} disabled={elem.foglalt_helyek >= elem.ferohely}>Helyet foglalok</button>
        </div>
    )
}

export default Kartya