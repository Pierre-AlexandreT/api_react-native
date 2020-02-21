import {useEffect, useState} from 'react';
import {loadCharacter, loadPageInfo} from '../network/loadPageInfo';
import {InfoPage} from '../model/InfoPage';
import {Character} from '../model/character';

export const useGetSearchCharacter = (page: number, searchText: string) => {
  const [infoPage, setInfoPage] = useState<InfoPage>();
  const [data, setData] = useState<Array<Character>>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData([]);
  }, [searchText]);

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    if (!cancel) {
      loadCharacter(searchText, data === [] ? 1 : page)
        .then((value: InfoPage) => {
          if (value.results !== undefined) {
            setData(d => d.concat(value.results));
            setInfoPage(value);
            setLoading(false);
          }
        })
        .catch(() => setError(true));
    }

    return () => {
      cancel = true;
    };
  }, [page, searchText]);

  return {infoPage, data, loading};
};
