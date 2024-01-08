import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

const items = [
  {
    img: 'https://www.smsupermalls.com/data/uploads/2021/09/SM_Calambafacadet_af22s1g5s4dfs.jpg',
    branch: 'SM City Calamba',
    address: 'National Road, Calamba City Triangle,\nBrgy. Real, Calamba City, Laguna,\nPhilippines',
    saved: true,
  },
  {
    img: 'https://www.smsupermalls.com/data/uploads/2018/06/Mall_of_Asia.jpg',
    branch: 'SM Mall of Asia',
    address: 'SM Mall of Asia, Seaside Blvd. Pasay City, Philippines',
    saved: true,
  },
  {
    img: 'https://www.smsupermalls.com/data/uploads/2018/06/San_Pablo.jpg',
    branch: 'SM City San Pablo',
    address: 'Maharlika Highway, Riverina Residential\nand Commercial Estates, San Rafael,\nSan Pablo City, Laguna, Philippines',
    saved: false,
  },
  {
    img: 'https://www.smsupermalls.com/data/uploads/2018/06/Santa-Rosa.jpg',
    branch: 'SM City Santa Rosa',
    address: 'Old National Highway, Brgy. Tagapo,\nSta. Rosa City, Laguna, Philippines',
    saved: false,

  },
  {
    img: 'https://www.smsupermalls.com/data/uploads/2018/06/Pampanga2.jpg',
    branch: 'SM City Pampanga',
    address: 'Olongapo-Gapan Road, Lagundi, Mexico,\nPampanga (East Wing) and San Jose,\nSan Fernando, Pampanga',
    saved: true,
  },
];

const Branches = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
    <ScrollView contentContainerStyle={styles.container}>
    {items.map(({ img, branch, address, saved }, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          // handle onPress
        }}>
      <View style={styles.card}>
      <View style={styles.cardLikeWrapper}>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
      <View style={styles.cardLike}>
        <FontAwesome
          color={saved ? '#FF5757' : '#222'}
          name="heart"
          solid={saved}
          size={14}
        />
        </View>
      </TouchableOpacity>
      </View>

      <View style={styles.cardTop}>
        <Image
          alt=""
          resizeMode="cover"
          style={styles.cardImg}
          source={{ uri: img }}
        />
      </View>

      <View style={styles.cardBody}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{branch}</Text>
      </View>

      <View style={styles.cardFooter}>
        <Icon
          color= 'white'
          name="location"
          solid={true}
          size={20}
          style={{ marginBottom: 2 }}
        />

        <Text style={styles.cardStars}>{address}</Text>
      </View>
      </View>
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
  padding: 24,
},
card: {
  position: 'relative',
  borderRadius: 8,
  borderWidth: 0.1,
  borderColor: 'white',
  backgroundColor: 'black',
  marginBottom: 24,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 2,
},
cardLike: {
  width: 30,
  height: 30,
  borderRadius: 9999,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
cardLikeWrapper: {
  position: 'absolute',
  zIndex: 1,
  top: 12,
  right: 12,
},
cardTop: {
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
},
cardImg: {
  width: '100%',
  height: 160,
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
},
cardBody: {
  padding: 12,
},
cardHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
cardTitle: {
  fontSize: 18,
  fontWeight: '500',
  color: 'white',
},
cardFooter: {
  marginTop: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
},
cardStars: {
  marginLeft: 8,
  fontSize: 13,
  fontWeight: 'normal',
  color: 'white',
  opacity: 0.7,
},
});

export default Branches;