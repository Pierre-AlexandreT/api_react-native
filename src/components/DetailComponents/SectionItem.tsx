import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Episode} from '../../model/episode';

type SectionItemProps = {
  episode: Episode;
  onPress: (url: string) => void;
};

const SectionItem: React.FC<SectionItemProps> = ({episode, onPress}) => {
  const episodeChoose = () => {
    onPress(episode.url);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={episodeChoose}>
      <Text>{episode.episode}</Text>
      <View style={styles.episodeNameContainer}>
        <Text style={styles.episodeName}>{episode.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  episodeNameContainer: {
    flex: 1,
    marginLeft: 10,
  },
  episodeName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SectionItem;
