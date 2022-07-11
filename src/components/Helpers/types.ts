import * as React from 'react';
import { GestureResponderEvent, ViewStyle } from 'react-native';

export interface RowProps {
    children?: React.ReactNode;
    h?: 'center';
    style?: ViewStyle;
    v?: 'center' | 'justify';
}

export interface ColumnProps {
    children?: React.ReactNode;
    h?: 'center';
    style?: ViewStyle;
    v?: 'center';
}

export interface HorizontalDividerProps {
    color?: string;
}

export interface HorizontalSpacerProps {
    n: number;
}

export interface VerticalSpacerProps {
    n: number;
}

export interface ChevronProps {
    color?: string;
    direction?: 'north' | 'south' | 'east' | 'west';
    style?: ViewStyle;
}

export interface PointerProps extends ChevronProps {
    size?: 'big' | 'medium' | 'small';
}

export interface CrossProps {
    color?: string;
    onPress: (event?: GestureResponderEvent) => void;
}
