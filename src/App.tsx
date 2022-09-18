import './App.css'
import { Filters, Masthead, SearchBar, Squad, Title } from './components'
import jsonData from './data/characters.json'
import type { Character } from './types'

const data: Character[] = jsonData as Character[];

const App = () => {
  const filters: string[] = [];

  data.forEach((champion) => {
    if(champion.tags !== undefined) {
      champion.tags.forEach((tag) => {
        if (filters.indexOf(tag.tag_name) === -1) {
          filters.push(tag.tag_name);
        }
      })
    }
  });
  
  return (
    <div className="App">
      <Masthead/>
      <Title content='Select your squad to defend earthrealm' />

      <Squad />
      <SearchBar />
      <Filters data={filters} />
    </div>
  )
}

export default App
