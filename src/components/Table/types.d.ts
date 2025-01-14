import { Character } from "../../types";

export interface TableProps {
    data: Character[],
    removeCharacter: (Character) => void,
    selectedCharacters: Character[],
    toggleCharacter: (Character) => void,
}