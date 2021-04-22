import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 36px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
  padding: 0 20px;
`;

export const Image = styled.Image`
  width: 292px;
  height: 284px;
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
