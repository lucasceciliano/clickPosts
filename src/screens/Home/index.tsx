import React from 'react';
import {StatusBar} from 'react-native';
import Clickposts from '../../assets/ClickPosts.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import { CardPost } from '../../components/CardPost';

import {
    Container,
    Header,
    CardPostsList
} from './styles';
import { Button } from '../../components/Button';


export function Home(){
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
        <Clickposts
        width={RFValue(150)}
        height={RFValue(47)}
        />
    </Header>

    <CardPostsList
    data={[1,2,3,4]}
    keyExtractor={item => String(item)}
    renderItem={({item }) => <CardPost data={cardData} /> }
    />
    
</Container>
)
}