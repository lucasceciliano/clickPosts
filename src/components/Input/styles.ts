import styled from 'styled-components/native';
import {TextInput} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
    width: 100%;
    padding: 17px ;

    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.FONTS.DESCRIPTION};
    color: ${({theme}) => theme.COLORS.SHAPE};

    background-color: ${({theme}) => theme.COLORS.INPUT};
    border-radius: 10px;
    border: ${({theme}) => theme.COLORS.GREY};

    margin-bottom: 10px;
`;