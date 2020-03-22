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

const routeOption = {
  headerStyle: {
    backgroundColor: '#b5593f',
  },
  headerTitleStyle: {
    color: 'white',
  },
  headerTintColor: 'white',
};

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} options={routeOption} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          initialParams={{id: 0}}
          options={routeOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
