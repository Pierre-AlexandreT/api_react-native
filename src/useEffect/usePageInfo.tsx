import {useEffect, useState} from 'react';
import {loadCharacter, loadPageInfo} from '../network/loadPageInfo';
import {InfoPage} from '../model/InfoPage';
import {Character} from '../model/character';

export const useGetSearchCharacter = (
  pageChange: number,
  searchText: string,
) => {
  const [infoPage, setInfoPage] = useState<InfoPage>();
  const [data, setData] = useState<Array<Character>>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setData([]);
    setPage(1);
  }, [searchText]);

  useEffect(() => {
    setPage(pageChange);
  }, [pageChange]);

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    loadCharacter(searchText, page)
      .then((value: InfoPage) => {
        if (value.results !== undefined) {
          if (!cancel) {
            setData(d => d.concat(value.results));
            setInfoPage(value);
            setLoading(false);
          }
        }
      })
      .catch(() => setError(true));

    return () => {
      cancel = true;
    };
  }, [page, searchText]);

  return {infoPage, data, loading, page};
};
