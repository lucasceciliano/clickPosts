import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton, RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
    color: string;
}

export const Container = styled(BorderlessButton)<ButtonProps>`
    width: 130px;
    height: 30px;
    margin-top: 40px;

    background-color: ${({color, theme}) => color ? color : theme.COLORS.GREEN_LIGHT};
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.BACKGROUND};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.FONTS.TEXT};

    text-align: center;
    padding: 5px;
   
`;