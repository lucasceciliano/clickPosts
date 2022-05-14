import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { PostDTO } from '../../dtos/PostDTO';
import theme from '../../theme';
import { Button } from '../Button';
import { DeleteButton } from '../DeleteButton';

import {
    Content,
    TitlePost,
    Title,
    Description,
    ButtonDetail,

} from './styles';

interface Props extends RectButtonProps  {
    data: PostDTO;
}

export function CardUser({data, ...rest}: Props){
return (
<Content {...rest}>
                <TitlePost>
            <Title>{data.title}</Title>
            <Description>{data.body}</Description>
    
            <ButtonDetail>
            <Button title={'Editar post'} color={theme.COLORS.YELLOW_EDIT} onPress={() => {}} />
            <DeleteButton title={'Excluir'}  />
            </ButtonDetail>
        </TitlePost>
        </Content>
)
}