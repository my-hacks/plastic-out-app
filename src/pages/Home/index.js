import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  BoxSale,
  HeaderFirstLine,
  RightSide,
  LeftSide,
  RigthSide,
  HeaderSecondLine,
  SearchInput,
  MainContainer,
  Boxes,
  TitleSeparator,
  ImageArea,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <HeaderFirstLine>
            <LeftSide>
              <Text>Teste</Text>
            </LeftSide>
            <RigthSide>
              <Text>Teste</Text>
            </RigthSide>
          </HeaderFirstLine>
          <HeaderSecondLine>
            <SearchInput />
          </HeaderSecondLine>
        </Header>

        <ScrollView>
          <MainContainer>
            <TitleSeparator>Areas de Compras</TitleSeparator>
            <ScrollView
              horizontal
              contentContainerStyle={{
                backgroundColor: 'pink',
                padding: 10,
                height: 120,
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <ImageArea
                  source={{
                    uri:
                      'https://facebook.github.io/react-native/img/tiny_logo.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageArea
                  source={{
                    uri:
                      'https://facebook.github.io/react-native/img/tiny_logo.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageArea
                  source={{
                    uri:
                      'https://facebook.github.io/react-native/img/tiny_logo.png',
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <ImageArea
                  source={{
                    uri:
                      'https://facebook.github.io/react-native/img/tiny_logo.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageArea
                  source={{
                    uri:
                      'https://facebook.github.io/react-native/img/tiny_logo.png',
                  }}
                />
              </TouchableOpacity>
            </ScrollView>
            <View>
              <TitleSeparator>Outra area</TitleSeparator>
              <ScrollView horizontal>
                <BoxSale>
                  <Text>Teste</Text>
                </BoxSale>
                <BoxSale>
                  <Text>Teste</Text>
                </BoxSale>

                <BoxSale>
                  <Text>Teste</Text>
                </BoxSale>
                <BoxSale>
                  <Text>Teste</Text>
                </BoxSale>
              </ScrollView>
            </View>
            <View>
              <TitleSeparator>Tendencias Ecologicas</TitleSeparator>
              <ScrollView horizontal>
                <BoxSale>
                  <Text>Teste</Text>
                </BoxSale>
                <BoxSale>
                  <Text>Teste</Text>
                </BoxSale>

                <BoxSale>
                  <Text>Teste</Text>
                </BoxSale>
                <BoxSale>
                  <Text>Teste</Text>
                </BoxSale>
              </ScrollView>
            </View>
          </MainContainer>
        </ScrollView>
      </Container>
    );
  }
}

export default Home;
