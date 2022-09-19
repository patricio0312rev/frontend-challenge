import { useEffect, useState } from 'react';
import './App.css'
import { Filters, Masthead, SearchBar, Squad, Table, Title } from './components'
import jsonData from './data/characters.json'
import type { Character } from './types'

const data: Character[] = jsonData as Character[];

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
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

  const toggleFilter = (filter: string) => {
    if(!selectedFilters.includes(filter)) {
      setSelectedFilters((selectedFilters) => [...selectedFilters, filter]);
    } else {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    }
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
  }

  useEffect(() => {
    console.log(selectedFilters)
  }, [selectedFilters])
  
  return (
    <div className="App">
      <Masthead/>
      <Title content='Select your squad to defend earthrealm' />

      <Squad />
      <SearchBar />
      <Filters data={filters} toggleFilter={toggleFilter} selectedFilters={selectedFilters} clearAllFilters={clearAllFilters} />
      <Table data={data} />
    </div>
  )
}

export default App
