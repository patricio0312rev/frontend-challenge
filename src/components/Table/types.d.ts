import { Character } from "../../types";

export interface TableProps {
    data: Character[],
    selectedCharacters: Character[],
    toggleCharacter: (Character) => void,
}