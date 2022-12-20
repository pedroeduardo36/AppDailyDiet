import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 80%;
  padding: 32px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  align-self: center;
  justify-content: flex-start;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  align-self: flex-start;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const SectionHeader = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  align-self: flex-start;
  margin-top: 24px;
`;

export const CardText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  align-self: flex-start;
`;

export const SectionCard = styled.View`
  width: 100%;
  margin-top: 12px;
  padding: 16px;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
