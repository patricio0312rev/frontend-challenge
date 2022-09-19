export interface FiltersProps {
    clearAllFilters: () => void,
    data: string[],
    filterMyTeam: () => void,
    selectedFilters: string[],
    toggleFilter: (string) => void,
}