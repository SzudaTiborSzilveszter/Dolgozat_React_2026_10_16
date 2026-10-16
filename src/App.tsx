import { useState } from 'react'
import './App.css'
import { SZOBALISTA, type szobaTipus } from './tanuloszobak'
import Kartyak from './components/Kartyak';

function App() {
  const [lista,setFerohely]=useState<szobaTipus[]>(SZOBALISTA);
  function setAllitas(index:number){
    setFerohely(elozoLista => elozoLista.map((szoba, szobaIndex) =>
      szobaIndex === index && szoba.foglalt_helyek < szoba.ferohely
        ? { ...szoba, foglalt_helyek: szoba.foglalt_helyek + 1 }
        : szoba
    ))
  }
  return (
    <>
      <header>
        <h1>TANULÓSZOBÁK NEKED</h1>
        <p className="alcim">Találd meg a számodra megfelelő tanulóhelyet!</p>
      </header>
      <article>
        <Kartyak lista={lista} setAllitas={setAllitas}/>
      </article>
      <footer>
        <p>Készítette: Szuda Tibor Szilveszter</p>
      </footer>
    </>
  )
}

export default App
