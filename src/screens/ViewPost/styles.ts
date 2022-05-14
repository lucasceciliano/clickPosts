import { FlatList, FlatListProps } from 'react-native';
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


export const CardViewPostList = styled(FlatList as new (props: FlatListProps<PostDTO>) => FlatList<PostDTO>).attrs({

    showsVerticalScrollIndicator: false
})`

`;

