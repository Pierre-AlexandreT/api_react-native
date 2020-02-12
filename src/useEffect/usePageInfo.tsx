import {useEffect, useState} from 'react';
import {loadCharacter, loadPageInfo} from '../network/loadPageInfo';
import {InfoPage} from '../model/InfoPage';

export const useGetSearchCharacter = (
  characterName: string | null,
  page: number,
) => {
  const [characters, setCharacters] = useState<InfoPage>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    if (!cancel && characterName !== null) {
      loadCharacter(characterName, page)
        .then(value => {
          setCharacters(value);
          setLoading(false);
        })
        .catch(() => setError(true));
    } else if (characterName === null) {
      loadPageInfo(page)
        .then(value => {
          setCharacters(value);
          setLoading(false);
        })
        .catch(() => setError(true));
    }

    return () => {
      cancel = true;
    };
  }, [characterName, page]);

  return {characters, loading};
};
