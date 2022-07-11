import { Platform, StyleSheet } from 'react-native';
import { generateTextStyle } from '../../utils';
import { InputFieldProps } from './types';

const useStyles = (props: Pick<InputFieldProps, 'colorConfig' | 'textStyle'>) =>
    StyleSheet.create({
        container: {},
        input: {
            ...generateTextStyle(
                props.textStyle?.input.fontType,
                props.textStyle?.input.fontSize,
                props.textStyle?.input.fontWeight,
                props.colorConfig?.textColor,
            ),
            backgroundColor: 'transparent',
            maxWidth: '100%',
            ...(Platform.OS === 'web' && {
                caretColor: props.colorConfig?.caretColor,
                display: 'block' as any,
                outlineStyle: 'none',
            }),
        },
        label: {
            marginBottom: 10,
            ...(Platform.OS === 'web' && {
                textAlign: 'left',
            }),
        },
    });

export default useStyles;
