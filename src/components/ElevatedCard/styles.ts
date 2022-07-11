import { Platform, StyleSheet } from 'react-native';
import { PlunkProps } from '../../primitives';
import { CardProps } from './types';

const EDGE_WIDTH = PlunkProps.WIDTH;
const SKEW_ANGLE = PlunkProps.ANGLE;

const useStyles = (props: Pick<CardProps, 'backgroundColor' | 'edgeColors' | 'fullWidth'>) =>
    StyleSheet.create({
        cardFace: {
            backgroundColor: props.backgroundColor ?? 'transparent',
            marginBottom: EDGE_WIDTH,
            marginLeft: 0,
            marginRight: EDGE_WIDTH,
            marginTop: 0,
            width: '100%',
            zIndex: 1,
        },
        cardEdge: {
            position: 'absolute',
            ...(Platform.OS === 'web' && {
                transformOrigin: '0% 0%',
                transition: `transform ${EDGE_WIDTH / 100}s ease`,
            }),
        },
        cardEdgeRight: {
            backgroundColor: props.edgeColors?.right ?? 'transparent',
            height: `calc(100% - ${EDGE_WIDTH}px)`,
            right: 0,
            top: 0,
            width: EDGE_WIDTH,
            transform: [
                { translateX: 0 },
                { translateY: 0 },
                { translateZ: 0 } as any,
                { skewY: `${SKEW_ANGLE}deg` },
            ],
        },
        cardEdgeBottom: {
            backgroundColor: props.edgeColors?.bottom ?? 'transparent',
            bottom: 0,
            height: EDGE_WIDTH,
            left: 0,
            transform: [
                { translateX: 0 },
                { translateY: 0 },
                { translateZ: 0 } as any,
                { skewX: `${SKEW_ANGLE}deg` },
            ],
            width: `calc(100% - ${EDGE_WIDTH}px)`,
        },
        cardContainer: {
            overflow: 'hidden',
            width: '100%',
            ...(Platform.OS === 'web' && {
                display: props.fullWidth ? ('block' as any) : ('inline-flex' as any),
                userSelect: 'none',
            }),
        },
    });

export default useStyles;
