import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const FriendDetailScreen = ({ route, navigation }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Text>Name: {friend.name}</Text>
      <Text>Description: {friend.description}</Text>
      <Image source={friend.image} style={styles.image} />
      <Button
        title="Back to Friend List"
        onPress={() => navigation.navigate('FriendList')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default FriendDetailScreen;
