import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
    width: 100%;
    height: 165px;
    background-color: ${({theme}) => theme.COLORS.BLUE_LIGHT};

    justify-content: center;
    align-items: center;
    padding: 100px 68px;
`;

export const CardPostsList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})`

`;