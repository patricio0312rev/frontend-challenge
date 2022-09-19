export interface FiltersProps {
    data: string[],
    selectedFilters: string[],
    toggleFilter: (string) => void,
}