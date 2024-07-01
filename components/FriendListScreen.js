import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const FriendListScreen = ({ navigation }) => {
  const friends = [
    { id: '1', name: 'agus', description: 'Teknik Informatika', image: require('../assets/fotocowo1.jpg') },
    { id: '2', name: 'joni', description: 'Teknik Informatika', image: require('../assets/fotocowo2.jpg')
    
     },
         { id: '3', name: 'asep', description: 'Teknik Informatika', image: require('../assets/fotocowo3jpg.jpg')
    
     },
         { id: '4', name: 'rifal', description: 'Teknik Informatika', image: require('../assets/fotocowo4.jpg')
    
     },
    // Add more friends here
  ];

  const renderFriendItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { friend: item })}>
      <View>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={friends}
      renderItem={renderFriendItem}
      keyExtractor={item => item.id}
    />
  );
};

export default FriendListScreen;
