import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";

import {
  Container,
  Header,
  HeaderDetails,
  NameUser,
  EmailUser,
  CardViewPostList,
  ButtonDetail,
  Content,
  TitlePost,
  Title,
  Description,
} from "./styles";
import { DeleteButton } from "../../components/DeleteButton";

import { useNavigation, useRoute } from "@react-navigation/native";
import { UserDTO } from "../../dtos/UserDTO";
import axios from "axios";
import { PostDTO } from "../../dtos/PostDTO";
import { Button } from "../../components/Button";
import theme from "../../theme";

interface Params {
  name: UserDTO;
  id: PostDTO;
}

export function ViewPost({ ...rest }: Params) {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { name } = route.params as Params;

  const [post, setPost] = useState<PostDTO[]>([]);

  function handleEditYourPost(post: PostDTO) {
    navigation.navigate("EditYourPost", { post });
  }

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchHome() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchHome();
  }, []);

  function deletPost(id) {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1');
    setPost(post.filter((post) => post.id === id));
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={handleBack} />
        <HeaderDetails>
          <NameUser>{name.name}</NameUser>
          <EmailUser>{name.email}</EmailUser>
        </HeaderDetails>
      </Header>

        <CardViewPostList
          data={post}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
              <Content {...rest}>
            <TitlePost>
              <Title>{item.title}</Title>
              <Description>{item.body}</Description>

              <ButtonDetail>
                <Button
                  title={"Editar post"}
                  color={theme.COLORS.YELLOW_EDIT}
                  onPress={() => handleEditYourPost(item)}
                />
                <DeleteButton
                  title={"Excluir"}
                  onPress={() => deletPost(post)}
                />
              </ButtonDetail>
            </TitlePost>
      </Content>
          )}
        />
    </Container>
  );
}
