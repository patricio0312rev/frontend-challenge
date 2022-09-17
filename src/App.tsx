import './App.css'
import { Masthead } from './components'
import jsonData from './data/characters.json'
import type { Character } from './types'

const data: Character[] = jsonData as Character[]

const App = () => {
  return (
    <div className="App">
      <Masthead/>
    </div>
  )
}

export default App
