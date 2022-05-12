import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { CardPost } from '../../components/CardPost';

import {
    Container,
    Header,
    HeaderDetails,
    NameUser,
    EmailUser,
    CardPostsListUser,
} from './styles';

export function User(){

    const cardData = {
        name: 'Leanne Graham',
        title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        date: '10/05/2022'
    }
    
return (
<Container>
    <StatusBar
    barStyle="light-content"
    translucent
    backgroundColor="transparent"
    />
    <Header>
        <BackButton  onPress={() => {}}/>
            <HeaderDetails>
            <NameUser>Leandro</NameUser>
            <EmailUser>meuemail@gmail.com</EmailUser>
            </HeaderDetails>
    </Header>

    <CardPostsListUser
    data={[1,2,3,4]}
    keyExtractor={item => String(item)}
    renderItem={({item }) => <CardPost data={cardData} /> }
    />

</Container>
)
}