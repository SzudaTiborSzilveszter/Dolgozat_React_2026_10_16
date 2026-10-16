import type { szobaTipus } from "../tanuloszobak"
import Kartya from "./Kartya"

interface KartyakProps{
    lista: szobaTipus[],
    setAllitas:(index:number)=>void
}

function Kartyak({lista,setAllitas}:KartyakProps){
    return(
        <div>
            {
                lista.map((elem,index)=>{
                    return(
                        <Kartya elem={elem} setAllitas={setAllitas} index={index} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Kartyak