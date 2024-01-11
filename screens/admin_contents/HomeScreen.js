import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
   

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Data</Text>

        <View style={styles.stats}>
          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="users" size={20} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>People</Text>

                <Text style={styles.statsItemValue}>122</Text>
              </View>
            </View>

            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="film" size={20} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Movies</Text>

                <Text style={styles.statsItemValue}>5</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="map-pin" size={20} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Branches</Text>

                <Text style={styles.statsItemValue}>5</Text>
              </View>
            </View>

            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="monitor" size={20} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Cinemas</Text>

                <Text style={styles.statsItemValue}>17</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="paperclip" size={20} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Pending Reservations</Text>

                <Text style={styles.statsItemValue}>21</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  stats: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: -6,
  },
  statsItem: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#1A1A1A',
    marginHorizontal: 6,
    marginBottom: 12,
  },
  statsItemIcon: {
    backgroundColor: '#FF5757',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    marginRight: 8,
    borderRadius: 8,
  },
  statsItemLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 2,
  },
  statsItemValue: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
  },
});
 
export default HomeScreen;