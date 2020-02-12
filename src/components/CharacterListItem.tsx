import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Character} from '../model/character';

type CharacterListItemProps = {
  character: Character;
  onPress: (id: number) => void;
};

const CharacterListItem: React.FC<CharacterListItemProps> = ({
  character,
  onPress,
}) => {
  return (
    <TouchableHighlight
      onPress={() => onPress(character.id)}
      style={styles.container}>
      <View>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: character.image,
          }}
        />
        <Text style={styles.text}>{character.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CharacterListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#3f51b5',
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    margin: 5,
    color: 'white',
  },
});
