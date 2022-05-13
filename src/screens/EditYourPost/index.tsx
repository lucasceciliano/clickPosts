import { useNavigation } from '@react-navigation/native';
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

export function EditYourPost(){
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
    
}

const navigation = useNavigation<any>()

function handleHome() {
    
    navigation.navigate('Home')
    
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
        <Title>Edite a {"\n"}
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
    title={'Concluir'}
    onPress={(handleSubmit(handleEdit), handleHome)}
    />
    </ButtonAlign>

    </Form>
    
</Container>
</TouchableWithoutFeedback>
)
}