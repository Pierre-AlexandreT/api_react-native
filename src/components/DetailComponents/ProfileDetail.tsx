import React from 'react';
import {View} from 'react-native';
import {Character} from '../../model/character';
import ProfileItem from './ProfileItem';

type ProfileDetailProps = {
  character: Character;
  showing: boolean;
};

const ProfileDetail: React.FC<ProfileDetailProps> = ({character, showing}) => {
  return (
    <View>
      {showing && (
        <View>
          <ProfileItem label={'Name'} value={character.name} />
          <ProfileItem label={'Status'} value={character.status} />
          <ProfileItem label={'Species'} value={character.species} />
          <ProfileItem label={'Type'} value={character.type} />
          <ProfileItem label={'Gender'} value={character.gender} />
          <ProfileItem label={'Origin'} value={character.origin.name} />
        </View>
      )}
    </View>
  );
};

export default ProfileDetail;
