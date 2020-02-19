import {useEffect, useState} from 'react';
import {loadCharacter, loadPageInfo} from '../network/loadPageInfo';
import {InfoPage} from '../model/InfoPage';

export const useGetSearchCharacter = (
  page: number,
  searchText: string | null,
) => {
  const [infoPage, setInfoPage] = useState<InfoPage>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    if (!cancel && searchText !== null) {
      loadCharacter(searchText, page)
        .then(value => {
          setInfoPage(value);
          setLoading(false);
        })
        .catch(() => setError(true));
    } else if (searchText === null) {
      loadPageInfo(page)
        .then(value => {
          setInfoPage(value);
          setLoading(false);
        })
        .catch(() => setError(true));
    }

    // }

    return () => {
      cancel = true;
    };
  }, [page, searchText]);

  return {infoPage, loading};
};
