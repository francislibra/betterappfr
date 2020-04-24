import React from 'react';

import {Container, TabsContainer, TabItem, TabText, Logo} from './styles';

import home from '~/assets/img/home.png';
import glicemia from '~/assets/img/glicemia.png';
import hba1c from '~/assets/img/hba1c.png';
import perfil from '~/assets/img/perfil.png';
import avalieapp from '~/assets/img/avalieapp.png';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Logo source={home} />
          <TabText>Home</TabText>
        </TabItem>
        <TabItem>
          <Logo source={glicemia} />
          <TabText>Glicemia</TabText>
        </TabItem>
        <TabItem>
          <Logo source={hba1c} />
          <TabText>HbA1c</TabText>
        </TabItem>
        <TabItem>
          <Logo source={perfil} />
          <TabText>Perfil</TabText>
        </TabItem>
        <TabItem>
          <Logo source={avalieapp} />
          <TabText>Avaliar o APP</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
