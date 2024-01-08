import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../constants/colors';

const IMAGES = [
    'https://mloz35cl5wye.i.optimole.com/cb:s357.4350f/w:1024/h:712/q:90/https://www.slugmag.com/wp/wp-content/uploads/2017/04/screen-shot-2016-11-27-at-1-42-50-pm.png',
    'https://cdn.vox-cdn.com/thumbor/T-VABqDoNb2d1NgEcKQgvFMvTI0=/0x0:2067x1377/1400x1050/filters:focal(869x524:1199x854):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54120133/your_name_oped.0.jpg',
    'https://www.animepilipinas.com/wp-content/uploads/2018/02/Your-Name-Taki-and-Mitsuha.png',
  ];

const YourName = ({ navigation }) => {
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
          <Text style={styles.headerTitle}>Your Name.</Text>

          <View style={styles.headerRow}>
            <View style={styles.headerLocation}>
              <Text style={styles.headerLocationText}>
              2016 ‧ Romance/Fantasy ‧ 1h 47m
              </Text>
            </View>
          </View>

          <View style={styles.headerRow}>
            <View style={styles.headerStars}>
              <FontAwesome color="#FF5757" name="star" solid={true} size={16} />

              <FontAwesome color="#FF5757" name="star" solid={true} size={16} />

              <FontAwesome color="#FF5757" name="star" solid={true} size={16} />

              <FontAwesome color="#FF5757" name="star" solid={true} size={16} />

              <FontAwesome color="#FF5757" name="star" solid={true} size={16} />

              <Text style={styles.headerStarsText}>210 reviews</Text>
            </View>
          </View>
        </View>

        <Text style={styles.listTitle}>Casts</Text>
      <ScrollView contentContainerStyle={styles.listContent} horizontal={true} showsHorizontalScrollIndicator={false}>
        {[
          {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kamiki_Ryunosuke_from_%22Godzilla_Minus_One%22_at_Red_Carpet_of_the_Tokyo_International_Film_Festival_2023_%2853347030272%29.jpg/1200px-Kamiki_Ryunosuke_from_%22Godzilla_Minus_One%22_at_Red_Carpet_of_the_Tokyo_International_Film_Festival_2023_%2853347030272%29.jpg',
            label: 'Kamiki Ryunosuke',
            color: 'white',
          },
          {
            img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTmg6FBQfHe2uSY0tgh3ByqGHBv6Thzi6B0ArOi6gAiSfHgLlHYqpAEMPSkqwu0bJMy7x_cUMEWpFVhb9A',
            label: 'Kamishiraishi',
            color: 'white',
          },
          {
            img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/307557_v9_bb.jpg',
            label: 'Masami Nagasawa',
            color: 'white',
          },
          {
            img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTfuO243P7sGLzPbmHee86Mg2bLyncgV-xquY0RIPBloC-M87DykE6bcN4qOUUYASNyagWvGB8HrAKIqLw',
            label: 'Etsuko Ichihara',
            color: 'white',
          },
          {
            img: 'https://m.media-amazon.com/images/M/MV5BNzBmNDcxYzktYzIyOC00NDFkLWFjMjMtNDA2NjlkNmMwMTkzXkEyXkFqcGdeQXVyMjg0MTI5NzQ@._V1_.jpg',
            label: 'Ryo Narita',
            color: 'white',
          },
          {
            img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGv9RNXWWmrYaKF4ggvBWuB8RIlbp1NMdRovqpXE89JbXVgBgL',
            label: 'Kana Hanazawa',
            color: 'white',
          },
          
      ].map(({ img, label, color }, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {

          }}>
          <View style={[styles.genre, { backgroundColor: color=COLORS.black }]}>
            <Image source={{ uri: img }} style={styles.cardImg} />
            <Text style={styles.genreLabel}>{label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>

        <View style={styles.stats}>
          <View style={styles.statsItem}>
            <FontAwesome color="white" name="building" size={20 } />

            <Text style={styles.statsItemText}>Showing on selected SM Branches</Text>
          </View>
        </View>
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>About</Text>

          <Text style={styles.aboutDescription}>
          Two teenagers share a profound, magical connection upon discovering they are swapping bodies.
          Things manage to become even more complicated when the boy and girl decide to meet in person.
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
              // handle onPress
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

export default YourName