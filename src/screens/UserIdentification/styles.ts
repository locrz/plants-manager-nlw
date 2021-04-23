import styled from "styled-components/native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface InputProps {
  isActive: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 32px;
  margin-top: 18px;
`;

export const Emoji = styled.Text`
  font-size: 42px;
  color: ${colors.heading};
`;

export const Header = styled.View`
  align-items: center;
`;

export const TextInput = styled.TextInput<InputProps>`
  border-bottom-width: 1px;
  border-bottom-color: ${({ isActive }) =>
    isActive ? colors.green : colors.gray};
  color: ${colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  font-family: ${fonts.text};
  margin-bottom: 50px;
`;
