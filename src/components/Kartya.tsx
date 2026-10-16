import type { szobaTipus} from "../tanuloszobak";
import '../Kartya.css'

interface KartyaProps{
    elem: szobaTipus,
    setAllitas:(index:number)=>void,
    index:number
}

function Kartya({elem,setAllitas}:KartyaProps){
    return (
        <div className="kartya">
            <span>{elem.nev}</span>
            <p>{elem.szobafajta}</p>
            <p>ID: {elem.id}</p>
            <p>Emelet: {elem.emelet}</p>
            <p>Férőhely: {elem.ferohely} fő</p>
            <p>Foglalt helyek: {elem.foglalt_helyek} fő</p>
            <button onClick={()=>setAllitas(elem.foglalt_helyek)}>Helyet foglalok</button>
        </div>
    )
}

export default Kartya