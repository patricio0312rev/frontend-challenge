import { useEffect, useState } from 'react';
import './App.css'
import { Filters, Masthead, SearchBar, Squad, Table, Title } from './components'
import jsonData from './data/characters.json'
import type { Character } from './types'

const data: Character[] = jsonData as Character[];

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([])
  const filters: string[] = [];
  const [filteredItems, setFilteredItems] = useState<Character[]>([])
  const [searchWord, setSearchWord] = useState<string>('')

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

  const removeCharacter = (character: Character) => {
    setSelectedCharacters(selectedCharacters.filter((item) => item !== character));
  }

  const toggleCharacter = (character: Character) => {
    if(!selectedCharacters.includes(character)) {
      if(selectedCharacters.length < 6) {
        setSelectedCharacters((otherCharacters) => [...otherCharacters, character]);
      }
    } else {
      removeCharacter(character)
    }
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
  }

  const filterMyTeam = () => {

    const filteredData = data.filter((character) => selectedCharacters.includes(character))

    setFilteredItems(filteredData);
  }

  useEffect(() => {
    const filter = searchWord.toLowerCase()
    const filteredData = data.filter((character) => {
      return character.name.includes(filter) || (character.tags !== undefined && character.tags.some((tag) => tag.tag_name.includes(filter)))
    })

    setFilteredItems(filteredData);
  }, [searchWord])
  
  useEffect(() => {
    const filteredData = data.filter((character) => character.tags !== undefined && selectedFilters.every((filter) => character.tags.some((tag) => tag.tag_name === filter)
    ))

    setFilteredItems(filteredData);
  }, [selectedFilters])
  
  return (
    <div className="App">
      <Masthead/>
      <Title content='Select your squad to defend earthrealm' />

      <Squad selectedCharacters={selectedCharacters} removeCharacter={removeCharacter} />
      <SearchBar setSearchWord={setSearchWord} />
      <Filters data={filters} toggleFilter={toggleFilter} selectedFilters={selectedFilters} clearAllFilters={clearAllFilters} filterMyTeam={filterMyTeam} />
      <Table data={filteredItems} selectedCharacters={selectedCharacters} toggleCharacter={toggleCharacter} removeCharacter={removeCharacter} />
    </div>
  )
}

export default App
