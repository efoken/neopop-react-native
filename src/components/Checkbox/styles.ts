import { Platform, StyleSheet } from 'react-native';
import { PlunkProps } from '../../primitives';
import { CheckboxProps } from './types';

const BOX_SIZE = 20;

const useStyles = (props: Pick<CheckboxProps, 'children' | 'colorConfig' | 'isChecked'>) =>
    StyleSheet.create({
        checkboxLabel: {
            width: BOX_SIZE,
            height: BOX_SIZE,
            overflow: 'hidden',
            ...(Platform.OS === 'web' && {
                cursor: 'pointer',
                display: 'inline' as any,
                WebkitTapHighlightColor: 'transparent',
                transition: 'transform 0.15s ease',
                userSelect: 'none',
            }),
        },
        checkmarkWrapper: {
            height: 20,
            overflow: 'hidden',
            width: 20,
        },
        checkmarkWrapperBefore: {
            backgroundColor: props.colorConfig?.topPlunk,
            height: PlunkProps.WIDTH,
            left: 0,
            opacity: 0,
            position: 'absolute',
            top: 0,
            transform: [{ skewX: `${PlunkProps.ANGLE}deg` }, { scaleY: 1 }],
            width: 20,
            ...(Platform.OS === 'web' && {
                transformOrigin: '0% 0%',
                transition: 'background-color 0.15s ease',
            }),
        },
        checkmarkWrapperAfter: {
            backgroundColor: props.colorConfig?.leftPlunk,
            bottom: 0,
            height: 20,
            left: 0,
            opacity: 0,
            position: 'absolute',
            transform: [{ skewY: `${PlunkProps.ANGLE}deg` }, { scaleX: 1 }],
            width: PlunkProps.WIDTH,
            ...(Platform.OS === 'web' && {
                transformOrigin: '0% 0%',
                transition: 'background-color 0.15s ease',
            }),
        },
        checkmarkWrapperPressedBefore: {
            opacity: 1,
            ...(Platform.OS === 'web' && {
                transition: 'opacity 0.1s ease 0.03s',
            }),
        },
        checkmarkWrapperPressedAfter: {
            opacity: 1,
            ...(Platform.OS === 'web' && {
                transition: 'opacity 0.1s ease 0.03s',
            }),
        },
        checkmark: {
            backgroundColor: props.isChecked
                ? props.colorConfig?.border
                : props.colorConfig?.background,
            alignItems: 'center',
            borderColor: props.colorConfig?.border,
            borderWidth: 1,
            height: BOX_SIZE,
            justifyContent: 'center',
            position: 'absolute',
            width: BOX_SIZE,
            zIndex: 999,
            ...(Platform.OS === 'web' && {
                cursor: 'pointer',
                transition: 'all 0.15s ease',
            }),
        },
        checkmarkPressed: {
            backgroundColor: props.colorConfig?.border,
            transform: [{ translateX: PlunkProps.WIDTH }, { translateY: PlunkProps.WIDTH }],
        },
        tickSvg: {
            opacity: props.isChecked ? 1 : 0,
            ...(Platform.OS === 'web' && {
                transition: 'opacity 0.15s ease',
            }),
        },
    });

export default useStyles;
