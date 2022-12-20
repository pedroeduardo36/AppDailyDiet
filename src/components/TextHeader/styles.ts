import styled, { css } from "styled-components/native";
import {ArrowLeft} from 'phosphor-react-native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 24px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const BackIcon = styled(ArrowLeft).attrs(({theme}) => ({
    size: 15,
    color: theme.COLORS.GRAY_700
}))`

`