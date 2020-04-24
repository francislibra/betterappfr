import React from 'react';
import QRCode from 'react-native-qrcode-svg';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          size={80}
          backgroundcolor="#FFF"
          color="#1074b6"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="settings" size={20} color="#FFF" />
          <NavText>Configurar</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Avaliar o APP</NavText>
        </NavItem>
      </Nav>
      <SignOutButton>
        <SignOutButtonText>Sair</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
