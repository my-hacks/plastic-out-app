import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 25%;
  width: 100%;
  border-bottom-right-radius: 40;
  border-bottom-left-radius: 40;
  background-color: #3fbf90;
`;

export const HeaderFirstLine = styled.View`
  height: 40%;
  width: 100%;
  background-color: #fff;
  flex-direction: row;
  padding: 10px;
  /* background-color: pink; */
`;

export const LeftSide = styled.View`
  height: 100%;
  width: 60%;
  /* background-color: pink; */
`;

export const RigthSide = styled.View`
  height: 100%;
  width: 40%;
  /* background-color: red; */
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderSecondLine = styled.View`
  align-items: center;
  justify-content: center;
  height: 60%;
  padding: 0 25px;
`;

export const SearchInput = styled.TextInput`
  height: 52px;
  background-color: #fff;
  border-radius: 10px;
  padding: 0 10px;
  width: 100%;
`;

export const MainContainer = styled.View`
  /* background-color: blue; */
  padding: 10px;
`;

export const Boxes = styled.View`
  height: 80px;
  width: 25%;
  background-color: yellow;
  margin: 0px 10px;
`;

export const ImageArea = styled.Image`
  width: 70;
  height: 70;
  margin: 0px 5px;
  border: 1px solid #000;
  padding: 5px;
`;

export const TitleSeparator = styled.Text`
  font-size: 18;
  font-weight: bold;
  margin: 10px 0px;
`;

export const BoxSale = styled.TouchableOpacity`
  height: 150;
  width: 150;
  margin: 0px 5px;
  border-radius: 10px;
  border: 1px solid #000;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
`;

export const InternalBox = styled.View`
  height: 40px;
  width: 90%;
  background-color: lightgray;
  border-radius: 10px;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding: 10px;
`;
