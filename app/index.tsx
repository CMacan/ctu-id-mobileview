import { Image, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function StudentIDCard() {
  return (
    <LinearGradient colors={['white', 'yellow', 'green']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
      <View style={styles.headerContainer}>

        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/CTU-logo.png')} style={styles.ctuLogo} resizeMode="contain"/>
          <Image source={require('../../assets/images/asean-logo.png')} style={styles.aseanLogo} resizeMode="contain"/>
        </View>
        
        <View style={styles.headerText}>
          <Text style={styles.smallText}>Republic of the Philippines</Text>
          <Text style={styles.largeText}>CEBU TECHNOLOGICAL</Text>
          <Text style={styles.largeText}>UNIVERSITY</Text>
          <Text style={styles.mediumText}>
            <Text style={styles.boldText}>Main Campus:</Text> M.J. Cuenco Avenue corner R. Palma St., Cebu City,
          </Text>
        </View>
      </View>

      <View style={styles.photoWrapper}>
        <View style={styles.photoContainer}>
          <Image source={require('../../assets/images/profile.jpg')} style={styles.photo} resizeMode="cover"/>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>CHARLES JAYSON M. MACAN</Text>
        <Text style={styles.courseText}>BSIT</Text>
        <View style={styles.divider}></View>
        <Text style={styles.labelText}>COURSE</Text>
        <Text style={styles.idText}>
          <Text style={styles.normalText}>ID No.:</Text> 1314960
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  logoContainer: {
    flexDirection: 'column', 
    alignItems: 'center',
    marginRight: 10, 
  },
  ctuLogo: {
    width: 60, 
    height: 60,
    marginBottom: 5,
  },
  aseanLogo: {
    width: 50, 
    height: 50,
    marginBottom: 5,
  },
  headerText: {
    flex: 1,
  },
  smallText: {
    fontSize: 14,
    fontWeight: '500',
  },
  largeText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'times new roman'
  },
  mediumText: {
    fontSize: 14,
  },
  boldText: {
    fontWeight: 'bold',
  },
  normalText: {
    fontWeight: 'normal',
  },
  photo: {
    width: 150,  
    height: 182, 
    resizeMode: 'cover',  
  },
  photoWrapper: {
    alignItems: 'center',
    marginBottom: 50,
  },  
  photoContainer: {
    width: 150,
    height: 182,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: 'center', 
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:5,
  },
  courseText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'black',
    width: 120,
    marginVertical: 5,
  },
  labelText: {
    fontSize: 10,
    marginBottom:10,
  },
  idText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
