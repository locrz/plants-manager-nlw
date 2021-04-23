import styled from "styled-components/native";
import { Dimensions } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 36px;
  font-family: ${fonts.heading};
  line-height: 34px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
  padding: 0 20px;
  font-family: ${fonts.text};
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: ${SCREEN_WIDTH * 0.7}px;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 24px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
  margin-bottom: 16px;
  width: 56px;
`;
