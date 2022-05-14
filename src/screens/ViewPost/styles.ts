import { ButtonProps, FlatList, FlatListProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { PostDTO } from '../../dtos/PostDTO';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
    width: 100%;
    height: 200px;
    background-color: ${({theme}) => theme.COLORS.BLUE_LIGHT};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 50px 20px 10px 10px;
    
    
`;

export const Content = styled(RectButton)<ButtonProps>`
    width: 95%;
    height: 300px;
    border: ${({theme}) => theme.COLORS.BORDER_RETANGLE};
    border-radius: 10px;
    border-width: 1px;
    
    margin-top: 15px;
    margin-left: 10px;
    padding: 26px 30px;
`;

export const UserPost = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
`;

export const Name = styled.Text`
    color: ${({theme}) => theme.COLORS.TITLE};
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
`;

export const Date = styled.Text`
    color: ${({theme}) => theme.COLORS.GREY};
    font-family: ${({theme}) => theme.FONTS.DESCRIPTION};
`;

export const TitlePost = styled.View`
    margin-bottom: 23px;
    width: 100%;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.TITLE};
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.FONTS.TEXT};
    line-height: 18px;
`;

export const Description = styled.Text`
    color: ${({theme}) => theme.COLORS.TITLE};
    font-size: ${RFValue(13)}px;
    font-family: ${({theme}) => theme.FONTS.DESCRIPTION};

    margin-top: 12px;
    line-height: 20px;
`;

export const HeaderDetails = styled.View`
     margin-right: 5px;
     
`;
export const NameUser = styled.Text`
    color: ${({theme}) => theme.COLORS.TITLE};
    font-size: ${RFValue(25)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};

    text-align: right;
`;
export const EmailUser = styled.Text`
    color: ${({theme}) => theme.COLORS.TITLE};
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.FONTS.TEXT};

    text-align: right;
    justify-content: flex-end;
`;

export const ButtonDetail = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    
`;

export const CardViewPostList = styled(FlatList as new (props: FlatListProps<PostDTO>) => FlatList<PostDTO>).attrs({

    showsVerticalScrollIndicator: false
})`

`;

