import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { BorderlessButton, RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {Container, Title} from './styles';

interface Props extends RectButtonProps {
    title: string
    color?: string
 }


export function Button({title, color, ...rest}: Props){

const theme = useTheme()


return (
<Container {...rest} color={color ? color : theme.COLORS.GREEN_LIGHT}>
    <Title>{title}</Title>
</Container>
)
}