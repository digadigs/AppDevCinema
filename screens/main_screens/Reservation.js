import React from 'react'
import {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Button } from 'react-native'

const Reservation = ({ navigation }) => {
    const [form, setForm] = React.useState({
        side: '',
        temperature: '',
      });

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
      
  return (
    <View style={{ flex: 1, backgroundColor: 'black', paddingBottom: 80 }}>
    <View style={styles.actionContainer}>
      <SafeAreaView>
        <View style={styles.actionWrapper}>
        </View>
      </SafeAreaView>
    </View>
    
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

    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Movies</Text>

              <Text style={styles.sectionSubtitle}>Select one option:</Text>
            </View>

            <View style={styles.sectionBadge}>
              <Text style={styles.sectionBadgeText}>Required</Text>
            </View>
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

            <View style={styles.sectionBadge}>
              <Text style={styles.sectionBadgeText}>Required</Text>
            </View>
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

              <Text style={styles.sectionSubtitle}>Schedule your reservation:</Text>
            </View>

            <View style={styles.sectionBadge}>
              <Text style={styles.sectionBadgeText}>Required</Text>
            </View>
          </View>
      </View>

      <View style={styles.datecontainer}>
        <SafeAreaView>
          <View>
            <Button onPress={showDatepicker} title="Date" color={'#FF7171'} />
          </View>
          <View style={{ marginTop: 15 }}>
            <Button onPress={showTimepicker} title="Time" color={'#FF7171'} />
          </View>
        
          <Text style={{ marginTop: 6, padding: 10, color: "white" ,borderRadius: 10, marginBottom: 40, fontWeight: 'bold', fontSize: 13 }}>Selected Date: {date.toLocaleString()}</Text>
          {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        </SafeAreaView>
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
              navigation.navigate("Result")
            }}
            style={{ flex: 1, paddingHorizontal: 8 }}>
            <View style={styles.btnSecondary}>
              <Text style={styles.btnSecondaryText}>Book Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 27,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 8,
      textAlign: 'center'
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
      datecontainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }
});

export default Reservation