import { Platform, StyleSheet } from 'react-native';
import { PlunkProps } from '../../primitives';
import { ButtonElevationDirections, ButtonProps } from './types';

const EDGE_WIDTH = PlunkProps.WIDTH;
const SKEW_ANGLE = PlunkProps.ANGLE;

const shouldNotMoveRightEdge = (elevationDirection?: ButtonElevationDirections) =>
    elevationDirection === ButtonElevationDirections.lc ||
    elevationDirection === ButtonElevationDirections.rc ||
    elevationDirection === ButtonElevationDirections.tc ||
    elevationDirection === ButtonElevationDirections.tr ||
    elevationDirection === ButtonElevationDirections.tl;

const shouldNotMoveBottomEdge = (elevationDirection?: ButtonElevationDirections) =>
    elevationDirection === ButtonElevationDirections.lc ||
    elevationDirection === ButtonElevationDirections.tc ||
    elevationDirection === ButtonElevationDirections.bc ||
    elevationDirection === ButtonElevationDirections.bl ||
    elevationDirection === ButtonElevationDirections.tl;

const useStyles = (
    props: Pick<
        ButtonProps,
        | 'color'
        | 'colorConfig'
        | 'disabled'
        | 'elevationDirection'
        | 'fullWidth'
        | 'spacingConfig'
        | 'textStyle'
    >,
) =>
    StyleSheet.create({
        buttonWrapper: {
            backgroundColor: 'transparent',
            height: '100%',
            overflow: 'hidden',
            width: props.fullWidth ? '100%' : 'auto',
            ...(Platform.OS === 'web' && {
                cursor: 'pointer',
                display: props.fullWidth ? 'flex' : ('inline-flex' as any),
                outlineStyle: 'none',
                WebkitTapHighlightColor: 'transparent',
                userSelect: 'none',
                width: props.fullWidth ? '100%' : 'fit-content',
                willChange: 'transform',
            }),
        },
        buttonFace: {
            alignItems: 'center',
            backgroundColor: props.colorConfig?.backgroundColor ?? 'transparent',
            borderColor: props.colorConfig?.borderColor,
            borderWidth: props.colorConfig?.borderColor ? 1 : 0,
            flexDirection: 'row',
            height: props.spacingConfig?.height ?? 'auto',
            justifyContent: 'center',
            paddingHorizontal: props.spacingConfig?.paddingHorizontal ?? 20,
            paddingVertical: props.spacingConfig?.paddingVertical ?? 16,
            zIndex: 2,
            ...(Platform.OS === 'web' && {
                textAlign: 'center',
                transition: 'transform 0.12s ease-in-out',
            }),
            ...(props.disabled && {
                backgroundColor: props.colorConfig?.disabledColors?.backgroundColor,
                borderColor: props.colorConfig?.disabledColors?.borderColor,
                borderWidth: props.colorConfig?.disabledColors?.borderColor ? 1 : 0,
            }),
        },
        buttonFaceElevated: {
            marginBottom: EDGE_WIDTH,
            marginLeft: 0,
            marginRight: EDGE_WIDTH,
            marginTop: 0,
        },
        buttonFacePressed: {
            transform: props.disabled
                ? []
                : [
                      { translateX: EDGE_WIDTH },
                      { translateY: EDGE_WIDTH },
                      { translateZ: 0 } as any,
                  ],
        },
        icon: {
            height: props.spacingConfig?.iconHeight ?? 16,
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
            backgroundColor: props.disabled
                ? props.colorConfig?.disabledColors?.edgeColors?.right ?? 'transparent'
                : props.colorConfig?.edgeColors?.right ?? 'transparent',
            height: `calc(100% - ${EDGE_WIDTH}px)`,
            right: 0,
            top: 0,
            transform: [{ translateZ: 0 } as any, { skewY: '45deg' }],
            width: EDGE_WIDTH,
            zIndex: 2,
        },
        buttonEdgeRightPressed: {
            transform:
                props.disabled || shouldNotMoveBottomEdge(props.elevationDirection)
                    ? [{ skewY: `${SKEW_ANGLE}deg` }]
                    : [
                          { translateX: EDGE_WIDTH },
                          { translateY: EDGE_WIDTH },
                          { translateZ: 0 } as any,
                          { skewY: `${SKEW_ANGLE}deg` },
                      ],
        },
        buttonEdgeBottom: {
            backgroundColor: props.disabled
                ? props.colorConfig?.disabledColors?.edgeColors?.bottom ?? 'transparent'
                : props.colorConfig?.edgeColors?.bottom ?? 'transparent',
            bottom: 0,
            height: EDGE_WIDTH,
            left: 0,
            transform: [{ translateZ: 0 } as any, { skewX: '45deg' }],
            width: `calc(100% - ${EDGE_WIDTH}px)`,
            zIndex: 2,
        },
        buttonEdgeBottomPressed: {
            transform:
                props.disabled || shouldNotMoveRightEdge(props.elevationDirection)
                    ? [{ skewX: `${SKEW_ANGLE}deg` }]
                    : [
                          { translateX: EDGE_WIDTH },
                          { translateY: EDGE_WIDTH },
                          { translateZ: 0 } as any,
                          { skewX: `${SKEW_ANGLE}deg` },
                      ],
        },
        buttonEdgeTop: {
            backgroundColor: props.disabled
                ? props.colorConfig?.disabledColors?.edgeColors?.top ?? 'transparent'
                : props.colorConfig?.edgeColors?.top ?? 'transparent',
            height: EDGE_WIDTH,
            left: 0,
            top: 0,
            transform: [{ skewX: '45deg', scaleY: '1' }],
            width: `calc(100% - ${EDGE_WIDTH}px)`,
        },
        buttonEdgeLeft: {
            backgroundColor: props.disabled
                ? props.colorConfig?.disabledColors?.edgeColors?.left ?? 'transparent'
                : props.colorConfig?.edgeColors?.left ?? 'transparent',
            height: `calc(100% - ${EDGE_WIDTH}px)`,
            left: 0,
            top: 0,
            transform: [{ skewY: '45deg', scaleY: '1' }],
            width: EDGE_WIDTH,
            zIndex: 1,
        },
        linkButtonWrapper: {
            backgroundColor: 'transparent',
            borderBottomColor: props.color,
            borderBottomWidth: props.color ? 1 : 0,
            ...(Platform.OS === 'web' && {
                cursor: 'pointer',
                display: 'inline-flex' as any,
                outlineStyle: 'none',
                WebkitTapHighlightColor: 'transparent',
                userSelect: 'none',
            }),
        },
    });

export default useStyles;
