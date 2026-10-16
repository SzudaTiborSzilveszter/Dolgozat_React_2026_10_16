import { useState } from 'react'
import './App.css'
import { SZOBALISTA, type szobaTipus } from './tanuloszobak'
import Kartyak from './components/Kartyak';

function App() {
  const [lista,setFerohely]=useState<szobaTipus[]>(SZOBALISTA);
  function setAllitas(index:number){
    const ferohelyNoveles:szobaTipus[]=[...lista]
    ferohelyNoveles[index].foglalt_helyek
    console.log(index)
    setFerohely(ferohelyNoveles)
  }
  return (
    <>
      <header>
        <h1>TANULÓSZOBÁK NEKED</h1>
        <p>Találd meg a számodra megfelelő tanulóhelyet!</p>
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
