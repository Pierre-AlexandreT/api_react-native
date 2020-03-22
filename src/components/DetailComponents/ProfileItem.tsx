import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type ProfileItemProps = {
  label: string;
  value: string;
};

const ProfileItem: React.FC<ProfileItemProps> = ({value, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  valueContainer: {
    marginLeft: 10,
  },
});

export default ProfileItem;
