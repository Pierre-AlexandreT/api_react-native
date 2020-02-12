import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Character} from '../model/character';
import ListEpisode from './ListEpisode';

export type detailCharacterProps = {
  currentCharacter: Character | null;
};

const DetailCharacter: React.FC<detailCharacterProps> = ({
  currentCharacter,
}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={[
          {
            backgroundColor: 'steelblue',
            flex: 2,
            alignItems: 'center',
            marginTop: 20,
          },
          styles.viewStyle,
        ]}>
        <Text style={styles.titleText}>{currentCharacter?.name}</Text>
        <Image
          style={styles.imageStyle}
          source={{
            uri: currentCharacter?.image,
          }}
        />

        <Text>
          <Text style={{fontWeight: 'bold'}}>Genre : </Text>
          {currentCharacter?.gender}
        </Text>
        <Text>
          <Text style={{fontWeight: 'bold'}}>Statut : </Text>
          {currentCharacter?.status}
        </Text>
        <Text>
          <Text style={{fontWeight: 'bold'}}>Espèce : </Text>
          {currentCharacter?.species}
        </Text>
      </View>
      <View
        style={[
          {
            backgroundColor: 'steelblue',
            flex: 3,
            alignItems: 'center',
            marginTop: 20,
          },
          styles.viewStyle,
        ]}>
        <Text style={styles.titleText}>Episodes</Text>
        <ListEpisode currentCharacter={currentCharacter}> </ListEpisode>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {fontSize: 28, fontWeight: 'bold', marginTop: 10},
  viewStyle: {
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    elevation: 10,
    borderRadius: 15,
  },
  imageStyle: {width: 100, height: 100, margin: 20},
});

export default DetailCharacter;
