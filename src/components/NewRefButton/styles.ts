import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
export const Status = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  margin-right: 12px;
`;
