import * as React from 'react';
import { LayoutRectangle, Platform, StyleSheet } from 'react-native';
import { PlunkProps } from '../../primitives';
import { getTransform } from '../../utils';
import { ButtonElevationDirections, ButtonProps } from './types';

const EDGEWIDTH = PlunkProps.WIDTH;
const SKEW_ANGLE = PlunkProps.ANGLE;

const shouldNotMoveRightEdge = (elevationDirection?: ButtonElevationDirections) =>
    elevationDirection === 'left-center' ||
    elevationDirection === 'right-center' ||
    elevationDirection === 'top-center' ||
    elevationDirection === 'top-right' ||
    elevationDirection === 'top-left';

const shouldNotMoveBottomEdge = (elevationDirection?: ButtonElevationDirections) =>
    elevationDirection === 'left-center' ||
    elevationDirection === 'top-center' ||
    elevationDirection === 'bottom-center' ||
    elevationDirection === 'bottom-left' ||
    elevationDirection === 'top-left';

type ButtonStyleType = Pick<
    ButtonProps,
    'color' | 'colorConfig' | 'disabled' | 'elevationDirection' | 'fullWidth' | 'spacingConfig'
> & {
    layout: LayoutRectangle;
};

const useStyles = ({
    color,
    colorConfig,
    disabled,
    elevationDirection,
    fullWidth,
    layout,
    spacingConfig,
}: ButtonStyleType) =>
    React.useMemo(
        () =>
            StyleSheet.create({
                buttonWrapper: {
                    backgroundColor: 'transparent',
                    overflow: 'hidden',
                    width: fullWidth ? '100%' : 'auto',
                    ...(Platform.OS === 'web' && {
                        cursor: 'pointer',
                        display: fullWidth ? 'flex' : ('inline-flex' as any),
                        height: '100%',
                        outlineStyle: 'none',
                        userSelect: 'none',
                        WebkitTapHighlightColor: 'transparent',
                        width: fullWidth ? '100%' : 'fit-content',
                        willChange: 'transform',
                    }),
                },
                buttonFace: {
                    alignItems: 'center',
                    backgroundColor: colorConfig?.backgroundColor ?? 'transparent',
                    borderColor: colorConfig?.borderColor,
                    borderWidth: colorConfig?.borderColor ? 1 : 0,
                    flexDirection: 'row',
                    height: spacingConfig?.height ?? 'auto',
                    justifyContent: 'center',
                    paddingHorizontal: spacingConfig?.paddingHorizontal ?? 20,
                    paddingVertical: spacingConfig?.paddingVertical ?? 16,
                    zIndex: 2,
                    ...(Platform.OS === 'web' && {
                        textAlign: 'center',
                        transition: 'transform 0.12s ease-in-out',
                    }),
                    ...(disabled && {
                        backgroundColor: colorConfig?.disabledColors?.backgroundColor,
                        borderColor: colorConfig?.disabledColors?.borderColor,
                        borderWidth: colorConfig?.disabledColors?.borderColor ? 1 : 0,
                    }),
                },
                buttonFaceElevated: {
                    marginBottom: EDGEWIDTH,
                    marginLeft: 0,
                    marginRight: EDGEWIDTH,
                    marginTop: 0,
                },
                buttonFacePressed: {
                    transform: disabled
                        ? []
                        : getTransform([
                              { translateX: EDGEWIDTH },
                              { translateY: EDGEWIDTH },
                              { translateZ: 0 },
                          ]),
                },
                icon: {
                    height: spacingConfig?.iconHeight ?? 16,
                    marginRight: 1,
                    width: 'auto',
                },
                arrow: {
                    marginLeft: 10,
                },
                buttonEdge: {
                    position: 'absolute',
                    ...(Platform.OS === 'web' && {
                        transformOrigin: '0% 0%',
                        transition: 'transform 0.12s ease-in-out',
                    }),
                },
                buttonEdgeRight: {
                    backgroundColor: disabled
                        ? colorConfig?.disabledColors?.edgeColors?.right ?? 'transparent'
                        : colorConfig?.edgeColors?.right ?? 'transparent',
                    height:
                        Platform.OS === 'web'
                            ? `calc(100% - ${EDGEWIDTH}px)`
                            : layout.height - EDGEWIDTH / 2,
                    right: 0,
                    top: 0,
                    transform: getTransform([{ translateZ: 0 }, { skewY: '45deg' }]),
                    width: EDGEWIDTH,
                    zIndex: 2,
                },
                buttonEdgeRightPressed: {
                    transform:
                        disabled || shouldNotMoveBottomEdge(elevationDirection)
                            ? [{ skewY: `${SKEW_ANGLE}deg` }]
                            : getTransform([
                                  { translateX: EDGEWIDTH },
                                  { translateY: EDGEWIDTH },
                                  { translateZ: 0 },
                                  { skewY: `${SKEW_ANGLE}deg` },
                              ]),
                },
                buttonEdgeBottom: {
                    backgroundColor: disabled
                        ? colorConfig?.disabledColors?.edgeColors?.bottom ?? 'transparent'
                        : colorConfig?.edgeColors?.bottom ?? 'transparent',
                    bottom: 0,
                    height: EDGEWIDTH,
                    left: 0,
                    transform: getTransform([{ translateZ: 0 }, { skewX: '45deg' }]),
                    width:
                        Platform.OS === 'web'
                            ? `calc(100% - ${EDGEWIDTH}px)`
                            : layout.width - EDGEWIDTH / 2,
                    zIndex: 2,
                },
                buttonEdgeBottomPressed: {
                    transform:
                        disabled || shouldNotMoveRightEdge(elevationDirection)
                            ? [{ skewX: `${SKEW_ANGLE}deg` }]
                            : getTransform([
                                  { translateX: EDGEWIDTH },
                                  { translateY: EDGEWIDTH },
                                  { translateZ: 0 },
                                  { skewX: `${SKEW_ANGLE}deg` },
                              ]),
                },
                buttonEdgeTop: {
                    backgroundColor: disabled
                        ? colorConfig?.disabledColors?.edgeColors?.top ?? 'transparent'
                        : colorConfig?.edgeColors?.top ?? 'transparent',
                    height: EDGEWIDTH,
                    left: 0,
                    top: 0,
                    transform: [{ skewX: '45deg' }, { scaleY: 1 }],
                    width:
                        Platform.OS === 'web'
                            ? `calc(100% - ${EDGEWIDTH}px)`
                            : layout.width - EDGEWIDTH / 2,
                },
                buttonEdgeLeft: {
                    backgroundColor: disabled
                        ? colorConfig?.disabledColors?.edgeColors?.left ?? 'transparent'
                        : colorConfig?.edgeColors?.left ?? 'transparent',
                    height:
                        Platform.OS === 'web'
                            ? `calc(100% - ${EDGEWIDTH}px)`
                            : layout.height - EDGEWIDTH / 2,
                    left: 0,
                    top: 0,
                    transform: [{ skewY: '45deg' }, { scaleY: 1 }],
                    width: EDGEWIDTH,
                    zIndex: 1,
                },
                linkButtonWrapper: {
                    backgroundColor: 'transparent',
                    borderBottomColor: color,
                    borderBottomWidth: color ? 1 : 0,
                    ...(Platform.OS === 'web' && {
                        cursor: 'pointer',
                        display: 'inline-flex' as any,
                        outlineStyle: 'none',
                        WebkitTapHighlightColor: 'transparent',
                        userSelect: 'none',
                    }),
                },
            }),
        [color, colorConfig, disabled, elevationDirection, fullWidth, layout, spacingConfig],
    );

export default useStyles;
