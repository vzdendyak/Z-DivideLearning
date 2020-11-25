import {Option} from "./option";

export class Task {
  id: number;
  divisor: number;
  denominator: number;
  result: number;
  description: string;
  options: Option[];
  userAnswer: number;
}
