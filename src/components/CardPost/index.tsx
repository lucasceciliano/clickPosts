import { useNavigation } from '@react-navigation/native';
import React from 'react';
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
import { RectButtonProps } from 'react-native-gesture-handler';
import { UserDTO } from '../../dtos/UserDTO';
import { PostDTO } from '../../dtos/PostDTO';

interface Props extends RectButtonProps  {
    data: UserDTO;
}

export function CardPost({ data, ...rest}: Props){

    const navigation = useNavigation<any>()


    function handleViewPost() {
        navigation.navigate('CreatePost')
    }



const date = format(toDate(0), 'dd/MM/yyyy')

return (
<Container {...rest}>
    <UserPost>
        <Name
        >
           {data.name}
        </Name>
        <Date>{date}</Date>
    </UserPost>
    <TitlePost>
        
                <Title>{data.email}</Title>
        
        <Button title='Visualizar' onPress={ handleViewPost} />
    </TitlePost>

    
</Container>
)
}