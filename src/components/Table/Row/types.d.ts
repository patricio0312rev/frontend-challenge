import { Character } from "../../../types";

export interface RowProps {
    data: Character,
    selected?: boolean,
    toggleCharacter: (Character) => void,
}