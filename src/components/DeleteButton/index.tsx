import React from 'react';

import {
    Container,
    ButtonDelete,
} from './styles';

interface Props {
   title: string;
}

export function DeleteButton({title, ...rest}: Props){
return (
    <Container {...rest}>
    <ButtonDelete>{title}</ButtonDelete>
    </Container>

)
}