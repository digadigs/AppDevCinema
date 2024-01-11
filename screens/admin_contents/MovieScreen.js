import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';

const lessons = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6AFcgb41p-YNvl4ZcHDomsOhnbmIcnhrVhxEap4pQWhiUa8NF',
    name: 'Titanic',
    cal: 22,
    duration: 'Now',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
    name: 'Your Name.',
    cal: 12,
    duration: 'Now',
  },
  {
    img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9087912_p_v8_ab.jpg',
    name: 'World War Z',
    cal: 12,
    duration: 'Now',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BOTgzYzA3NWItYzkxZC00OWQ2LTkxNTItODMyNmMxNTNkZTMxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
    name: 'Sing 2',
    cal: 33,
    duration: 'Now',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BMjI0MmFhY2QtZTliYi00OWM1LWE3NzMtNTZhNTQyYTFmY2IzXkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg',
    name: 'The Social Network',
    cal: 44,
    duration: 'Now',
  },
];

const MovieScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Manage</Text>

        {lessons.map(({ name, cal, duration, img }, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.card}>
                <Image
                  alt=""
                  resizeMode="cover"
                  style={styles.cardImg}
                  source={{ uri: img }}
                />

                <View>
                  <Text style={styles.cardTitle}>{name}</Text>

                  <View style={styles.cardStats}>
                    <View style={styles.cardStatsItem}>
                      <FeatherIcon color="#636a73" name="video" />

                      <Text style={styles.cardStatsItemText}>
                        {duration} showing
                      </Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.cardAction}>
                <TouchableOpacity>
                  <FeatherIcon color="#9ca3af" name="edit" size={21} />
                </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <FeatherIcon color="#9ca3af" name="plus" size={21} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    paddingBottom: 120
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  card: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardImg: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  cardStats: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardStatsItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  cardStatsItemText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#636a73',
    marginLeft: 6,
  },
  cardAction: {
    marginLeft: 'auto',
    marginRight: 10
  },
});

export default MovieScreen;