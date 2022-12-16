import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;
`

export const Text = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    color: ${({theme}) => theme.COLORS.GRAY_600};
    font-weight: 900;
`
