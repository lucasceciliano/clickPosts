import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 38px;
`;

export const ButtonDelete = styled.Text`
     color: ${({theme}) => theme.COLORS.RED_CANCEL};
    font-size: ${RFValue(13)}px;
    font-family: ${({theme}) => theme.FONTS.TEXT};
`;
