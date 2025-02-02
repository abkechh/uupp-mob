import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { ThemedText } from '@/components/ThemedText';

const { width } = Dimensions.get('window');

const PhoneNumberInput = ({ 
    value, 
    onChangeText, 
    error,
  }) => {
    const [countryCode, setCountryCode] = useState('US');
    const [callingCode, setCallingCode] = useState('1');
    const [showCountryPicker, setShowCountryPicker] = useState(false);
    const [formattedValue, setFormattedValue] = useState('');
  
    const onSelectCountry = (country) => {
      setCountryCode(country.cca2);
      setCallingCode(country.callingCode[0]);
    };
  
    const formatPhoneNumber = (text) => {
      // Remove any non-numeric characters
      const cleaned = text.replace(/\D/g, '');
      
      // Format the number with space after first 5 digits
      let formatted = '';
      for (let i = 0; i < cleaned.length && i < 10; i++) {
        if (i === 5) {
          formatted += ' ';
        }
        formatted += cleaned[i];
      }
      
      setFormattedValue(formatted);
      
      // Pass the full number with country code to parent
      onChangeText && onChangeText(`+${callingCode}${cleaned}`);
    };
  
    const getPlaceholder = () => {
      const placeholder = '00000 00000';
      if (!formattedValue) return placeholder;
  
      // Create a masked placeholder that shows entered numbers and remaining placeholder characters
      let result = '';
      let valueIndex = 0;
      
      for (let i = 0; i < placeholder.length; i++) {
        if (placeholder[i] === ' ') {
          result += ' ';
          continue;
        }
        
        if (valueIndex < formattedValue.replace(/\s/g, '').length) {
          result += formattedValue.replace(/\s/g, '')[valueIndex];
          valueIndex++;
        } else {
          result += '0';
        }
      }
      return result;
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TouchableOpacity 
            style={styles.countryPickerButton}
            onPress={() => setShowCountryPicker(true)}
          >
            <CountryPicker
              withFilter
              withFlag
              withCallingCode
              withCallingCodeButton
              countryCode={countryCode}
              visible={showCountryPicker}
              onSelect={onSelectCountry}
              onClose={() => setShowCountryPicker(false)}
              containerButtonStyle={styles.countryPickerContainer}
            />
          </TouchableOpacity>
  
          <TextInput
            style={[styles.input, error && styles.inputError]}
            placeholder={getPlaceholder()}
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={formattedValue}
            onChangeText={formatPhoneNumber}
            maxLength={11} // 10 digits + 1 space
          />
        </View>
  
        {error && (
          <ThemedText style={styles.errorText}>{error}</ThemedText>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: width * 0.85,
      maxWidth: 400,
      marginVertical: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#E5E7EB',
      borderRadius: 5,
      backgroundColor: '#f0f0f0',
    },
    countryPickerButton: {
      flexDirection: 'row',
      alignItems: 'center',
      minWidth: 100,
      fontWeight:'500',
      paddingLeft: 5,
    },
    countryPickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRightWidth: 1,
      borderRightColor: '#E5E7EB',
      paddingRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 18,
      letterSpacing: 1,
      fontWeight: '500',
      color: '#4a4a4a',
      padding:10,
      paddingLeft: 10,
    },
    inputError: {
      borderColor: '#ff0000',
    },
    errorText: {
      color: '#ff0000',
      fontSize: 12,
      marginTop: 4,
      marginLeft: 4,
    }
  });
  
  export default PhoneNumberInput;