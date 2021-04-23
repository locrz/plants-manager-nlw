import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.TouchableOpacity<any>`
  background-color: ${({ disabled }) =>
    disabled ? colors.green_light : colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
  padding: 0 32px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-family: ${fonts.text};
`;
