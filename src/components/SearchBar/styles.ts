import { Platform, StyleSheet } from 'react-native';
import { SearchBarProps } from './types';

const useStyles = (props: Pick<SearchBarProps, 'colorConfig'>) =>
    StyleSheet.create({
        container: {
            alignItems: 'center',
            backgroundColor: props.colorConfig?.backgroundColor,
            borderColor: props.colorConfig?.border,
            borderWidth: props.colorConfig?.border ? 1 : 0,
            flexDirection: 'row',
            paddingHorizontal: 15,
            paddingVertical: 11,
            ...(Platform.OS === 'web' && {
                outlineStyle: 'none',
            }),
        },
        containerActive: {
            borderColor: props.colorConfig?.activeBorder,
        },
        icon: {
            height: 16,
            marginRight: 10,
            minWidth: 16,
            width: 'auto',
        },
        input: {
            flexShrink: 1,
            width: '100%',
        },
    });

export default useStyles;
