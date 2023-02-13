import { nanoid } from "nanoid";

export const gameModeData = [
  {
    id: nanoid(),
    name: "choose category",
    possibleLevels: 20,
    chance: 3,
    timeToAnswer: 10000,
    type: "boolean",
  },
  {
    id: nanoid(),
    name: "fast 10 truthy/falsy",
    possibleLevels: 10,
    chance: 1,
    timeToAnswer: 11000,
    type: "multiple",
  },
  {
    id: nanoid(),
    name: "hard",
    possibleLevels: 10,
    chance: 2,
    timeToAnswer: 12000,
    type: "multiple",
  },
];
