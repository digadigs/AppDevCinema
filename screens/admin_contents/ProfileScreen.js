import React, { useState } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, Switch, Alert } from 'react-native';

const SECTIONS = [
  {
    header: 'Account Setting',
    items: [
      { id: 'username', icon: 'user', label: 'Change Username', type: 'link' },
      { id: 'logout', icon: 'log-out', label: 'Logout', type: 'link' },
    ],
  },
  {
    header: 'App Setting',
    items: [
      { id: 'language', icon: 'globe', label: 'Language', type: 'select' },
    ],
  },
];

const ProfileScreen = ({ navigation }) => {

  const [form, setForm] = useState({
    language: 'English',
    darkMode: true,
  });

  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.profile}>
      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}>
      <View style={styles.profileAvatarWrapper}>
      <Image
        alt=""
        source={require('../../assets/profile.jpg')}
        style={styles.profileAvatar}
      />

      <TouchableOpacity
        onPress={() => {
        // handle onPress
      }}>
      <View style={styles.profileAction}>
      <FeatherIcon color="#fff" name="camera" size={12} />
      </View>
      </TouchableOpacity>
      </View>
      </TouchableOpacity>

      <View style={styles.profileBody}>
      <Text style={styles.profileName}>John Carlo Diga</Text>
      <Text style={styles.profileAddress}>admin@gmail.com</Text>
      </View>
      </View>

    {SECTIONS.map(({ header, items }) => (
    <View style={styles.section} key={header}>
    <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{header}</Text>
    </View>
    <View style={styles.sectionBody}>
      {items.map(({ id, label, icon, type }, index) => {
        return (
        <View
          key={id}
          style={[
          styles.rowWrapper,
          index === 0 && { borderTopWidth: 0 },
        ]}>
    <TouchableOpacity 
      onPress={() => {
      //logic
      if (id =='logout'){
        navigation.navigate('Logout')
      }
      }
    }>
    <View style={styles.row}>
      <FeatherIcon
        color="#616161"
        name={icon}
        style={styles.rowIcon}
        size={22}
      />
    <Text style={styles.rowLabel}>{label}</Text>
    <View style={styles.rowSpacer} />
      {type === 'select' && (
        <Text style={styles.rowValue}>{form[id]}</Text>
      )}
      {type === 'toggle' && (
        <Switch
          onChange={val => setForm({ ...form, [id]: val})}
          value={form[id]}
        />
      )}
      {(type === 'select' || type === 'link') && (
        <FeatherIcon
          color="#ababab"
          name="chevron-right"
          size={22}
        />
      )}
    </View>
    </TouchableOpacity>
    </View>
    );
    })}
    </View>
    </View>
    ))}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  paddingVertical: 15,
  backgroundColor: 'black',
  paddingBottom: 230,
},
section: {
  paddingTop: 15,
},
sectionHeader: {
  paddingHorizontal: 24,
  paddingVertical: 8,
},
sectionHeaderText: {
  fontSize: 14,
  fontWeight: '600',
  color: '#a7a7a7',
  textTransform: 'uppercase',
  letterSpacing: 1.2,
},
sectionBody: {
  borderTopWidth: 1,
  borderBottomWidth: 1,
},
header: {
  paddingLeft: 24,
  paddingRight: 24,
  marginBottom: 12,
},
title: {
  fontSize: 32,
  fontWeight: '700',
  color: '#1d1d1d',
  marginBottom: 6,
},
subtitle: {
  fontSize: 15,
  fontWeight: '500',
  color: '#929292',
},
profile: {
  padding: 24,
  backgroundColor: 'black',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
},
profileAvatar: {
  width: 86,
  height: 86,
  borderRadius: 9999,
  borderColor: 'white',
  borderWidth: .5,
},
profileAvatarWrapper: {
  position: 'relative',
},
profileAction: {
  position: 'absolute',
  right: 3,
  bottom: -4,
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: 9999,
  backgroundColor: '#FF5757',
},
profileName: {
  marginTop: 12,
  fontSize: 19,
  fontWeight: '600',
  color: 'white',
  textAlign: 'center',
},
profileAddress: {
  fontSize: 12,
  color: 'white',
  textAlign: 'center',
  opacity: 0.7,
},
row: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingRight: 24,
  height: 50,
},
rowWrapper: {
  paddingLeft: 24,
  backgroundColor: 'black',
  borderTopWidth: .2,
},
rowIcon: {
  marginRight: 12,
},
rowLabel: {
  fontSize: 17,
  fontWeight: '500',
  color: 'white',
},
rowValue: {
  fontSize: 17,
  color: 'white',
  marginRight: 4,
},
rowSpacer: {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,
},
})

export default ProfileScreen;
