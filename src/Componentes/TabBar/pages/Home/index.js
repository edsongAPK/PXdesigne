import React, { useState } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './estilos';
import Icon from 'react-native-vector-icons/FontAwesome';

const Post = ({ post }) => {
  const [iconColor, setIconColor] = useState('#000');

  const handleIconClick = () => {
    const newColor = iconColor === '#000' ? 'red' : '#000';
    setIconColor(newColor);
  };

  return (
    <View style={styles.postContainer}>
      <Image source={post.image} style={styles.image} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{post.user}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleIconClick}>
            <Icon name="heart" size={20} color={iconColor} style={styles.icon} />
          </TouchableOpacity>
          <Icon name="comment" size={20} color="#000" style={styles.icon} />
          <Icon name="share" size={20} color="#000" style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

export default function Home() {
  const posts = [
    { id: '1', user: '@User1', image: require('./../../../../../assets/img1.jpeg') },
    { id: '2', user: '@User2', image: require('./../../../../../assets/img2.jpeg') },
    { id: '3', user: '@User3', image: require('./../../../../../assets/img3.jpeg') },
    { id: '4', user: '@User4', image: require('./../../../../../assets/img1.jpeg') },
    { id: '5', user: '@User5', image: require('./../../../../../assets/img2.jpeg') },
    { id: '6', user: '@User6', image: require('./../../../../../assets/img3.jpeg') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
}
