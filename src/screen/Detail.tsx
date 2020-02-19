import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {useCharacter} from '../useEffect/useCharacter';
import ListEpisode from '../components/ListEpisode';
import DetailCharacter from '../components/detailCharater';
import {useListCharacter} from '../useEffect/useListCharacter';
import {RootStackParamList} from '../Route';
import {RouteProp} from '@react-navigation/native';

type DetailProps = {
  route: ProfileScreenRouteProp;
};

const Detail: React.FC<DetailProps> = ({route}) => {
  const {id} = route.params;

  const currentCharacter = useCharacter(id).character;

  // var page: number = 0;

  // var listCharacter = useListCharacter();

  return (
    //   initialPage={0}
    //   style={{
    //     flex: 1,
    //   }}></ViewPager>
    <View style={{flex: 1, backgroundColor: 'grey'}}>
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
            flex: 2,
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
  imageStyle: {width: 200, height: 200, margin: 20},
});

export default Detail;

// {listCharacter !== null &&
//   listCharacter.listcharacter!.map(el => (
//     <View>
//       <DetailCharacter currentCharacter={el}></DetailCharacter>
//     </View>
//   ))}
