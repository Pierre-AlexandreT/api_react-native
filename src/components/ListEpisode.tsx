import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Character} from '../model/character';
import {useListEpisode} from '../useEffect/useListEpisode';
import {Episode} from '../model/episode';

export type ListEpisodeProps = {
  currentCharacter: Character | null;
};

const ListEpisode: React.FC<ListEpisodeProps> = ({currentCharacter}) => {
  var listEpisode: Array<Episode> | null = [];

  if (currentCharacter) {
    listEpisode = useListEpisode(currentCharacter.episode).listEpisode;
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{margin: 20}}
        data={listEpisode}
        renderItem={({item}) => <Text> {item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {fontSize: 28, fontWeight: 'bold', marginTop: 10},
  viewStyle: {margin: 50, elevation: 10, borderRadius: 15},
});

export default ListEpisode;
