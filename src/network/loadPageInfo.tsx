import {InfoPage} from '../model/InfoPage';

export const loadPageInfo = (page: number) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then<
    InfoPage
  >(res => res.json());
};

export const loadCharacter = (character: string, page: number) => {
  return fetch(
    `https://rickandmortyapi.com/api/character/?name=${character}&page=${page}`,
  ).then<InfoPage>(res => res.json());
};
