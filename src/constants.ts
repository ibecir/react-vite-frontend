import { Item } from "./utils/types";

export enum ButtonColors {
    "primary" = "primary",
    "secondary" = "secondary",
    "danger" = "danger",
    "warning" = "warning",
}

export const cities: Item[] = [
    { id: 1, name: "Sarajevo", population: 500_000 },
    { id: 2, name: "Tuzla", population: 350_000 },
    { id: 3, name: "Banja Luka", population: 300_000 },
];

export const memoInitialItems = new Array(29_999_999).fill(0).map((_, i) => {
    return {
        id: i,
        isSelected: i === 29_999_998
    }
});