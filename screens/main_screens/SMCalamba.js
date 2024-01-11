import React from 'react';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View, ScrollView, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';

const IMAGES = [
    'https://www.smsupermalls.com/data/uploads/2022/08/SM_City_Calamba.jpg',
    'https://www.smsupermalls.com/data/uploads/2021/09/SM_Calambafacadet_af22s1g5s4dfs.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/9790Calamba_City_Roads_Barangays_Landmarks_23.jpg/800px-9790Calamba_City_Roads_Barangays_Landmarks_23.jpg',
  ];

const SMCalamba = ({ navigation }) => {
 const [value, setValue] = React.useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.actions}>
        <SafeAreaView>
          <View style={styles.actionWrapper}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
                navigation.goBack()
              }}
              style={{ marginRight: 'auto' }}>
              <View style={styles.action}>
                <Icon color="white" name="chevron-back" size={26} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <Icon color="white" name="notifications" size={26} />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
        <View style={styles.photos}>
          <Swiper
            renderPagination={(index, total) => (
              <View style={styles.photosPagination}>
                <Text style={styles.photosPaginationText}>
                  {index + 1} / {total}
                </Text>
              </View>
            )}>
            {IMAGES.map((src, index) => (
              <View key={src} style={{ flex: 1 }}>
                <Image alt="" source={{ uri: src }} style={styles.photosImg} />
              </View>
            ))}
          </Swiper>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>SM City Calamba</Text>

          <View style={styles.headerRow}>
            <View style={styles.headerLocation}>
            <Icon color="white" name="time" size={20} marginRight={5}  />
              <Text style={styles.headerLocationText}>
              Mall Hours:
              </Text>
            </View>
          </View>

          <View style={styles.headerRow}>
            <View style={styles.headerLocation}>
              <Text style={styles.headerLocationText}>
              Sunday to Thursday   |   10am - 10pm
              </Text>
            </View>
          </View>
          <View style={styles.headerRow}>
            <View style={styles.headerLocation}>
              <Text style={styles.headerLocationText}>
              Friday & Saturday   |   10am to 10pm
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.statsItem}>
            <FontAwesome color="white" name="envelope-open" size={20 } />

            <Text style={styles.statsItemText}>customercare@smsupermalls.com</Text>
          </View>
        </View>
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>Address</Text>

          <Text style={styles.aboutDescription}>
            National Road, Calamba City Triangle, Brgy. Real, Calamba City, Laguna, Philippines
          </Text>
        </View>
      </ScrollView>

      <View style={styles.overlay}>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Save</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TicketScreen")
            }}
            style={{ flex: 1, paddingHorizontal: 8 }}>
            <View style={styles.btnSecondary}>
              <Text style={styles.btnSecondaryText}>Buy a ticket</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 26,
  },
  actions: {
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
  },
  photos: {
    paddingTop: 16,
    paddingHorizontal: 20,
    marginTop: 4,
    position: 'relative',
    height: 240,
    overflow: 'hidden',
    borderRadius: 12,
  },
  photosImg: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: '100%',
    height: 240,
    borderRadius: 24,
  },
  photosPagination: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'black',
    borderRadius: 31,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  photosPaginationText: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: '#ffffff',
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 32,
    color: 'white',
    marginBottom: 10
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  headerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLocationText: {
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 20,
    color: 'white',
    opacity: 0.8,
  },
  headerStars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerStarsText: {
    marginLeft: 8,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 20,
    color: 'white',
    opacity: 0.7,
  },
  stats: {
    marginVertical: 6,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsItemText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: 'white',
    marginLeft: 10,
    opacity: 0.8,
    marginBottom: 4,
  },
  about: {
    marginHorizontal: 20,
  },
  aboutTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 32,
    color: 'white',
    marginBottom: 4,
  },
  aboutDescription: {
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 23,
    color: 'white',
    opacity: 0.8,
  },
  footer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 30,
    backgroundColor: '#242329',
    height: 52,
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#F26463',
    height: 52,
  },
  btnSecondaryText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  action: {
    backgroundColor: 'black',
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,
    color: 'white',
    marginBottom: 16,
    marginLeft: 20,
  },
  genre: {
    width: 65,
    padding: 8,
    borderRadius: 9999,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 4,
    marginBottom: 12,
  },
  cardImg: {
    width: 40,
    height: 40,
    marginBottom: 8,
    borderRadius: 9999,
    borderWidth: .3,
    borderColor: 'white'
  },
  genreLabel: {
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: 13,
    color: 'white',
  },
});

export default SMCalamba