export interface FiltersProps {
    clearAllFilters: () => void,
    data: string[],
    selectedFilters: string[],
    toggleFilter: (string) => void,
}