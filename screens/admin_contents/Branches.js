import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';

const lessons = [
  {
    img: 'https://www.smsupermalls.com/data/uploads/2022/08/SM_City_Calamba.jpg',
    name: 'SM City Calamba',
    cal: 22,
    duration: 3,
  },
  {
    img: 'https://www.smsupermalls.com/data/uploads/2023/03/SMOA2.png',
    name: 'SM Mall of Asia',
    cal: 12,
    duration: 5,
  },
  {
    img: 'https://www.smsupermalls.com/data/uploads/2022/08/SM_City_San_Pablo.jpg',
    name: 'SM City San Pablo',
    cal: 12,
    duration: 3,
  },
  {
    img: 'https://www.smsupermalls.com/data/uploads/2022/08/SM_City_Santa_Rosa.jpg',
    name: 'SM City Santa Rosa',
    cal: 33,
    duration: 2,
  },
  {
    img: 'https://www.smsupermalls.com/data/uploads/2022/08/SM_City_Pampanga.jpg',
    name: 'SM City Pampanga',
    cal: 44,
    duration: 4,
  },
];

const Branches = () => {
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
                        {duration} cinemas
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

export default Branches;