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
  const [page, setPage] = useState(1);

  const [searchValue, setSearchValue] = useState('');

  const {characters, loading} = useGetSearchCharacter(page, searchValue);

  const [list, setList] = useState(characters?.results);

  const [newData, setNewData] = useState(false);

  // useEffect(() => {
  //
  //   setList(characters.results);
  // }, [newData]);

  const addData = () => {
    console.log('addDate');
    if (characters !== undefined && page < characters.info.pages) {
      setPage(page + 1);
      setList(list?.concat(characters.results));
    }
  };

  return (
    <View>
      <SearchBar value={searchValue} onChangeText={setSearchValue} />
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
