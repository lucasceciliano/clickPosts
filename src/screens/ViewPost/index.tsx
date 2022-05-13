import React, { useEffect, useState } from 'react';
import {StatusBar} from 'react-native';
import { BackButton } from '../../components/BackButton';

import {
    Container,
    Header,
    HeaderDetails,
    NameUser,
    EmailUser,
    Content,
    UserPost,
    Name,
    TitlePost,
    Title,
    Description,
    ButtonDetail,
    CardViewPostList
} from './styles';
import { DeleteButton } from '../../components/DeleteButton';
import { Button } from '../../components/Button';
import theme from '../../theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { UserDTO } from '../../dtos/UserDTO';
import axios from 'axios';
import { PostDTO } from '../../dtos/PostDTO';



interface Params {
    name: UserDTO
}

export function ViewPost() {
const navigation = useNavigation<any>()
const route = useRoute()
const {name} = route.params as Params

const [post, setPost] = useState<PostDTO[]>([])


function handleEditYourPost() {
    navigation.navigate('EditYourPost')
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
            <Content >
            <UserPost>
            <Name>{name.name}</Name>
        </UserPost>
                <TitlePost>
            <Title>{item.title}</Title>
            <Description>{item.body}</Description>
    
            <ButtonDetail>
            <Button title={'Editar post'} color={theme.COLORS.YELLOW_EDIT} onPress={handleEditYourPost} />
            <DeleteButton title={'Excluir'}  />
            </ButtonDetail>
        </TitlePost>
        </Content>}
        />

       
   

   


</Container>
)
}