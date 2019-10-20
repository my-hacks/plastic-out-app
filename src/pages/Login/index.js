import React from 'react';
import {Text, View} from 'react-native';

import {Container, ButtonLogin, TextButton} from './styles';

export default function Login({navigation}) {
  return (
    <Container>
      <ButtonLogin>
        <TextButton onPress={() => navigation.navigate('Home')}>
          Login 123{' '}
        </TextButton>
      </ButtonLogin>
    </Container>
  );
}
