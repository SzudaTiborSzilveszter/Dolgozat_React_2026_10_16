import type { szobaTipus } from "../tanuloszobak"
import Kartya from "./Kartya"

interface KartyakProps{
    lista: szobaTipus[],
    setFerohely:(index:number)=>void
}

function Kartyak({lista,setFerohely}:KartyakProps){
    return(
        <div>
            {
                lista.map((elem,index)=>{
                    return(
                        <Kartya elem={elem} setFerohely={setFerohely} index={index} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Kartyak