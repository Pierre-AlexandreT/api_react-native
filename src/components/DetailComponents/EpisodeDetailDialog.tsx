import React, {useEffect, useState} from 'react';
import {Portal, Dialog} from 'react-native-paper';
import {loadEpisode} from '../../network/loadEpisode';
import {Episode} from '../../model/episode';
import DialogContent from "react-native-paper/lib/typescript/src/components/Dialog/DialogContent";
import ProfileItem from "./ProfileItem";

type EpisodeDetailDialogProps = {
  showDialog: boolean;
  closeDialog: () => void;
  episodeUrl: string;
};

const EpisodeDetailDialog: React.FC<EpisodeDetailDialogProps> = ({
  showDialog,
  closeDialog,
  episodeUrl,
}) => {
  const [episode, setEpisode] = useState<Episode>();

  useEffect(() => {
    if(episodeUrl !== ""){
      loadEpisode(episodeUrl).then(result => {
        setEpisode(result);
      });
    }

  }, [episodeUrl]);

  return (
    <Portal>
      <Dialog visible={showDialog} onDismiss={closeDialog}>
        <Dialog.Title>{episode?.name}</Dialog.Title>
          {
              episode &&
              <Dialog.Content>
                  <ProfileItem label={'Air date'} value={episode.air_date}/>
                  <ProfileItem label={'Episode'} value={episode.episode}/>
              </Dialog.Content>
          }
      </Dialog>
    </Portal>
  );
};

export default EpisodeDetailDialog;