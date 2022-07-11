import { StyleSheet } from 'react-native';
import { generateTextStyle } from '../../utils';
import { TypographyProps } from './types';

const useStyles = (props: Omit<TypographyProps, 'children'>) =>
    StyleSheet.create({
        typographyWrapper: {
            ...generateTextStyle(props.fontType, props.fontSize, props.fontWeight, props.color),
        },
        paragraphWrapper: {
            ...generateTextStyle(props.fontType, props.fontSize, props.fontWeight, props.color),
        },
        spanWrapper: {
            ...generateTextStyle(props.fontType, props.fontSize, props.fontWeight, props.color),
        },
    });

export default useStyles;
