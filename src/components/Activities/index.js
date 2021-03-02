import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import * as S from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Atividades</S.Title>
      </S.Header>

      <S.Card>
        <S.CardHeader>
          <S.Avatar source={avatar} />
          <S.Description>
            <S.Bold>Você</S.Bold> Pagou o(a): <S.Bold>@daniel-motta6</S.Bold>
          </S.Description>
        </S.CardHeader>

        <S.CardBody>
          <S.UserName>Daniel Motta</S.UserName>
        </S.CardBody>

        <S.CardFooter>
          <S.Datails>
            <S.Value>R$ 18,00</S.Value>
            <S.Divider />

            <Feather name='lock' size={14} color='#fff' />
            <S.Date>Há 2 anos</S.Date>
          </S.Datails>

          <S.Actions>
            <S.Option>
              <MaterialCommunityIcons name='comment-outline' size={14} color='#fff' />
              <S.OptionLabel>0</S.OptionLabel>
            </S.Option>
            
            <S.Option>
              <AntDesign name='hearto' size={14} color='#fff' />
                <S.OptionLabel>0</S.OptionLabel>
            </S.Option>
          </S.Actions>
        </S.CardFooter>
      </S.Card>
    </S.Container>
  );
}