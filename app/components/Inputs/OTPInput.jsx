import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const OTPInput = ({ otpSize = 4, onOtpComplete }) => {
  const [otp, setOtp] = useState(Array(otpSize).fill(''));
  const inputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < otpSize - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Check if OTP is complete
    if (newOtp.every(digit => digit !== '')) {
      onOtpComplete?.(newOtp.join(''));
    }
  };

  const handleKeyPress = (event, index) => {
    // Move to previous input on backspace if current input is empty
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array(otpSize).fill(0).map((_, index) => (
        <TextInput
          key={index}
          ref={ref => inputRefs.current[index] = ref}
          style={[
            styles.input,
            otp[index] ? styles.inputFilled : null,
          ]}
          maxLength={1}
          keyboardType="numeric"
          value={otp[index]}
          onChangeText={(value) => handleOtpChange(value, index)}
          onKeyPress={(event) => handleKeyPress(event, index)}
          selectTextOnFocus
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    width: width * 0.12,
    height: width * 0.12,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 12,
    fontSize: width * 0.058,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#333',
  },
  inputFilled: {
    backgroundColor: '#f0f9ff', // Light blue background
    borderColor: '#3b82f6', // Blue border
    color: '#1e40af', // Darker blue text
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});

export default OTPInput;