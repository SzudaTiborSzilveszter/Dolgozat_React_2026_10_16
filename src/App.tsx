import { useState } from 'react'
import './App.css'
import { SZOBALISTA, szobaTipus } from './tanuloszobak'

function App() {
  const [lista,setLista]=useState<szobaTipus[]>(SZOBALISTA);
  function setFerohely(index:number,elem: number){
    const ferohelyNoveles:szobaTipus[]=[...lista]
    ferohelyNoveles[index].foglalt_helyek+1
    setFerohely(ferohelyNoveles)
  }
  return (
    <>
      <header>
        <h1>TANULÓSZOBÁK NEKED</h1>
        <p>Találd meg a számodra megfelelő tanulóhelyet!</p>
      </header>
      <article>
        <Kartyak lista={lista} setFerohely={setFerohely}/>
      </article>
      <footer>
        <p>Készítette: Szuda Tibor Szilveszter</p>
      </footer>
    </>
  )
}

export default App
