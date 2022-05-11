import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
    color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
    width: 124px;
    height: 30px;
    margin-top: 23px;

    background-color: ${({color, theme}) => color ? color : theme.COLORS.GREEN_LIGHT};
    border-radius: 10px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.BACKGROUND};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.FONTS.TEXT};

    text-align: center;
    padding: 5px;
`;