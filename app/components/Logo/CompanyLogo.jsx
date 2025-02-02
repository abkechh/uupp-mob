import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CompanyLogo = ({ size = width * 0.3, borderRadius = 10 }) => {
  return (
    <Image
      source={require('../../../assets/images/company-logo.png')}
      style={[
        styles.logo,
        {
          width: size,
          height: size,
          borderRadius: borderRadius,
        },
      ]}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#ffffff', // Fallback background color while image loads
  },
});

export default CompanyLogo;