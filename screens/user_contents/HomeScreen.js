import Carousel from 'react-native-anchor-carousel';
import React, {useRef, useState, useEffect} from 'react';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar, ScrollView, ImageBackground, TextInput, TouchableWithoutFeedback, FlatList} from 'react-native';
   

const HomeScreen = () => {

  const [background,setBackground] = useState({
    uri: 'https://picfiles.alphacoders.com/169/169249.jpg',
    name: 'The Greatest Showman',
    stat: '2017 ‧ Musical/Thriller ‧ 1h 45m',
    desc: 'Growing up in the early 1800s, P.T. Barnum displays a natural talent for publicity and promotion, selling lottery tickets by age 12.'
  })

  const [gallery, setgallery] = useState([
 
    { image:'https://picfiles.alphacoders.com/169/169249.jpg', title: 'The Greatest Showman',released: '2017 ‧ Musical/Thriller ‧ 1h 45m' ,key: '1' , desc: 'Growing up in the early 1800s, P.T. Barnum displays a natural talent for publicity and promotion, selling lottery tickets by age 12. Barnum mesmerizing spectacle soon takes the world by storm to become the greatest show on Earth.' },
    { image:'https://wallpapercave.com/wp/wp6074910.jpg', title: 'The Space Between Us',released: '2017 ‧ Romance/Sci-fi ‧ 2h 1m' ,key: '2' , desc: 'Gardner Elliot, the first human born on Mars, begins an online friendship with Tulsa. On his maiden voyage to Earth, the 16-year-old finally gets to experience all the joys and wonders of a world he could only read about.' },
    { image:'https://w0.peakpx.com/wallpaper/218/978/HD-wallpaper-maze-runner-the-death-cure-maze-runner-the-death-cure-scodelario-brodie-sangster-obrien.jpg', title: 'Maze Runner: Death Cure',released: '2018 ‧ Action/Sci-fi ‧ 2h 22m',key: '3', desc: 'Thomas leads some escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary Last City.' },
    { image:'https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg', title: 'A Silent Voice',released: '2016 ‧Romance/Drama ‧ 2h 9m', key: '4', desc: 'When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.' },
    { image:'https://wallpapercave.com/dwp1x/wp7447980.jpg', title: 'Five Feet Apart',released: '2019 ‧ Romance/Thriller ‧ 1h 57m', key: '5', desc: 'Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control -- all of which get put to the test when she meets Will.' },
  ]);

  const [list, setList] = useState([
    { image:'https://m.media-amazon.com/images/M/MV5BZDVjZGJlZDItMTAzZS00MzBiLWJkOWItNWY5ODhiYzZhNWRmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg', key: '1' },
    { image:'https://wallpapercave.com/wp/wp12584124.jpg',key: '2' },
    { image:'https://m.media-amazon.com/images/M/MV5BYjdjNjUzMGEtNDExMC00NDk4LWExNjctNzE3ZTY1YmFiYWM5XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_FMjpg_UX1000_.jpg', key: '3'},
    { image:'https://m.media-amazon.com/images/M/MV5BZDYwYzQ3OTUtYWYzNC00YjkzLWIzYWYtN2NhYzdlMmVjZTdjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg', key: '4', },
    { image:'https://preview.redd.it/official-poster-for-kung-fu-panda-4-v0-1oisl4nwv26c1.jpg?width=640&crop=smart&auto=webp&s=c84e474e69e668cd48b0e18d9d98bc316788f029', key: '5' },
  ]);

  const carouselRef = useRef(null);
  const {width, height} = Dimensions.get('window')
  const routeRecents = () => {
  props.navigation.navigate('Recents')
  }

  const renderItem = ({item, index}) => {
    return (
    <View>
      <TouchableOpacity onPress={() => {carouselRef.current.scrollToIndex(index);
        setBackground({
          uri: item.image,
          name: item.title,
          stat: item.released,
          desc: item.desc
        })
      }
    }>
      <Image source={{uri: item.image}} style={styles.carouselImage}/>
      <Text style={styles.carouselText}>{item.title}</Text>
      {/* <MaterialIcons name='library-add' size={25} color='white' style={styles.carouselIcon} /> */}
      </TouchableOpacity>
    </View>
    )
  }

  return (
    <ScrollView style={{backgroundColor: '#000'}} blurRadius={100}>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <View style={styles.carouselContentContainer}>
      <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
        {/* <ImageBackground source={{ uri: background.uri  }} style={styles.ImageBg} blurRadius={10}> */}
          <View style={styles.SearchboxContainer}>
            <TextInput
              placeholder='Search'
              placeholderTextColor='white'
              style={styles.Searchbox}
              >
            </TextInput>
            <Feather name='search' size={20} color='#665' style={styles.SearchboxIcon} />
      </View>
    <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold', marginVertical: 3, textAlign: 'center' }}>Trending</Text>
      <View style={styles.carouselContainerView}>
        <Carousel style={styles.carousel}
          data={gallery}
          renderItem={renderItem}
          itemWidth={210}
          containerWidth={width - 20} 
          separatorWidth={0}
          ref={carouselRef}
          inActiveOpacity={0.4}
        />
      </View>

    <View style={styles.movieInfoContainer}>
      <View style={{ justifyContent: 'center'}}>
        <Text style={styles.movieName}>{background.name}</Text>
        <Text style={styles.movieStat}>{background.stat}</Text>
    </View>
    <TouchableOpacity style={{...styles.playIconContainer}}>
        <FontAwesome5  name='calendar-plus' size={20} color='white' style={{marginLeft: 2}} />
    </TouchableOpacity>
    </View>
    </View>
    </View>

    <View style={{marginHorizontal: 14}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom: 24, marginTop: 25}}>
      <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold',}}>Popular Now</Text>
      <TouchableOpacity>
      <Text style={{color: 'white', fontSize: 12, fontWeight: 'normal', marginRight: 10, marginTop: 3, borderRadius: 20, borderWidth: 1, borderColor: 'white', padding: 9}}>View All</Text>
      </TouchableOpacity>
      </View>
      
    <FlatList 
      style={{marginBottom: 30}}
      horizontal={true}
      data={list}
      renderItem={({item}) => {
        return(
      <TouchableOpacity style={{marginRight: 20, marginBottom: 40}}>
        <Image source={{uri: item.image}} style={{height: 300, width: 200}} />
        <View style={{position: "absolute", height: 3, width: '100%', opacity: 0.6}}></View>
        <FontAwesome5  name='play' size={38} color='white' style={{position: 'absolute',top: '45%', left: '45%',opacity: 0.9}} />
      </TouchableOpacity>
        )
      }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

carouselImage: {
    width: 200, 
    height: 300, 
    borderRadius: 15, 
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
},
carouselText: {
    paddingLeft: 14,
    color: 'white', 
    position: 'absolute', 
    bottom: 10, 
    left: 2, 
    fontWeight: 'bold'
},
carouselIcon: {
    position: 'absolute', 
    top: 15, 
    right: 15
},
carouselContentContainer: {
    flex: 1,
    backgroundColor: '#000',
    height: 550,
    paddingHorizontal: 14,
},
SearchboxContainer: {
    flexDirection: 'row',
    marginVertical: 20, 
    width: '80%',
    height: '8%',
    alignSelf: 'center', 
    backgroundColor: 'transparent', 
    elevation: 5,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
},
Searchbox: {
  padding: 12,
  paddingLeft: 20,
  fontSize: 14,
  color: 'white',
},
SearchboxIcon: {
  position: 'absolute', 
  right: 20, 
  top: 12,
  color: 'white'
},
ImageBg: {
  flex: 1,
  height: null,
  width: null,
  opacity: 1,
  justifyContent: 'flex-start',  
},
carouselContainerView: {
  width: '100%',
  height:350 ,
  justifyContent: 'center',
  alignItems: 'center',
},
carousel: {
  flex:1,
  overflow: 'visible',
} ,
movieInfoContainer: {
  flexDirection: 'row', 
  marginTop: 10, 
  justifyContent: 'space-between', 
  width: Dimensions.get('window').width - 14
},
movieName: {
  paddingLeft: 20,
  color: 'white', 
  fontWeight: 'bold', 
  fontSize: 20,
  marginBottom: 6
},
movieStat: {
  paddingLeft: 20,
  color: 'white', 
  fontWeight: 'bold', 
  fontSize: 14, 
  opacity: 0.8
},
playIconContainer: {
  backgroundColor: '#212121',
  padding: 15,
  marginRight: 12,
  borderRadius: 40,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 25,
  borderWidth: 4,
  borderColor: 'rgba(0, 8, 42, 0.2)',
}
});

export default HomeScreen;