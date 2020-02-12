import {useEffect, useState} from 'react';
import {Episode} from '../model/episode';

import {fetchEpisode} from '../network/loadEpisode';

export const useListEpisode = (urls: Array<string>) => {
  const [listEpisode, setListEpisode] = useState<Array<Episode> | null>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancel = false;

    if (!cancel) {
      setLoading(true);
      fetchEpisode(urls)
        .then(res => {
          setListEpisode(res);
          setLoading(false);
        })
        .catch(res => console.log(res));
    }

    return () => {
      cancel = true;
    };
  }, [urls]);

  return {listEpisode, loading};
};
