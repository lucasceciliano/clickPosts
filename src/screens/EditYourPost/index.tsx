import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { PostDTO } from "../../dtos/PostDTO";

import { InputForm } from "../../components/InputForm";
import theme from "../../theme";

import { Container, Header, Title, Form, ButtonAlign } from "./styles";

interface FormData {
  title: string;
  text: string;
}

interface Params {
  post: PostDTO;
}

export function EditYourPost() {

  const { control, handleSubmit, reset } = useForm();

  const navigation = useNavigation<any>();
  const route = useRoute();
  const { post } = route.params as Params;

  function handleBack() {
    navigation.goBack("ViewPost");
  }

  

  function handleEdit(form: FormData) {

    const data = { 
        title: form.title,  
        text: form.text
    }
    
    try {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
          data,
          id: post.id
        })
        .then((data) => {
            console.log(data)
            navigation.navigate('ViewPost')
        })
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
    .then((response) => {
      reset(response.data)
    })
})

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Header>
          <BackButton onPress={handleBack} />
          <Title>
            Edite a {"\n"}
            postagem
          </Title>
        </Header>

        <Form>
          <InputForm
            height={50}
            control={control}
            name="title"
            placeholder="Título"
            placeholderTextColor={theme.COLORS.GREY_INPUT}
            autoCapitalize="sentences"
          />

          <InputForm
            control={control}
            height={150}
            name="text"
            placeholder="Escreva seu post"
            placeholderTextColor={theme.COLORS.GREY_INPUT}
            textAlignVertical="top"
            maxLength={140}
            multiline={true}
          />

          <ButtonAlign>
            <Button title={"Concluir"} onPress={() => handleSubmit(handleEdit)} />
          </ButtonAlign>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}
