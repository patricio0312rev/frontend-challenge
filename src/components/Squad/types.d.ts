import { Character } from "../../types";

export interface SquadProps {
    removeCharacter: (Character) => void,
    selectedCharacters: Character[],
}