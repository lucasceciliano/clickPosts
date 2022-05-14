import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import { InputForm } from "../../components/InputForm";
import theme from "../../theme";

import { Container, Header, Title, Form, ButtonAlign } from "./styles";

interface FormData {
  name: string;
  email: string;
  text: string;
}

export function CreatePost() {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation<any>();

  function handleBack() {
    navigation.goBack("Home");
  }

  function handleEdit(form: FormData) {
    const data = {
      name: form.name,
      title: form.email,
      text: form.text,
    };
    if (!data.name) {
      return Alert.alert("Digite o nome do seu usuário");
    }

    try {
      axios
        .post("https://jsonplaceholder.typicode.com/users", { id: 1, data })
        .then(() => {
          console.log(data);
          navigation.navigate("Home");
        });
    } catch (error) {
      console.log(error);
    }
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
          <BackButton onPress={handleBack} />
          <Title>
            Criar uma {"\n"}
            postagem
          </Title>
        </Header>

        <Form>
          <InputForm
            height={50}
            control={control}
            name="name"
            placeholder="Usuário"
            placeholderTextColor={theme.COLORS.GREY_INPUT}
            autoCapitalize="words"
          />
          <InputForm
            height={50}
            control={control}
            name="email"
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
            <Button title={"Criar post"} onPress={handleSubmit(handleEdit)} />
          </ButtonAlign>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}
