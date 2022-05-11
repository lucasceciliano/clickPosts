import React from 'react';
import {StatusBar} from 'react-native';
import Clickposts from '../../assets/ClickPosts.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import { BackButton } from '../../components/BackButton';

import {
    Container,
    Header,
    Content,
    UserPost,
    Name,
    Date,
    TitlePost,
    Title,
    Description,
    ButtonDetail,
} from './styles';
import { DeleteButton } from '../../components/DeleteButton';
import { Button } from '../../components/Button';
import theme from '../../theme';

interface Props {
    name: string;
    date: string;
    title: string;
    description: string;
}


export function ViewPost({name, date, title, description}: Props) {
return (
<Container>
    <StatusBar
    barStyle="light-content"
    translucent
    backgroundColor="transparent"
    />
    <Header>
        <BackButton  onPress={() => {}}/>
        <Clickposts
        width={RFValue(150)}
        height={RFValue(47)}
        />
    </Header>

    <Content>
        <UserPost>
        <Name>Leanne Graham</Name>
        <Date>10/05/2022</Date>
    </UserPost>
    <TitlePost>
        <Title>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</Title>
        <Description>Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</Description>

        <ButtonDetail>
        <Button title={'Editar post'} color={theme.COLORS.YELLOW_EDIT} />
        <DeleteButton title={'Excluir'}  />
        </ButtonDetail>
    </TitlePost>
    </Content>
    

</Container>
)
}