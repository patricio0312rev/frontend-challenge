import { Character } from "../../../types";

export interface RowProps {
    data: Character,
    removeCharacter: (Character) => void,
    selected?: boolean,
    toggleCharacter: (Character) => void,
}