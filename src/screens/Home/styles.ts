import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import {UserDTO} from '../../dtos/UserDTO';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
    width: 100%;
    height: 165px;
    background-color: ${({theme}) => theme.COLORS.BLUE_LIGHT};

    justify-content: flex-end;
    align-items: center;
    padding: 30px 0px;
`;

export const CardPostsList = styled( FlatList as new (props: FlatListProps<UserDTO>) => FlatList<UserDTO>).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})`

`; 

export const Create = styled.View`
    align-items: center;
    margin-bottom: 20px;
`;