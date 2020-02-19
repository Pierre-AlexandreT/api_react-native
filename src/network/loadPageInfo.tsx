import {InfoPage} from '../model/InfoPage';

export const loadPageInfo = (page: number) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then<
    InfoPage
  >(res => res.json());
};

export const loadCharacter = (search: string, page: number) => {
  return fetch(
    `https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`,
  ).then<InfoPage>(res => res.json());
};
