import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';

const Logout = ({ navigation }) => {
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black'}}>
    <View style={styles.container}>
    <View style={styles.alert}>
        <View style={styles.alertContent}>
        <Image
            alt=""
            style={styles.alertAvatar}
            source={{
            uri: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/409536051_3681301398772487_6545605475362918965_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGlJROxelhEi0NpOgwTjzAJJaX-EOkIARslpf4Q6QgBG4LNknqPxZ_3061gyF7jxShYVqKKF1bxZ7ukbMEkfwSC&_nc_ohc=foxi0cf2wEYAX9kz2Ay&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfBTLjrHfT2rdWRCGA175-uTDW8nMGWGieH-hifpk77ufQ&oe=65A1177B',
            }}
        />

        <Text style={styles.alertTitle}>
            Log Out?
        </Text>

        <Text style={styles.alertMessage}>
            Are you sure you would like to log out of this account? You will
            need to verify your account again to log back in.
        </Text>
        </View>

        <TouchableOpacity
        onPress={() => {
            navigation.navigate('Login')
        }}>
        <View style={styles.btn}>
            <Text style={styles.btnText}>Continue</Text>
        </View>
        </TouchableOpacity>

        <View style={{ marginTop: 8 }}>
        <TouchableOpacity
            onPress={() => {
            navigation.goBack()
            }}>
            <View style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>Back</Text>
            </View>
        </TouchableOpacity>
        </View>
    </View>
    </View>
    </SafeAreaView>
    );
}
    
const styles = StyleSheet.create({
container: {
    padding: 40,
    flexGrow: .80,
    flexShrink: 1,
    flexBasis: 0,
},
alert: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingTop: 80,
},
alertContent: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
},
alertAvatar: {
    width: 160,
    height: 160,
    borderRadius: 9999,
    alignSelf: 'center',
    marginBottom: 24,
    borderColor: 'white',
    borderWidth: .5,
},
alertTitle: {
    marginBottom: 16,
    fontSize: 26,
    lineHeight: 34,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
},
alertMessage: {
    marginBottom: 24,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: 'normal',
    color: '#9a9a9a',
},
btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
},
btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: 'bold',
    color: 'black',
},
btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
},
btnSecondaryText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: 'white',
},
});

export default Logout