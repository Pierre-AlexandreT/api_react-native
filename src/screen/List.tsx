import React, {useEffect, useState} from 'react';
import {View, Button, FlatList, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Route';
import {useGetSearchCharacter} from '../useEffect/usePageInfo';
import CharacterListItem from '../components/CharacterListItem';
import {Character} from '../model/character';
import {loadCharacter, loadPageInfo} from '../network/loadPageInfo';
import SearchBar from '../components/SearchBar';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'List'
>;

type ListProps = {
  navigation: StackNavigationProp<ProfileScreenNavigationProp>;
};

const List: React.FC<ListProps> = ({navigation}) => {
  const [page, setPage] = useState(0);

  const [searchValue, setSearchValue] = useState<string | null>(null);

  const {characters, loading} = useGetSearchCharacter(page, searchValue);

  const [list, setList] = useState<Array<Character>>([]);

  const [listSearch, setListSearch] = useState<Array<Character>>([]);

  useEffect(() => {
    let cancel = false;

    if (!cancel && characters !== undefined) {
      if (searchValue !== null) {
        setListSearch(l => l.concat(characters.results));
      } else {
        setList(l => l.concat(characters.results));
      }
    }

    return () => {
      cancel = true;
    };
  }, [characters, searchValue]);

  const addData = () => {
    console.log('addDate');
    if (characters !== undefined && page < characters.info.pages) {
      setPage(page + 1);
    }
  };

  return (
    <View>
      <SearchBar
        value={searchValue === null ? '' : searchValue}
        onChangeText={text =>
          text === '' ? setSearchValue(null) : setSearchValue(text)
        }
      />
      {list && characters && (
        <FlatList
          numColumns={2}
          onEndReached={addData}
          onEndReachedThreshold={0.5}
          data={searchValue === null ? list : characters.results}
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
