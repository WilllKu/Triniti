import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Border, Color, FontFamily, FontSize } from '../../GlobalStyles';

const StartPage = ({ navigation }) => {
  const handleStaffLoginPress = () => {
    navigation.navigate('StaffLogin');
  };

  const handleFamilyLoginPress = () => {
    navigation.navigate('FamilyLogin');
  };

  return (
    <View style={styles.startPage}>
      <Image
        style={styles.nursingHomeBro1}
        contentFit="cover"
        source={require('../../assets/start/welcome_image.png')}
      />
      <View style={styles.screenBodyContent}>
        <LinearGradient
          style={styles.screenBodyContentChild}
          locations={[0, 1]}
          colors={['#2e88f3', '#056eec']}
        />
        <Image
          style={styles.whitelogoIcon}
          contentFit="cover"
          source={require('../../assets/start/whitelogo.png')}
        />
      </View>
      <TouchableOpacity
        style={[styles.familyLoginButton, styles.loginLayout]}
        locations={[0.61, 1]}
        colors={['#fff', '#f3f3f3']}
        onPress={handleFamilyLoginPress}>
        <Text style={[styles.familyLogin, styles.loginPosition]}>
          Family Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.staffLoginButton, styles.loginLayout]}
        locations={[0.61, 1]}
        colors={['#fff', '#f3f3f3']}
        onPress={handleStaffLoginPress}>
        <Text style={[styles.staffLogin, styles.loginPosition]}>
          Staff Login
        </Text>
      </TouchableOpacity>
      <Text style={[styles.welcome, styles.loginPosition]}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    borderRadius: Border.br_mini,
    width: '51.86%',
    height: '5.69%',
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  loginPosition: {
    textAlign: 'center',
    left: '50%',
    position: 'absolute'
  },
  nursingHomeBro1: {
    top: 0,
    left: 0,
    height: 430,
    width: 430,
    position: 'absolute',
    overflow: 'hidden'
  },
  screenBodyContentChild: {
    height: '96.5%',
    top: '3.62%',
    right: '0%',
    bottom: '-0.12%',
    left: '0%',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    backgroundColor: Color.whiteGradient,
    position: 'absolute',
    width: '100%'
  },
  whitelogoIcon: {
    height: '8.06%',
    width: '34.19%',
    top: '84.73%',
    right: '32.79%',
    bottom: '7.2%',
    left: '33.02%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  screenBodyContent: {
    marginLeft: -215,
    top: 349,
    height: 583,
    left: '50%',
    width: 430,
    position: 'absolute'
  },
  familyLogin: {
    marginLeft: -46.5,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: '500',
    fontSize: FontSize.size_base,
    top: '50%',
    marginTop: -10.5,
    textAlign: 'center'
  },
  familyLoginButton: {
    top: '67.7%',
    right: '23.72%',
    bottom: '26.61%',
    left: '24.42%'
  },
  staffLogin: {
    marginLeft: -39.5,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: '500',
    fontSize: FontSize.size_base,
    top: '50%',
    marginTop: -10.5,
    textAlign: 'center'
  },
  staffLoginButton: {
    backgroundColor: 'white',
    top: '60.19%',
    right: '23.95%',
    bottom: '34.12%',
    left: '24.19%'
  },
  welcome: {
    marginLeft: -128,
    top: 478,
    fontSize: 48,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.colorWhite,
    width: 256,
    height: 66
  },
  startPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: 'hidden',
    width: '100%'
  }
});

export default StartPage;
