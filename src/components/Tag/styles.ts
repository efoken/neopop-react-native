import { Platform, StyleSheet } from 'react-native';

const useStyles = () =>
    StyleSheet.create({
        tagContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            paddingBottom: 4,
            paddingHorizontal: 10,
            paddingTop: 5,
            ...(Platform.OS === 'web' && {
                display: 'inline-flex' as any,
            }),
        },
        tagIcon: {
            height: 10,
            minWidth: 10,
            width: 'auto',
        },
        tagIconContainer: {
            marginRight: 5,
        },
    });

export default useStyles;
