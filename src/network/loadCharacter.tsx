import {Character} from '../model/character';

export const loadCharacter = (id: number) => {
  return fetch('https://rickandmortyapi.com/api/character/' + id).then<
    Character
  >(res => res.json());
};
