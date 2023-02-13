import { nanoid } from "nanoid";

export const gameModeData = [
  {
    id: nanoid(),
    name: "choose category",
    possibleLevels: 2,
    chance: 2,
    timeToAnswer: 10000,
    difficulty: "easy",
    type: "boolean",
  },
  {
    id: nanoid(),
    name: "fast 10 truthy/falsy",
    possibleLevels: 10,
    chance: 1,
    timeToAnswer: 11000,
    difficulty: "medium",
    type: "multiple",
  },
  {
    id: nanoid(),
    name: "hard",
    possibleLevels: 10,
    chance: 2,
    timeToAnswer: 12000,
    difficulty: "hard",
    type: "multiple",
  },
];
