import type { szobaTipus} from "../tanuloszobak";

interface KartyaProps{
    elem: szobaTipus,
    setFerohely:(index:number)=>void,
    index:number
}

function Kartya({elem,setFerohely,index}:KartyaProps){
    return (
        <div>
            <span>{elem.nev}</span>
            <span>{elem.szobafajta}</span>
            <span>ID: {elem.id}</span>
            <span>Emelet: {elem.emelet}</span>
            <span>Férőhely: {elem.ferohely} fő</span>
            <span>Foglalt helyek: {elem.foglalt_helyek} fő</span>
            <button onClick={()=>setFerohely(elem.foglalt_helyek)}>Helyet foglalok</button>
        </div>
    )
}

export default Kartya