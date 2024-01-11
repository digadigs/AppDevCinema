import React from 'react';
import { useState } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity, SafeAreaView, Alert, TouchableWithoutFeedback } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

const TicketScreen = () => {
  const [form, setForm] = React.useState({
    side: '',
    temperature: '',
  });

  return (
    
    <View style={{ flex: 1, backgroundColor: 'black', paddingBottom: 45 }}>
      <View style={styles.actionContainer}>
        <SafeAreaView>
          <View style={styles.actionWrapper}>
          </View>
        </SafeAreaView>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionBody}>
            <Text style={styles.title}>Reservation</Text>

            <Text style={styles.subtitle}>Secure your spot for an unforgettable experience. Don't miss out, book your tickets today!</Text>
          </View>
        </View>

        <View style={styles.section}>
        <Text style={styles.titleSeat}>Select Seat:</Text>
        <View style={{paddingBottom: 30, marginLeft: 50}}>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat.png")}
          style={{ height: 80, width: 80 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat2.png")}
          style={{ height: 80, width: 80, marginTop: -80, marginLeft: 50 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat3.png")}
          style={{ height: 80, width: 80, marginTop: -80, marginLeft: 100 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat4.png")}
          style={{ height: 80, width: 80, marginTop: -80, marginLeft: 150 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat5.png")}
          style={{ height: 80, width: 80, marginTop: -20, marginLeft: -30 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat6.png")}
          style={{ height: 80, width: 80, marginTop: -80, marginLeft: 25 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat7.png")}
          style={{ height: 80, width: 80, marginTop: -80, marginLeft: 75 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat8.png")}
          style={{ height: 80, width: 80, marginTop: -80, marginLeft: 125 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat9.png")}
          style={{ height: 80, width: 80, marginTop: -80, marginLeft: 175 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat10.png")}
          style={{ height: 80, width: 80, marginTop: -20 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat11.png")}
          style={{ height: 80, width: 80, marginTop: -80, marginLeft: 50 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat12.png")}
          style={{ height: 80, width: 80, marginTop: -80, marginLeft: 100 }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          source={require("../../assets/Seat13.png")}
          style={{ height: 80, width: 80, marginTop: -80, marginLeft: 150 }}>
          </Image>
        </TouchableOpacity>
        </View>
          
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Movies</Text>

              <Text style={styles.sectionSubtitle}>Select one option:</Text>
            </View>

            <TouchableOpacity>
            <View style={styles.sectionBadge}>
              <Text style={styles.sectionBadgeText}>View All</Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionOptions}>
            {[
              { label: 'Titanic', price: '3h 30m' },
              { label: 'Your Name.', price: '1hr 47m' },
              { label: 'World War Z', price: '1hr 56m' },
              { label: 'Sing 2', price: '1h 50m' },
              { label: 'The Social Network', price: '2hrs' },
            ].map(({ label, price }, index) => {
              const isActive = form.side === label;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setForm({ ...form, side: label });
                  }}>
                  <View style={[styles.radio, index === 0 && { borderTopWidth: 0, borderBottomWidth: 0 }]}>
                    <View style={[styles.radioInput, isActive && styles.radioInputActive]} />

                    <Text style={styles.radioLabel}>{label}</Text>

                    {price && (
                      <Text style={styles.radioPrice}>
                        {price}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Branches</Text>

              <Text style={styles.sectionSubtitle}>Select one option:</Text>
            </View>

            <TouchableOpacity>
            <View style={styles.sectionBadge}>
              <Text style={styles.sectionBadgeText}>View All</Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionOptions}>
            {['SM City Calamba', 'SM Mall of Asia', 'SM City San Pablo', 'SM City Santa Rosa', 'SM City Pampanga'].map((label, index) => {
              const isActive = form.temperature === label;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setForm({ ...form, temperature: label });
                  }}>
                  <View style={[styles.radio, index === 0 && { borderTopWidth: 0 }]}>
                    <View style={[styles.radioInput, isActive && styles.radioInputActive]} />

                    <Text style={styles.radioLabel}>{label}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Date</Text>

              <Text style={styles.sectionSubtitle}>Select one option:</Text>
            </View>

            <TouchableOpacity>
            <View style={styles.sectionBadge}>
              <Text style={styles.sectionBadgeText}>View All</Text>
            </View>
            </TouchableOpacity>
          </View>
        <View style={styles.sectionOptions}>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((label, index) => {
              const isActive = form.temperature === label;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setForm({ ...form, temperature: label });
                  }}>
                  <View style={[styles.radio, index === 0 && { borderTopWidth: 0 }]}>
                    <View style={[styles.radioInput, isActive && styles.radioInputActive]} />

                    <Text style={styles.radioLabel}>{label}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.container}>
        <View style={styles.buttons}>
        <TouchableOpacity
            onPress={() => {
              Alert.alert('Successful!', 'Your reservation has been added.');
            }}>
            <View style={styles.btnXL}>
              <FeatherIcon
                color="#fff"
                name="folder-plus"
                size={20}
                style={{ marginRight: 12 }}
              />

              <Text style={styles.btnXLText}>Confirm Reservation</Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center'
  },
  titleSeat: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
    textAlign: 'center',
    padding: 4,
    opacity: 0.8
  },
  section: {
    backgroundColor: 'black',
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  sectionBadge: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  sectionOptions: {
    paddingTop: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: 'white',
    opacity: 0.8,
  },
  actionContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  actionFilled: {
    backgroundColor: 'green',
    borderRadius: 9999,
  },
  radio: {
    position: 'relative',
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'white',
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'white',
  },
  radioInput: {
    width: 18,
    height: 18,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: 'white',
    marginRight: 12,
  },
  radioInputActive: {
    borderWidth: 5,
    borderColor: '#FF5757',
  },
  action: {
    width: 36,
    height: 36,
    borderRadius: 12,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
    paddingHorizontal: 16,
  },
  radioPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 'auto',
  },
  buttons: {
    marginTop: -30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    padding: 30,
  },
  btnXL: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF5757',
  },
  btnXLText: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
});


export default TicketScreen;