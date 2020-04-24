import React from 'react';
import {Text} from 'react-native';

import {Container, Card} from './styles';
import {TextInput} from 'react-native-gesture-handler';
export default function Login() {
  return (
    <Container>
      <Card>
        <TextInput
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          autoFocus
          returnKeyType="next"
        />
      </Card>
    </Container>
  );
}
