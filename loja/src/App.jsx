import './App.css'
import Topo from './components/topo'
import Banner from './components/Banner'
import Produtos from './components/Produtos'

function App() {
  
  return (
    <>
      <header>
        <Topo/>
      </header>

      <main>
        <Banner/>
        <Produtos/>
      </main>
    </>
  )
}

export default App
