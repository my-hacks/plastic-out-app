import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
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
  InternalBox,
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
              <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 5}}>
                Consumo Consciente
              </Text>
            </LeftSide>
            <RigthSide>
              <Icon name="shopping-cart" size={30} color="#000" />
              <Icon name="bell" size={30} color="#000" />
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
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{
                padding: 10,
                height: 120,
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <ImageArea
                  source={{
                    uri:
                      'https://cdn.iconscout.com/icon/premium/png-256-thumb/sunglasses-203-1119375.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageArea
                  source={{
                    uri:
                      'https://cdn2.iconfinder.com/data/icons/fitness-42/64/Fitness-86-512.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageArea
                  source={{
                    uri:
                      'https://icon-library.net/images/clothing-icon-png/clothing-icon-png-21.jpg',
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <ImageArea
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/512/69/69524.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <ImageArea
                  source={{
                    uri:
                      'http://avenzasemijoias.com.br/wp-content/uploads/2018/07/pulseiras-icone.png',
                  }}
                />
              </TouchableOpacity>
            </ScrollView>
            <View>
              <TitleSeparator>
                Itens de acordo com seu ultimo acesso
              </TitleSeparator>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <BoxSale>
                  <Image
                    source={{
                      uri:
                        'https://img.lojasrenner.com.br/item/548658369/zoom/1.jpg',
                    }}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <InternalBox>
                    <Text>lorem</Text>
                  </InternalBox>
                </BoxSale>
                <BoxSale>
                  <Image
                    source={{
                      uri:
                        'http://conexaoplaneta.com.br/wp-content/uploads/2018/08/tenis-feito-com-17-garrafas-plasticas-recicladas-3-conexao-planeta.jpg',
                    }}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <InternalBox>
                    <Text>lorem</Text>
                  </InternalBox>
                </BoxSale>

                <BoxSale>
                  <Image
                    source={{
                      uri:
                        'https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_2,w_661,q_auto:best/v11543414573/https://cdn.amaro.com/images/products/20020271_192_original_1.jpg',
                    }}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <InternalBox>
                    <Text>lorem</Text>
                  </InternalBox>
                </BoxSale>
                <BoxSale>
                  <Image
                    source={{
                      uri:
                        'https://www.baixarvideosgratis.com.br/imagens/tutoriais/artesanatos/esse-tutorial-de-pulseira-e-super-legal-e-facil-de-fazer-confira.jpg',
                    }}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <InternalBox>
                    <Text>lorem</Text>
                  </InternalBox>
                </BoxSale>
              </ScrollView>
            </View>
            <View>
              <TitleSeparator>Tendencias Ecologicas</TitleSeparator>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <BoxSale>
                  <Image
                    source={{
                      uri:
                        'https://http2.mlstatic.com/sandalia-de-lona-reciclavel-largado-original-oferta-D_NQ_NP_12227-MLB20056871338_032014-F.jpg',
                    }}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <InternalBox>
                    <Text>lorem</Text>
                  </InternalBox>
                </BoxSale>
                <BoxSale>
                  <Image
                    source={{
                      uri:
                        'http://atualizei.com/wp-content/uploads/2011/01/melissa-Gaetano-pesce-2011.jpg',
                    }}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <InternalBox>
                    <Text>lorem</Text>
                  </InternalBox>
                </BoxSale>

                <BoxSale>
                  <Image
                    source={{
                      uri:
                        'https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_2,w_661,q_auto:best/v11543414573/https://cdn.amaro.com/images/products/20020271_192_original_1.jpg',
                    }}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <InternalBox>
                    <Text>lorem</Text>
                  </InternalBox>
                </BoxSale>
                <BoxSale>
                  <Image
                    source={{
                      uri:
                        'https://lojafarm.vteximg.com.br/arquivos/ids/2084230-708-1062/272194_1192_1-VESTIDO-FOLHAS-NA-SELVA.jpg?v=636973545145170000',
                    }}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: 'absolute',
                    }}
                  />
                  <InternalBox>
                    <Text>lorem</Text>
                  </InternalBox>
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
