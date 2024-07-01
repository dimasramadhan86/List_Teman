import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FriendListScreen from './components/FriendListScreen';
import FriendDetailScreen from './components/FriendDetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FriendList" component={FriendListScreen} />
        <Stack.Screen name="Detail" component={FriendDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
