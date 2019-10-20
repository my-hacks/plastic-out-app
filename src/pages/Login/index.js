import React from 'react';
import {Text, View, Image} from 'react-native';

import {Container, ButtonLogin, TextButton} from './styles';
import logo from '../../assets/img/plas.png';

export default function Login({navigation}) {
  return (
    <Container>
      <Image
        source={logo}
        resizeMode="contain"
        style={{
          height: 250,
          width: 250,
        }}
      />
      <ButtonLogin>
        <TextButton onPress={() => navigation.navigate('Home')}>
          Entrar
        </TextButton>
      </ButtonLogin>
    </Container>
  );
}
