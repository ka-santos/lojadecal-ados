import './App.css'
import Topo from './components/topo'
import Banner from './components/Banner'
import Produtos from './components/Produtos'
import Colecoes from './components/Colecoes'
import  Footer  from './components/Footer'

function App() {
  
  return (
    <>
      <header>
        <Topo/>
      </header>

      <main>
        <Banner/>
        <Produtos/>
        <Colecoes/>
      </main>

      <Footer/>
    </>
  )
}

export default App
