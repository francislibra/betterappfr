import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/componentes/Header';
import Tabs from '~/componentes/Tabs';
import Menu from '~/componentes/Menu';

import {
  Container,
  Content,
  CardContent,
  CardItem,
  Card,
  CardHeader,
  CardFooter,
  Title,
  TitleCard,
  Description,
  DateEvent,
  Dosage,
  Logo,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import historico from '~/assets/img/historico.png';
export default function Main() {
  const [showCard, setShowCard] = useState(true);

  const slideInUp = {
    from: {top: 0},
    to: {top: 380},
  };

  const slideInDown = {
    from: {top: 380},
    to: {top: 0},
  };

  function showHistoric() {
    showCard ? setShowCard(false) : setShowCard(true);
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card animation={showCard ? slideInUp : slideInDown}>
          <CardHeader>
            <Logo source={historico} />
            <TitleCard>Histórico</TitleCard>
            <TouchableOpacity onPress={() => showHistoric()}>
              <Icon
                name={showCard ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={38}
                color="#666"
              />
            </TouchableOpacity>
          </CardHeader>
          <CardContent>
            <CardItem>
              <Title> Glicemia</Title>
              <Description>
                <Icon name="event" size={20} color="#666" />
                <DateEvent>10/03/2020 </DateEvent>/<Dosage>190 mg</Dosage>
              </Description>
            </CardItem>
            <CardItem>
              <Title> Glicemia</Title>
              <Description>
                <Icon name="event" size={20} color="#666" />
                <DateEvent>10/03/2020 </DateEvent>/<Dosage>190 mg</Dosage>
              </Description>
            </CardItem>
            <CardItem>
              <Title> Glicemia</Title>
              <Description>
                <Icon name="event" size={20} color="#666" />
                <DateEvent>10/03/2020 </DateEvent>/<Dosage>190 mg</Dosage>
              </Description>
            </CardItem>
            <CardItem>
              <Title> Glicemia</Title>
              <Description>
                <Icon name="event" size={20} color="#666" />
                <DateEvent>10/03/2020 </DateEvent>/<Dosage>190 mg</Dosage>
              </Description>
            </CardItem>
            <CardItem>
              <Title> Glicemia</Title>
              <Description>
                <Icon name="event" size={20} color="#666" />
                <DateEvent>10/03/2020 </DateEvent>/<Dosage>190 mg</Dosage>
              </Description>
            </CardItem>
            <CardItem>
              <Title> Glicemia</Title>
              <Description>
                <Icon name="event" size={20} color="#666" />
                <DateEvent>10/03/2020 </DateEvent>/<Dosage>190 mg</Dosage>
              </Description>
            </CardItem>
            <CardItem>
              <Title> Glicemia</Title>
              <Description>
                <Icon name="event" size={20} color="#666" />
                <DateEvent>10/03/2020 </DateEvent>/<Dosage>190 mg</Dosage>
              </Description>
            </CardItem>
            <CardItem>
              <Title> Glicemia</Title>
              <Description>
                <Icon name="event" size={20} color="#666" />
                <DateEvent>10/03/2020 </DateEvent>/<Dosage>190 mg</Dosage>
              </Description>
            </CardItem>
            <CardItem>
              <Title> Glicemia</Title>
              <Description>
                <Icon name="event" size={20} color="#666" />
                <DateEvent>10/03/2020 </DateEvent>/<Dosage>190 mg</Dosage>
              </Description>
            </CardItem>
            <CardItem>
              <Title> Glicemia</Title>
              <Description>
                <Icon name="event" size={20} color="#666" />
                <DateEvent>10/03/2020 </DateEvent>/<Dosage>190 mg</Dosage>
              </Description>
            </CardItem>
          </CardContent>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
