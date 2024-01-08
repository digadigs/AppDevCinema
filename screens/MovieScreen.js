import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import COLORS from '../constants/colors';

const items = [
  {
    img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20056_v_h10_ab.jpg',
    name: 'Titanic',
    description: 'James Cameron "Titanic" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic.',
    duration: '3h 30m',
    released: '1997 ‧ Romance/Adventure',
    teacher: {
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzxqGFjFm5GMFr7xoopSpt3dzoZSpdUN0Jj7CWt1NX1cgJgeIj',
      name: 'James Cameron'
    },
  },
  {
    img: 'https://mloz35cl5wye.i.optimole.com/cb:s357.4350f/w:1024/h:712/q:90/https://www.slugmag.com/wp/wp-content/uploads/2017/04/screen-shot-2016-11-27-at-1-42-50-pm.png',
    name: 'Your Name.',
    description: 'Two teenagers share a profound, magical connection upon discovering they are swapping bodies.',
    duration: '1hr 47m',
    released: '2016 ‧ Romance/Fantasy',
    teacher: {
      img: 'https://www.themoviedb.org/t/p/w500/mSCk6PmAR99bCsKJYlMx94vq5qe.jpg',
      name: 'Makoto Shinkai'
    },
  },
  {
    img: 'https://www.movieshowplus.com/uploads/3/0/9/0/30906545/414434_orig.jpg',
    name: 'World War Z',
    description: 'A lethal virus, spread through a single bite, is turning healthy people into something vicious, unthinking and feral. As the pandemic threatens to consume humanity.',
    duration: '1h 56m',
    released: '2013 ‧ Action/Horror',
    teacher: {
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoQGYKwjwpQWrUcixRDkHrhNdcxYWMTi6UWYz9cip0bl1iCg9q',
      name: 'Marc Forster',
    },
  },
  {
    img: 'https://img.englishcinemakyiv.com/GFnyC29YYOKBt7d9nZkX0FW8aIY8GwSdVAkV49wHbto/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy9iN2RhZDVlZS1jNTc3LTRjOGMtODkwZS1hNWQxNzI3OGYxZjEuanBn.jpg',
    name: 'Sing 2',
    description: 'Can-do koala Buster Moon and his all-star cast of animal performers prepare to launch a dazzling stage extravaganza in the glittering entertainment capital of the world.',
    duration: '1h 50m',
    released: '2021 ‧ Musical/Comedy',
    teacher: {
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ52tjQzKbpMvmedYLPjmgofQMfgEvLX-cyXYXNz5WBHvLMkj0_',
      name: 'Garth Jennings',
    },
  },
  {
    img: 'https://fr.web.img2.acsta.net/r_654_368/newsv7/20/10/11/19/09/1017281.jpg',
    name: 'The Social Network',
    description: 'In 2003, Harvard undergrad and computer genius Mark Zuckerberg (Jesse Eisenberg) begins work on a new concept that eventually turns into the global social network known as Facebook.',
    duration: '2hrs',
    released: '2010 ‧ Documentary/Drama',
    teacher: {
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDMJlGgpiVnMI2nsWgbnWJYSsAIqyynSn8hMUX_bwAcpyv9H-p',
      name: 'David Fincher',
    },
  },
];


const MovieScreen = ({ navigation }) => {
  
  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.listTitle}>Genres</Text>
    <ScrollView contentContainerStyle={styles.listContent} horizontal={true} showsHorizontalScrollIndicator={false}>
      {[
        {
          label: 'Action',
          color: 'white',
        },
        {
          label: 'Thriller',
          color: 'white',
        },
        {
          label: 'Romance',
          color: 'white',
        },
        {
          label: 'Comedy',
          color: 'white',
        },
        {
          label: 'Adventure',
          color: 'white',
        },
        {
          label: 'Horror',
          color: 'white',
        },
        {
          label: 'Drama',
          color: 'white',
        },
        
      ].map(({ label, color }, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {

          }}>
          <View style={[styles.genre, { backgroundColor: color=COLORS.black }]}>

            <Text style={styles.genreLabel}>{label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>

    {items.map(({ img, name, description, duration, released, teacher }, index) => {
      return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          //handle
          if(name == 'Titanic'){
            navigation.navigate('Titanic')
          }
          if(name == 'Your Name.'){
            navigation.navigate('YourName')
          }
      }}>
      <View style={styles.card}>
      <View style={styles.cardTop}>
      <Image
        alt=""
        resizeMode="cover"
        source={{ uri: img }}
        style={styles.cardImg}
      />

      <View style={styles.cardTopPills}>
      <View style={[styles.cardTopPill, { paddingLeft: 6 }]}>
      <Image
        alt=""
        source={{ uri: teacher.img }}
        style={styles.cardTopPillImg}
      />

      <Text style={styles.cardTopPillText}>
        {teacher.name}
      </Text>
      </View>
      </View>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardDuration}>
          {duration}
        </Text>
      </View>

      <Text style={styles.cardReleased}>
          {released}
      </Text>
      <Text style={styles.cardDescription}>{description}</Text>
      </View>
      </View>
      </TouchableOpacity>
      );
    },
  )}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  padding: 10,
},
title: {
  fontSize: 32,
  fontWeight: '700',
  color: '#1d1d1d',
  marginBottom: 12,
},
card: {
  padding: 12,
  borderRadius: 24,
  marginBottom: 12,
  backgroundColor: 'black',
},
cardTop: {
  position: 'relative',
  borderRadius: 24,
},
cardTopPills: {
  position: 'absolute',
  right: 0,
  left: 0,
  bottom: 0,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 10,
},
cardTopPill: {
  height: 25,
  paddingHorizontal: 8,
  backgroundColor: 'black',
  borderRadius: 15,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
cardTopPillImg: {
  width: 17,
  height: 17,
  borderRadius: 9999,
  marginRight: 8,
},
cardTopPillText: {
  fontSize: 12,
  fontWeight: 'bold',
  color: 'white',
},
cardImg: {
  width: '100%',
  height: 180,
  borderRadius: 24,
},
cardBody: {
  paddingVertical: 16,
  paddingHorizontal: 12,
},
cardHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 12,
},
cardTitle: {
  fontSize: 19,
  fontWeight: 'bold',
  color: 'white',
},
cardDuration: {
  fontSize: 14,
  fontWeight: '700',
  color: 'white',
  opacity: 0.5,
},
cardReleased: {
  marginTop: -10,
  marginBottom: 20,
  fontSize: 14,
  fontWeight: '700',
  color: 'white',
  opacity: 0.8,
},
cardDescription: {
  fontSize: 14,
  letterSpacing: 0.25,
  lineHeight: 22,
  fontWeight: 'normal',
  color: 'white',
},
send: {
  marginVertical: -5,
},
sendTitle: {
  fontSize: 15,
  fontWeight: 'bold',
  color: 'white',
  marginBottom: 20,
},
sendScroll: {
  marginHorizontal: -8,
},
sendUser: {
  paddingHorizontal: 8,
  alignItems: 'center',
  justifyContent: 'center',
},
sendUserAvatar: {
  width: 54,
  height: 54,
  borderRadius: 9999,
  marginBottom: 6,
},
sendUserName: {
  fontSize: 15,
  color: 'white',
  opacity: 0.8,
  fontWeight: '500',
  textAlign: 'center',
  marginBottom: 20,
},
listTitle: {
  fontWeight: 'bold',
  fontSize: 20,
  lineHeight: 26,
  color: 'white',
  marginBottom: 16,
  marginLeft: 7,
},
genre: {
  width: 72,
  padding: 9,
  borderRadius: 24,
  borderColor: 'white',
  borderWidth: 1,
  flexDirection: 'column',
  alignItems: 'center',
  marginHorizontal: 6,
  marginBottom: 20,
  opacity: 0.5,
},
genreLabel: {
  fontWeight: 'bold',
  fontSize: 10,
  lineHeight: 12,
  color: 'white',
},
});

export default MovieScreen;