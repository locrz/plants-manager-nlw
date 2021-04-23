import styled from "styled-components/native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 32px;
  margin-top: 32px;
  margin-bottom: 18px;
`;

export const Emoji = styled.Text`
  font-size: 96px;
  color: ${colors.heading};
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
  padding: 0 20px;
  font-family: ${fonts.text};
  margin-bottom: 32px;
`;
