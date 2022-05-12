import React from 'react';
import { useTheme } from 'styled-components';

import {Container, Title} from './styles';

interface Props {
    title: string
    color?: string
    onPress: () => void
 }


export function Button({title, color, ...rest}: Props){
const theme = useTheme()


return (
<Container {...rest} color={color ? color : theme.COLORS.GREEN_LIGHT}>
    <Title>{title}</Title>
</Container>
)
}