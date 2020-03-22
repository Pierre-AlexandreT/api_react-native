import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../Route';
import {RouteProp} from '@react-navigation/native';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type DetailProps = {
  route: ProfileScreenRouteProp;
};

const Detail: React.FC<DetailProps> = ({route}) => {
  const {id} = route.params;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Detail;
