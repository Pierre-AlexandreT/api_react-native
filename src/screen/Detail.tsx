import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useCharacter} from '../useEffect/useCharacter';
import {RootStackParamList} from '../Route';
import {RouteProp} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {useListEpisode} from '../useEffect/useListEpisode';
import SectionHeader from '../components/DetailComponents/SectionHeader';
import SectionItem from '../components/DetailComponents/SectionItem';
import {Episode} from '../model/episode';
import ProfileDetail from '../components/DetailComponents/ProfileDetail';
import EpisodeDetailDialog from '../components/DetailComponents/EpisodeDetailDialog';
import {ActivityIndicator} from 'react-native-paper';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type DetailProps = {
  route: ProfileScreenRouteProp;
};

const Detail: React.FC<DetailProps> = ({route}) => {
  const {id} = route.params;

  const [showEpisode, setShowEpisode] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [showEpisodeDetailDialog, setShowEpisodeDetailDialog] = useState(false);
  const [chooseEpisodeUrl, setChooseEpisodeUrl] = useState('');

  const {character, loading} = useCharacter(id);
  const {listEpisode, loadingEpisode} = useListEpisode(character);

  const sections = [
    {
      title: 'Episode',
      data: listEpisode,
    },
  ];

  const changeShowEpisode = () => {
    setShowEpisode(!showEpisode);
  };

  const changeShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const closeShowEpisodeDetailDialog = () => {
    setShowEpisodeDetailDialog(false);
  };

  const openShowEpisodeDetailDialog = (episodeUrl: string) => {
    setChooseEpisodeUrl(episodeUrl);
    setShowEpisodeDetailDialog(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <EpisodeDetailDialog
        showDialog={showEpisodeDetailDialog}
        closeDialog={closeShowEpisodeDetailDialog}
        episodeUrl={chooseEpisodeUrl}
      />
      {character && (
        <View style={styles.topContainer}>
          {!loading && (
            <Image
              style={styles.image}
              source={{
                uri: character.image,
              }}
            />
          )}
          {loading && (
            <ActivityIndicator
              animating={true}
              color={'white'}
              size={'large'}
            />
          )}
          <Text style={styles.titleText}>{character.name}</Text>
          <View style={styles.locationContainer}>
            <Icon name={'location-on'} color={'white'} />
            <Text style={styles.subTitle}>{character.location.name}</Text>
          </View>
        </View>
      )}
      <View style={styles.bottomContainer}>
        {character && (
          <View>
            <SectionHeader
              title={'Profils'}
              onPress={changeShowProfile}
              showing={showProfile}
            />
            <ProfileDetail character={character} showing={showProfile} />
          </View>
        )}
        {!loadingEpisode && (
          <SectionList
            renderItem={({item}: {item: Episode}) =>
              showEpisode ? (
                <SectionItem
                  episode={item}
                  onPress={openShowEpisodeDetailDialog}
                />
              ) : null
            }
            renderSectionHeader={({section: {title}}) => (
              <SectionHeader
                title={title}
                onPress={changeShowEpisode}
                showing={showEpisode}
              />
            )}
            sections={sections}
            stickySectionHeadersEnabled={true}
          />
        )}
        {loadingEpisode && (
          <ActivityIndicator
            animating={true}
            color={'#3f51b5'}
            size={'large'}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
  },
  subTitle: {fontWeight: 'bold', marginVertical: 5, color: 'white'},
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 0.3,
    backgroundColor: '#3f51b5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  bottomContainer: {
    flex: 0.7,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  locationContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Detail;
