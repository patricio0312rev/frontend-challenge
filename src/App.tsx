import './App.css'
import { Masthead } from './components'
import Title from './components/Title'
import jsonData from './data/characters.json'
import type { Character } from './types'

const data: Character[] = jsonData as Character[]

const App = () => {
  return (
    <div className="App">
      <Masthead/>
      <Title content='Select your squad to defend earthrealm' />

      
    </div>
  )
}

export default App
