import React, {useEffect, useState} from 'react';
import {View, Button, FlatList, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Route';
import {useGetSearchCharacter} from '../useEffect/usePageInfo';
import CharacterListItem from '../components/CharacterListItem';
import {Character} from '../model/character';
import {loadCharacter, loadPageInfo} from '../network/loadPageInfo';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'List'
>;

type ListProps = {
  navigation: StackNavigationProp<ProfileScreenNavigationProp>;
};

const List: React.FC<ListProps> = ({navigation}) => {
  const [page, setPage] = useState(0);

  const {characters, loading} = useGetSearchCharacter(page);

  const [list, setList] = useState<Array<Character>>([]);

  useEffect(() => {
    let cancel = false;

    if (!cancel && characters !== undefined) {
      setList(() => list.concat(characters.results));
    }

    return () => {
      cancel = true;
    };
  }, [characters]);

  const addData = () => {
    if (characters !== undefined && page <= characters.info.pages) {
      setPage(page + 1);
    }
  };

  return (
    <View>
      {list && (
        <FlatList
          numColumns={2}
          onEndReached={addData}
          onEndReachedThreshold={0.5}
          data={list}
          keyExtractor={(item, index) => item.id + index + item.name}
          renderItem={({item}) => (
            <CharacterListItem
              character={item}
              // @ts-ignore
              onPress={id => navigation.navigate('Detail', {id: id})}
            />
          )}
        />
      )}
    </View>
  );
};

export default List;
