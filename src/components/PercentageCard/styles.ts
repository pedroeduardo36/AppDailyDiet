import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;
export const ForwardButton = styled.TouchableOpacity`
  flex: 1;
`;
export const ForwardIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;
