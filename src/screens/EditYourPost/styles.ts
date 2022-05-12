import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.BLUE_LIGHT}; 
    flex: 1;
`;

export const Header = styled.View`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    width: 100%;
    height: ${RFValue(248)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px 0 20px;
`;

export const Title  = styled.Text`
    color: ${({theme}) => theme.COLORS.TITLE};
    font-size: ${RFValue(40)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};

    text-align: right;
    
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;

    padding: 26px;
`;

export const ButtonAlign  = styled.View`
    justify-content: center;
    align-items: center;
    
`;
