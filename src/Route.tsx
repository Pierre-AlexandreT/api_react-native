import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import List from './screen/List';
import Detail from './screen/Detail';

export type RootStackParamList = {
  List: undefined;
  Detail: {id: number};
};

const Stack = createStackNavigator<RootStackParamList>();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          initialParams={{id: 0}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
