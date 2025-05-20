
import {Routes , Route, Link} from 'react-router-dom'
import Allpokemons from './Allpokemons'
import Usercart from './Usercart'
import PokemonForm from './PokemonForm'
import Search from './Search'

export default function App() {
  return (
    <div className='app-main-container'>
      <nav style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <Link to='/pokemons'>Pokemons</Link>
        <Link to='/form'>Form</Link>
      </nav>
      <Routes>
        <Route path='/pokemons' element={<>
        <Search />
        <Allpokemons />
        </>} />
        <Route path='/form' element={<PokemonForm />} />
      </Routes>
    </div>

  )
}


