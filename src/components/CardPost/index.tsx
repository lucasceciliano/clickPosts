import React from 'react';
import { Button } from '../Button';

import {
    Container,
    UserPost,
    Name,
    Date,
    TitlePost,
    Title,
} from './styles';

interface CardData {
    name: string;
    title: string;
    date: string;
}

interface Props {
 data: CardData
   
}

export function CardPost({data}: Props){
return (
<Container>
    <UserPost>
        <Name>{data.name}</Name>
        <Date>{data.date}</Date>
    </UserPost>
    <TitlePost>
        <Title>{data.title}</Title>
        <Button title='Visualizar' onPress={() => {}} />
    </TitlePost>

    
</Container>
)
}