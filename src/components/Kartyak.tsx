import Kartya from "./Kartya"
import '../Kartya.css'
import { useTanuloszobaContext } from "../contexts/TanuloszobaContext"

function Kartyak(){
    const { szobaLista } = useTanuloszobaContext()

    return(
        <div className="kartyak">
            {
                szobaLista.map((elem,index)=>{
                    return(
                        <Kartya elem={elem} index={index} key={elem.id}/>
                    )
                })
            }
        </div>
    )
}

export default Kartyak