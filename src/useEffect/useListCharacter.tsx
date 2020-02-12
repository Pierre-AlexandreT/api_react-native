import {useEffect, useState} from 'react';
import {Character} from '../model/character';

import {useGetSearchCharacter} from './usePageInfo';
import {InfoPage} from '../model/InfoPage';

export const useListCharacter = () => {
  const [listcharacter, setListCharacter] = useState<Character[] | null>(null);

  useEffect(() => {
    let cancel = false;
    var page: number = 1;
    var tmp: InfoPage = useGetSearchCharacter(null, 0).characters!;

    if (!cancel) {
      while (tmp && page <= tmp.info!.pages) {
        console.log(tmp);
        tmp.results.concat(
          useGetSearchCharacter(null, page).characters!.results,
        );
        page++;
        console.log(page);
      }
      setListCharacter(tmp.results);
    }

    return () => {
      cancel = true;
    };
  }, []);

  return {listcharacter};
};
