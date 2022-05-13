import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { format, toDate } from "date-fns/esm"
import { Button } from '../Button';

import {
    Container,
    UserPost,
    Name,
    Date,
    TitlePost,
    Title,
} from './styles';
import { UserDTO } from '../../dtos/UserDTO';
import axios from 'axios';
import { RectButtonProps } from 'react-native-gesture-handler';
import { PostDTO } from '../../dtos/PostDTO';
import { intervalToDuration } from 'date-fns';

interface Props extends RectButtonProps  {
    data: PostDTO;
}

export function CardPost({ data, ...rest}: Props){
const navigation = useNavigation<any>()

function handleViewPost() {
    navigation.navigate('ViewPost')
}

function handleUser() {
    navigation.navigate('User')
}

const [user, setUser] = useState<UserDTO[]>([])

useEffect(() => {
    async function fetchCard() {
        try{
         const response = await axios.get('https://jsonplaceholder.typicode.com/users')
          setUser(response.data)
        } catch(error) {
            console.log(error)
        }
     }
      fetchCard()
}, [])

const date = format(toDate(13), 'dd/MM/yyyy')

return (
<Container {...rest}>
    <UserPost>
        <Name onPress={handleUser}
>
           {data.name}
        </Name>
        <Date>{date}</Date>
    </UserPost>
    <TitlePost>
        <Title>{data.email}</Title>
        <Button title='Visualizar' onPress={handleViewPost} />
    </TitlePost>

    
</Container>
)
}