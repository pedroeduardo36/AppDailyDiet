import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  align-self: flex-start;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const Form = styled.View`
  width: 100%;
  padding: 24px;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Input = styled(TextInput)`
  border: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};

  height: 48px;
  padding: 12px;
`;

export const DateInput = styled(TextInput)`
  width: 100%;

  border: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};

  height: 48px;
  padding: 12px;
`;

export const DescInput = styled(TextInput)`
  border: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};

  height: 124px;
  padding: 12px;
`;


export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme }) => theme.COLORS.GRAY_200};
  flex-direction: row;
  border-radius: 8px;
`