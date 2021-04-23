import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";

import { Button } from "../../components/Button";

import {
  Container,
  Content,
  Form,
  Header,
  Emoji,
  Title,
  TextInput,
} from "./styles";
import { KeyboardAvoidingView } from "../../components/KeyboardAvoidingView";

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState("");

  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate("Confirmation");
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <Container>
      <KeyboardAvoidingView>
        <Content>
          <Form>
            <Header>
              <Emoji>{isFilled ? "😁" : "🙂"}</Emoji>
              <Title>
                Como podemos {"\n"}
                chamar você?
              </Title>
            </Header>
            <TextInput
              isActive={isFocused || isFilled}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
              value={name}
              returnKeyType="done"
              autoCorrect={false}
            />
            <Button onPress={handleSubmit} disabled={!isFilled}>
              Confirmar
            </Button>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
