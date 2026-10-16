import './App.css'
import Kartyak from './components/Kartyak';

function App() {
  return (
    <>
      <header>
        <h1>TANULÓSZOBÁK NEKED</h1>
        <p className="alcim">Találd meg a számodra megfelelő tanulóhelyet!</p>
      </header>
      <article>
        <Kartyak />
      </article>
      <footer>
        <p>Készítette: Szuda Tibor Szilveszter</p>
      </footer>
    </>
  )
}

export default App
