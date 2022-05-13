import { useNavigation } from '@react-navigation/native';
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
const navigation = useNavigation<any>()

function handleViewPost() {
    navigation.navigate('ViewPost')
}

function handleUser() {
    navigation.navigate('User')
}

return (
<Container>
    <UserPost>
        <Name onPress={handleUser}>{data.name}</Name>
        <Date>{data.date}</Date>
    </UserPost>
    <TitlePost>
        <Title>{data.title}</Title>
        <Button title='Visualizar' onPress={handleViewPost} />
    </TitlePost>

    
</Container>
)
}