import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

import * as S from './styles';

export default function Home() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10c86e' />
          <S.BalanceContainer>
            <S.BalanceTitle>Meu Saldo</S.BalanceTitle>
              <S.Balance>R$ 0,00</S.Balance>
          </S.BalanceContainer>
          <AntDesign name='gift' size={30} color='#10c86e' />
        </S.Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </S.Container>
   </S.Wrapper>
  );
}
