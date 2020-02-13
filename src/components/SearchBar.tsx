import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        value={value}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    height: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
  },
});

export default SearchBar;
