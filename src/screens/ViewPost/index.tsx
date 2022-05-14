import React, { useEffect, useState } from 'react';
import {StatusBar} from 'react-native';
import { BackButton } from '../../components/BackButton';

import {
    Container,
    Header,
    HeaderDetails,
    NameUser,
    EmailUser,
    CardViewPostList
} from './styles';
import { DeleteButton } from '../../components/DeleteButton';

import { useNavigation, useRoute } from '@react-navigation/native';
import { UserDTO } from '../../dtos/UserDTO';
import axios from 'axios';
import { PostDTO } from '../../dtos/PostDTO';
import { CardUser } from '../../components/CardUser';



interface Params {
    name: UserDTO
    id: PostDTO
}

export function ViewPost() {
const navigation = useNavigation<any>()
const route = useRoute()
const {name} = route.params as Params

const [post, setPost] = useState<PostDTO[]>([])


function handleEditYourPost(id: PostDTO) {
    navigation.navigate('EditYourPost', {id, name,})
}

function handleBack() {
    navigation.goBack()
}

useEffect(() => {
    async function fetchHome() {
        try{
           const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
           setPost(response.data) 
         
        } catch(error) {
            console.log(error)
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
        <BackButton  onPress={handleBack}/>
        <HeaderDetails>
            <NameUser>{name.name}</NameUser>
            <EmailUser>{name.email}</EmailUser>
        </HeaderDetails>

    </Header>
    
        
            <CardViewPostList
            data={post}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) =>
            
                <CardUser data={item} onPress={() => handleEditYourPost(item)} />
            }
        />

       
   

   


</Container>
)
}