import styled from "styled-components/native";
import { SmileySad } from "phosphor-react-native";

export const Container = styled.View`
  align-items: center;
`;

export const Text = styled.Text`

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  margin-top: 24px;
  margin-bottom: 12px;
`;

export const SadEmoji = styled(SmileySad).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_400,
  size: 32,
}))``;
