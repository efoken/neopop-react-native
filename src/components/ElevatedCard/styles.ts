import * as React from 'react';
import { LayoutRectangle, Platform, StyleSheet } from 'react-native';
import { PlunkProps } from '../../primitives';
import { getTransform } from '../../utils';
import { CardProps } from './types';

const EDGEWIDTH = PlunkProps.WIDTH;
const SKEW_ANGLE = PlunkProps.ANGLE;

type CardStyleType = Pick<CardProps, 'backgroundColor' | 'edgeColors' | 'fullWidth'> & {
    layout: LayoutRectangle;
};

const useStyles = ({ backgroundColor, edgeColors, fullWidth, layout }: CardStyleType) =>
    React.useMemo(
        () =>
            StyleSheet.create({
                cardFace: {
                    backgroundColor: backgroundColor ?? 'transparent',
                    marginBottom: EDGEWIDTH,
                    marginLeft: 0,
                    marginRight: EDGEWIDTH,
                    marginTop: 0,
                    zIndex: 1,
                },
                cardEdge: {
                    position: 'absolute',
                    ...(Platform.OS === 'web' && {
                        transformOrigin: '0% 0%',
                        transition: `transform ${EDGEWIDTH / 100}s ease`,
                    }),
                },
                cardEdgeRight: {
                    backgroundColor: edgeColors?.right ?? 'transparent',
                    height:
                        Platform.OS === 'web'
                            ? `calc(100% - ${EDGEWIDTH}px)`
                            : layout.height - EDGEWIDTH / 2,
                    right: 0,
                    top: 0,
                    width: EDGEWIDTH,
                    transform: getTransform([
                        { translateX: 0 },
                        { translateY: 0 },
                        { translateZ: 0 },
                        { skewY: `${SKEW_ANGLE}deg` },
                    ]),
                },
                cardEdgeBottom: {
                    backgroundColor: edgeColors?.bottom ?? 'transparent',
                    bottom: 0,
                    height: EDGEWIDTH,
                    left: 0,
                    transform: getTransform([
                        { translateX: 0 },
                        { translateY: 0 },
                        { translateZ: 0 },
                        { skewX: `${SKEW_ANGLE}deg` },
                    ]),
                    width:
                        Platform.OS === 'web'
                            ? `calc(100% - ${EDGEWIDTH}px)`
                            : layout.width - EDGEWIDTH / 2,
                },
                cardContainer: {
                    overflow: 'hidden',
                    width: '100%',
                    ...(Platform.OS === 'web' && {
                        display: fullWidth ? ('block' as any) : ('inline-flex' as any),
                        userSelect: 'none',
                    }),
                },
            }),
        [backgroundColor, edgeColors, fullWidth, layout],
    );

export default useStyles;
