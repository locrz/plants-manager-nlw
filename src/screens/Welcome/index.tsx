import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import wateringImage from "../../assets/watering.png";
import colors from "../../styles/colors";

import {
  Container,
  Content,
  Image,
  Text,
  Title,
  Button,
  Subtitle,
} from "./styles";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <Container>
      <Content>
        <Title>
          Gerencie {"\n"}
          suas plantas de {"\n"}
          forma fácil
        </Title>
        <Image source={wateringImage} />
        <Subtitle>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Subtitle>
        <Button onPress={handleStart}>
          <Text>
            <Feather name="chevron-right" size={32} color={colors.white} />
          </Text>
        </Button>
      </Content>
    </Container>
  );
}
