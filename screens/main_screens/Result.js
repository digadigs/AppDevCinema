import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {StyleSheet,SafeAreaView,View,Text,TouchableOpacity } from 'react-native';

const Result = ({ navigation }) => {
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={styles.container}>
        <View style={styles.alert}>
            <View style={styles.alertContent}>
            <View style={styles.alertTop}>
                <FeatherIcon color="#A3E58F" name="check-circle" size={16} />

                <Text style={styles.alertTopText}>Congratulations!</Text>
            </View>

            <Text style={styles.alertTitle}>Reservation Success and Secured.</Text>
            </View>

            <TouchableOpacity
            onPress={() => navigation.push('UserDashboard')}
                // handle onPress
            >
            <View style={styles.btn}>
                <Text style={styles.btnText}>Confirm</Text>
            </View>
            </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
    );
}
    
const styles = StyleSheet.create({
container: {
    padding: 40,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
},
alert: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 250,
},
alertContent: {
    marginTop: 'auto',
    marginBottom: 'auto',
},
alertTop: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},
alertTopText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
    color: '#A3E58F',
    textAlign: 'center',
},
alertTitle: {
    fontSize: 28,
    lineHeight: 44,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
},
alertMessage: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fae4a8',
    textAlign: 'center',
},
btn: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingBottom: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
},
btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#000',
},
});

export default Result