import { nanoid } from "nanoid";

export const gameModeData = [
  {
    id: nanoid(),
    name: "Your prefer",
    possibleLevels: 20,
    chance: 3,
    timeToAnswer: 10000,
    type: "boolean",
    chosen: false,
    randomCategory: 3,
  },
  {
    id: nanoid(),
    name: "Fast 10 truthy/falsy",
    possibleLevels: 10,
    chance: 1,
    timeToAnswer: 11000,
    type: "boolean",
    randomCategory: 1,
  },
  {
    id: nanoid(),
    name: "Calssic",
    possibleLevels: 10,
    chance: 2,
    timeToAnswer: 12000,
    type: "multiple",
    randomCategory: 3,
  },
];
