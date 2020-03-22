import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <Searchbar
        value={searchValue}
        onChangeText={text => {
          setSearchValue(text);
        }}
        placeholder={'Search'}
      />
      <FlatList
        style={styles.flatList}
        numColumns={2}
        onEndReached={addData}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={scrollStart}
        data={data}
        keyExtractor={(item, index) => item.id + index + item.name}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator animating={true} color={'#3f51b5'} size={'large'} />
          ) : null
        }
        renderItem={({item}) => (
          <CharacterListItem
            character={item}
            // @ts-ignore
            onPress={id => navigation.navigate('Detail', {id: id})}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b5593f',
    flex: 1,
  },
  flatList: {
    width: '100%',
  },
});

export default List;
