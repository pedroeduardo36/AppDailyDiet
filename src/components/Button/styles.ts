import styled, {css} from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 16px;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
    `}
`