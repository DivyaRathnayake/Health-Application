import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export function SignupScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const validateUsername = (input) => {
    if (input.trim()) {
      setUsernameError('');
    } else {
      setUsernameError('Username is required.');
    }
    setUsername(input);
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input)) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
    }
    setEmail(input);
  };

  const validatePassword = (input) => {
    if (input.length >= 6) {
      setPasswordError('');
    } else {
      setPasswordError('Password must be at least 6 characters.');
    }
    setPassword(input);
  };

  const handleSubmit = () => {
    if (!usernameError && username && !emailError && email && !passwordError && password) {
      console.log('Valid username:', username);
      console.log('Valid email:', email);
      console.log('Valid password:', password);
      navigation.navigate('New');
    } else {
      if (!username) {
        setUsernameError('Username is required.');
      }
      if (!email) {
        setEmailError('Please enter a valid email address before proceeding.');
      }
      if (!password) {
        setPasswordError('Please enter a valid password before proceeding.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Let's begin your journey with,</Text>
      <Text style={styles.subtitle}>LADIES FITNESS</Text>
      <Image source={require('../assets/girl3.png')} style={styles.girlImage} />

      <View style={styles.formContainer}>
        {/* Username Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#888"
            value={username}
            onChangeText={validateUsername}
          />
        </View>
        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={validateEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={validatePassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Text style={styles.icon}>
              {isPasswordVisible ? '👁️' : '🙈'}
            </Text>
          </TouchableOpacity>
        </View>
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.ftext}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.subtext}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
    backgroundColor: '#674188',
    borderRadius: 100,
    zIndex: 1,
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    marginTop: 40,
    marginBottom: 5,
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 28,
    color: '#674188',
    fontWeight: 'bold',
  },
  girlImage: {
    marginTop: 20,
    width: 280,
    height: 300,
    marginBottom: 20,
  },
  formContainer: {
    marginTop: 20,
    width: '100%',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 100,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  iconContainer: {
    padding: 5,
  },
  icon: {
    fontSize: 24,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#674188',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 2,
  },
  subtext: {
    fontWeight: 'bold',
  },
});
