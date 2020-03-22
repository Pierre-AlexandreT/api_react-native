import {useEffect, useState} from 'react';
import {Episode} from '../model/episode';

import {fetchEpisode} from '../network/loadEpisode';

export const useListEpisode = (urls: Array<string> | undefined) => {
  const [listEpisode, setListEpisode] = useState<Array<Episode>>([]);

  const [loadingEpisode, setLoading] = useState(false);

  useEffect(() => {
    let cancel = false;

    if (!cancel && urls) {
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

  return {listEpisode, loadingEpisode};
};
