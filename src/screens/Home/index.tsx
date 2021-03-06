import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import Clickposts from '../../assets/ClickPosts.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import { CardPost } from '../../components/CardPost';
import {
    Container,
    Header,
    CardPostsList,
    Create
} from './styles';

import api from '../../services/api';
import { Load } from '../../components/Load';
import { useNavigation } from '@react-navigation/native';
import { UserDTO } from '../../dtos/UserDTO';
import { Button } from '../../components/Button';
import theme from '../../theme';



export function Home(){

    const navigation = useNavigation<any>()


    function handleViewPost( name: UserDTO) {
        navigation.navigate('ViewPost', {name})
    }

    function handleCreatePost( ) {
        navigation.navigate('CreatePost')
    }
    


const [user, setUser] = useState<UserDTO[]>([])
const [loading, setLoading] = useState(true)

useEffect(() => {
 async function fetchHome() {
    try{
     const response = await api.get('')
     setUser(response.data)
    
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

    <Create>
    <Button title="Criar post" onPress={handleCreatePost} color={theme.COLORS.YELLOW_EDIT}/>
    </Create>

    {loading ? <Load /> :
    <CardPostsList
    data={user}
    keyExtractor={item => String(item.id)}
    renderItem={({ item }) =>
        <CardPost data={item} onPress={() => {handleViewPost(item)}}  />}
        
    />
    
}
    
</Container>
)
}