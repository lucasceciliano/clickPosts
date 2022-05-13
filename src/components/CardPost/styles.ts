import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
    width: 100%;
    height: 180px;
    border: ${({theme}) => theme.COLORS.BORDER_RETANGLE};
    border-radius: 10px;
    border-width: 1px;
    
    margin-top: 15px;
    padding: 26px 20px;
`;

export const UserPost = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
`;

export const Name = styled.Text`
    color: ${({theme}) => theme.COLORS.TITLE};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
`;

export const Date = styled.Text`
    color: ${({theme}) => theme.COLORS.GREY};
    font-family: ${({theme}) => theme.FONTS.DESCRIPTION};
    font-size: ${RFValue(10)}px;
`;

export const TitlePost = styled.View`
    margin-bottom: 23px;
    width: 100%;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.TITLE};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.FONTS.DESCRIPTION};
    line-height: 18px;
`;



