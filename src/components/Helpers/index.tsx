import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { mainColors } from '../../primitives';
import { hexToRGBA } from '../../utils';
import {
    ChevronProps,
    ColumnProps,
    CrossProps,
    HorizontalDividerProps,
    HorizontalSpacerProps,
    PointerProps,
    RowProps,
    VerticalSpacerProps,
} from './types';

export const Row = React.forwardRef<View, RowProps>(({ h, style, v, ...props }, ref) => (
    <View
        ref={ref}
        style={[
            {
                flexDirection: 'row',
                ...(h === 'center' && {
                    alignItems: 'center',
                }),
                ...(v === 'center' && {
                    justifyContent: 'center',
                }),
                ...(v === 'justify' && {
                    justifyContent: 'space-between',
                }),
            },
            style,
        ]}
        {...props}
    />
));

export const Column = React.forwardRef<View, ColumnProps>(({ h, style, v, ...props }, ref) => (
    <View
        ref={ref}
        style={[
            {
                flexDirection: 'column',
                ...(v === 'center' && {
                    alignItems: 'center',
                }),
                ...(h === 'center' && {
                    justifyContent: 'center',
                }),
            },
            style,
        ]}
        {...props}
    />
));

export const HorizontalDivider: React.FC<HorizontalDividerProps> = ({ color }) => (
    <View
        style={{
            backgroundColor: color ?? hexToRGBA(mainColors.white, 0.1),
            height: 1,
            margin: 0,
            position: 'relative',
            width: '100%',
        }}
    />
);

export const HorizontalSpacer: React.FC<HorizontalSpacerProps> = ({ n }) => (
    <View style={{ marginBottom: n * 5 }} />
);

export const VerticalSpacer: React.FC<VerticalSpacerProps> = ({ n }) => (
    <View style={{ marginRight: n * 5 }} />
);

const rotateDegrees = {
    north: '-90deg',
    south: '90deg',
    east: '0deg',
    west: '180deg',
};

export const Chevron: React.FC<ChevronProps> = ({
    color = mainColors.white,
    direction = 'east',
    style,
}) => (
    <Svg
        style={[{ transform: [{ rotate: rotateDegrees[direction] }] }, style]}
        width={8}
        height={11}
        viewBox="0 0 8 11"
        fill="none"
    >
        <Path d="M2 9.5L6 5.5L2 1.5" stroke={color} strokeWidth={1.5} strokeLinecap="square" />
    </Svg>
);

export const Pointer: React.FC<PointerProps> = ({
    color = mainColors.white,
    direction = 'east',
    size = 'medium',
    style,
}) =>
    size === 'small' ? (
        <Svg
            style={[{ transform: [{ rotate: rotateDegrees[direction] }] }, style]}
            width={13}
            height={9}
            viewBox="0 0 13 9"
            fill="none"
        >
            <Path
                d="M1 3.74996H0.25V5.24996H1V3.74996ZM1 5.24996H11.9997V3.74996H1V5.24996ZM8.37874 0.5C8.37874 3.09998 10.4246 5.25 12.9997 5.25V3.75C11.299 3.75 9.87874 2.31829 9.87874 0.5L8.37874 0.5ZM12.9997 3.75C10.4246 3.75 8.37865 5.89999 8.37865 8.5H9.87865C9.87865 6.68173 11.299 5.25 12.9997 5.25V3.75Z"
                fill={color}
            />
        </Svg>
    ) : (
        <Svg
            style={[{ transform: [{ rotate: rotateDegrees[direction] }] }, style]}
            width={21}
            height={9}
            viewBox="0 0 21 9"
            fill="none"
        >
            <Path
                d="M1 3.74996H0.25L0.25 5.24996L1 5.24996L1 3.74996ZM1 5.24996L20 5.24996V3.74996L1 3.74996L1 5.24996ZM16.379 0.5C16.379 3.09998 18.4249 5.25 21 5.25V3.75C19.2993 3.75 17.879 2.3183 17.879 0.5L16.379 0.5ZM21 3.75C18.4249 3.75 16.3789 5.89999 16.3789 8.5H17.8789C17.8789 6.68172 19.2993 5.25 21 5.25V3.75Z"
                fill={color}
            />
        </Svg>
    );

export const Cross: React.FC<CrossProps> = ({ color = mainColors.white, onPress }) => (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" onPress={onPress}>
        <Path d="M2 10L6 6L2 2" stroke={color} strokeWidth={1.5} strokeLinecap="square" />
        <Path d="M10 10L6 6L10 2" stroke={color} strokeWidth={1.5} strokeLinecap="square" />
    </Svg>
);
