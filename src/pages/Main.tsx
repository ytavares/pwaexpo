//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

interface Member {
  login: string;
  avatar_url: string;
}
const Main = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/members').then((response) => {
      response.json().then((data) => {
        setMembers(data);
      });
    });
  }, []);
  return (
    <FlatList
      contentContainerStyle={{ padding: 24 }}
      data={members}
      keyExtractor={(member) => member.login}
      renderItem={({ item: member }) => (
        <View style={styles.member}>
          <Image style={styles.image} source={{ uri: member.avatar_url }} />
          <Text>{member.login}</Text>
        </View>
      )}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  member: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
});

//make this component available to the app
export default Main;
