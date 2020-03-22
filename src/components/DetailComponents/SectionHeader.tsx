import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

type SectionHeaderProps = {
  title: string;
  onPress: () => void;
  showing: boolean;
};
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onPress,
  showing,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <View style={{flex: 1}} />
      <Icon
        name={showing ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
        color={'white'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b5593f',
    paddingVertical: 10,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

export default SectionHeader;
