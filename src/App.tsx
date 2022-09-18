import './App.css'
import { Masthead, SearchBar, Squad, Title } from './components'
import jsonData from './data/characters.json'
import type { Character } from './types'

const data: Character[] = jsonData as Character[]

const App = () => {
  return (
    <div className="App">
      <Masthead/>
      <Title content='Select your squad to defend earthrealm' />

      <Squad />
      <SearchBar />
    </div>
  )
}

export default App
