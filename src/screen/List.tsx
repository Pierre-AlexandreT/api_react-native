import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Route';
import {useGetSearchCharacter} from '../useEffect/usePageInfo';
import CharacterListItem from '../components/CharacterListItem';
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

  const {infoPage, data, loading} = useGetSearchCharacter(page, searchValue);

  const [newData, setNewData] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [searchValue]);

  // useEffect(() => {
  //
  //   setList(characters.results);
  // }, [newData]);

  const addData = () => {
    if (infoPage !== undefined && page < infoPage.info.pages) {
      setPage(page + 1);
    }
  };

  return (
    <View>
      <SearchBar
        value={searchValue}
        onChangeText={text => {
          setSearchValue(text);
        }}
      />
      <Text>{searchValue}</Text>
      <FlatList
        numColumns={2}
        onEndReached={addData}
        onEndReachedThreshold={0.5}
        data={data}
        keyExtractor={(item, index) => item.id + index + item.name}
        renderItem={({item}) => (
          <CharacterListItem
            character={item}
            // @ts-ignore
            onPress={id => navigation.navigate('Detail', {id: id})}
          />
        )}
      />
    </View>
  );
};

export default List;
