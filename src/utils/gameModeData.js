import { nanoid } from "nanoid";

export const gameModeData = [
  {
    id: nanoid(),
    name: "one",
    possibleLevels: 15,
    health: 3,
    timeToAnswer: 10000,
    amountQuestion: 1,
    difficulty: ["easy", "medium", "hard"],
    type: "multiple",
  },
  {
    id: nanoid(),
    name: "second",
    possibleLevels: 10,
    health: 3,
    timeToAnswer: 6000,
    amountQuestion: 1,
    difficulty: ["easy", "medium", "hard"],
    type: "multiple",
  },
  {
    id: nanoid(),
    name: "three",
    possibleLevels: 100,
    health: 2,
    timeToAnswer: 6000,
    amountQuestion: 1,
    type: "multiple",
  },
];
