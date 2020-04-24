import styled from 'styled-components/native';
// import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  flex: 1;
  background: rgba(16, 116, 182, 1);

  justify-content: center;
`;
// padding-top: ${getStatusBarHeight()}px;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = Animatable.createAnimatableComponent(styled.View`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  left: 0;
  right: 0;
  top: 0px;
  position: absolute;

  from: {
    top: 0px;
  }
  ,
   to: {
    top: 380px;
  }
`);

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const CardContent = styled.ScrollView`
  flex: 1;
  padding: 5px 15px;
`;

export const CardItem = styled.View`
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999;
  flex-direction: row;
`;
// align-items: stretch;
export const TitleCard = styled.Text`
  font-size: 18px;
  color: #999;
`;
export const Description = styled.Text`
  font-size: 14px;

  color: #333;
  border-bottom-color: rgba(147, 149, 152, 1);
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;
// margin-top: 3px;
export const DateEvent = styled.Text`
  font-size: 14px;
  color: #333;
`;
export const Dosage = styled.Text`
  font-size: 14px;
  color: #333;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(147, 149, 152, 1);
`;
export const CardFooter = styled.Text`
  padding: 60px;
  background: #eee;
  border-radius: 4px;
`;
export const Logo = styled.Image`
  width: 32px;
  height: 32px;
`;
