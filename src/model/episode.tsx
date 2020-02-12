import { Character } from "./character";

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  charecters: Character[];
  url: string;
  created: string;
};
