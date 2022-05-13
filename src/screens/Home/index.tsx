import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import Clickposts from '../../assets/ClickPosts.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import { CardPost } from '../../components/CardPost';
import {PostDTO} from '../../dtos/PostDTO';
import {
    Container,
    Header,
    CardPostsList
} from './styles';

import api from '../../services/api';
import { Load } from '../../components/Load';



export function Home(){

const cardData = {
    name: 'Leanne Graham',
    title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    date: '10/05/2022'
}

const [post, setPost] = useState<PostDTO[]>([])
const [loading, setLoading] = useState(true)

useEffect(() => {
 async function fetchHome() {
    try{
     const response = await api.get('')
     setPost(response.data)
    } catch(error) {
        console.log(error)
    }finally {
        setLoading(false)
    }
 }
  fetchHome()
}, [])

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

    {loading ? <Load /> :
    <CardPostsList
    data={post}
    keyExtractor={item => String(item.id)}
    renderItem={({ item }) =>
        <CardPost data={item} /> }
    />
}
    
</Container>
)
}