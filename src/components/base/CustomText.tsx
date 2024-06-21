import React from 'react';
import { Text, StyleProp } from 'react-native';
import { fonts } from '../../theme/fonts';

type Props = {
    content: any;
    style?: StyleProp<any>
    type?: 'reguler' | 'medium' | 'bold'
}

export const CustomText = ({ content, style, type = 'reguler', ...props }: Props) => {
    let fontFamily = fonts.poppinsReguler;
    switch (type) {
        case 'medium':
            fontFamily = fonts.poppinsMedium;
            break;
        case 'bold':
            fontFamily = fonts.poppinsBold;
            break;
        default:
            fontFamily;
    }

    return (
        <Text style={[{ fontFamily: fontFamily }, style]} {...props}>
            {content}
        </Text>
    )
};