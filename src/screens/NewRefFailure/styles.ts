import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 80%;
  padding: 24px;
  align-self: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}

`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}PX;
  `}
  margin-bottom: 24px;
  text-align: center;
`;
