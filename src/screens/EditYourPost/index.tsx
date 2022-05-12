import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputDescription } from '../../components/InputDescription';
import theme from '../../theme';


import {
    Container,
    Header,
    Title,
    Form,
    ButtonAlign,
} from './styles';

export function EditYourPost(){
return (

<Container>
    <StatusBar
    barStyle="light-content"
    translucent
    backgroundColor="transparent"
    />
    <Header>
        <BackButton  onPress={() => {}}/>
        <Title>Edite o {"\n"}
        seu post</Title>
    </Header>

    <Form>
    <Input
        placeholder='Usuário'
        placeholderTextColor={theme.COLORS.GREY_INPUT}
    />
    <Input
        placeholder='Título'
        placeholderTextColor={theme.COLORS.GREY_INPUT}
    />

    <InputDescription
        placeholder='Escreva seu post'
        textAlignVertical='top'
        maxLength={140}
        multiline={true}
    />

    <ButtonAlign>
    <Button title={'Concluir'} />
    </ButtonAlign>

    </Form>
</Container>
)
}