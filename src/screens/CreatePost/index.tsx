import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';


import { InputForm } from '../../components/InputForm';
import theme from '../../theme';


import {
    Container,
    Header,
    Title,
    Form,
    ButtonAlign,
} from './styles';

interface FormData {
    name: string;
    title: string;
    text: string;
}

export function CreatePost(){
const {
    control,
    handleSubmit,
} = useForm()

function handleEdit(form: FormData) {

    const data = {
        name: form.name,
        title: form.title,
        text: form.text
    }
    if(!data.name){
        return Alert.alert('Digite o nome do seu usuário')
    }
    console.log(data)
}

return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<Container>
    
    <StatusBar
    barStyle="light-content"
    translucent
    backgroundColor="transparent"
    />
    <Header>
        <BackButton  onPress={() => {}}/>
        <Title>Criar uma {"\n"}
        postagem</Title>
    </Header>

    <Form>
    <InputForm
        height={50}
        control={control}
        name="name"
        placeholder='Usuário'
        placeholderTextColor={theme.COLORS.GREY_INPUT}
        autoCapitalize="words"
    />
    <InputForm
        height={50}
        control={control}
        name="title"
        placeholder='Título'
        placeholderTextColor={theme.COLORS.GREY_INPUT}
        autoCapitalize="sentences"
    />

    <InputForm
        control={control}
        height={150}
        name="text"
        placeholder='Escreva seu post'
        placeholderTextColor={theme.COLORS.GREY_INPUT}
        textAlignVertical='top'
        maxLength={140}
        multiline={true}
    />

    <ButtonAlign>
    <Button
    title={'Criar post'}
    onPress={handleSubmit(handleEdit)}
    />
    </ButtonAlign>

    </Form>
    
</Container>
</TouchableWithoutFeedback>
)
}