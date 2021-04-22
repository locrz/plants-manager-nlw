import React from "react";

import wateringImage from "../../assets/watering.png";

import { Container, Image, Text, Title, Button, Subtitle } from "./styles";

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie {"\n"}
        suas plantas {"\n"}
        de forma fácil
      </Title>
      <Image source={wateringImage} />
      <Subtitle>
        Não esqueça mais de regar suas{"\n"}
        plantas. Nós cuidamos de lembrar você {"\n"}
        sempre que precisar.
      </Subtitle>
      <Button>
        <Text>{">"}</Text>
      </Button>
    </Container>
  );
}
