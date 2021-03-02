import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { Button } from './styles';

import * as S from './styles';

export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      focused={focused}
    >
      <Button
        colors={
          focused 
            ? ['#fff', '#ccc']
            : ['#00fc6c', '#00ac4a']
        }
        start={[1, 0.2]}
      >
        <MaterialIcons
          name='attach-money'
          size={30}
          color={ focused ? '#000' : '#fff'} />
        <S.TitlePayButton focused={focused}>Pagar</S.TitlePayButton>
        </Button>
    </TouchableWithoutFeedback>
  );
}