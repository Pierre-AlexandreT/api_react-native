import {useEffect, useState} from 'react';
import {Episode} from '../model/episode';

import {fetchEpisode} from '../network/loadEpisode';
import {Character} from '../model/character';

export const useListEpisode = (character: Character | undefined) => {
  const [listEpisode, setListEpisode] = useState<Array<Episode>>([]);

  const [loadingEpisode, setLoading] = useState(false);

  useEffect(() => {
    let cancel = false;

    if (!cancel && character && character.episode) {
      setLoading(true);
      fetchEpisode(character.episode)
        .then(res => {
          setListEpisode(res);
          setLoading(false);
        })
        .catch(res => console.log(res));
    }

    return () => {
      cancel = true;
    };
  }, [character]);

  return {listEpisode, loadingEpisode};
};
