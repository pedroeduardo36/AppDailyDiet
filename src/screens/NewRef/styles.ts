import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.SafeAreaView`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

