import { nanoid } from "nanoid";

export const gameModeData = [
  {
    id: nanoid(),
    name: "choose category",
    possibleLevels: 3,
    chance: 3,
    timeToAnswer: 10000,
    difficulty: "easy",
    amount: 1,
    type: "boolean",
  },
  {
    id: nanoid(),
    name: "fast 10 truthy/falsy",
    possibleLevels: 10,
    chance: 1,
    amount: 1,
    timeToAnswer: 11000,
    difficulty: "medium",
    type: "boolean",
  },
  {
    id: nanoid(),
    name: "",
    possibleLevels: 10,
    chance: 2,
    amount: 3,
    timeToAnswer: 12000,
    difficulty: "hard",
    type: "multiple",
  },
];
