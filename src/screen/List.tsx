import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Route';
import {useGetSearchCharacter} from '../useEffect/usePageInfo';
import CharacterListItem from '../components/CharacterListItem';
import {ActivityIndicator, Searchbar} from 'react-native-paper';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'List'
>;

type ListProps = {
  navigation: StackNavigationProp<ProfileScreenNavigationProp>;
};

const List: React.FC<ListProps> = ({navigation}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [searchValue, setSearchValue] = useState('');

  const [scrollBegin, setScrollBegin] = useState(true);

  const {infoPage, data, loading, page} = useGetSearchCharacter(
    currentPage,
    searchValue,
  );

  const addData = () => {
    if (!scrollBegin) {
      if (infoPage !== undefined && page < infoPage.info.pages) {
        setCurrentPage(page + 1);
      }
    }
  };

  const scrollStart = () => {
    setScrollBegin(false);
  };

  return (
    <View style={{flex: 1}}>
      <Searchbar
        value={searchValue}
        onChangeText={text => {
          setSearchValue(text);
        }}
        placeholder={'Search'}
      />
      <Text>{searchValue}</Text>
      <FlatList
        numColumns={2}
        onEndReached={addData}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={scrollStart}
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
      {loading && (
        <View style={{margin: 10}}>
          <ActivityIndicator animating={true} color={'red'} size={'large'} />
        </View>
      )}
    </View>
  );
};

export default List;
