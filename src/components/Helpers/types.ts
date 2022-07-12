import * as React from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export interface RowProps {
    children?: React.ReactNode;
    h?: 'center';
    style?: StyleProp<ViewStyle>;
    v?: 'center' | 'justify';
}

export interface ColumnProps {
    children?: React.ReactNode;
    h?: 'center';
    style?: StyleProp<ViewStyle>;
    v?: 'center';
}

export interface PageContainerProps {
    style?: StyleProp<ViewStyle>;
}

export interface HorizontalDividerProps {
    /**
     * divider color
     * @default 'rgba(255, 255, 255, 0.1)'
     */
    color?: string;
}

export interface HorizontalSpacerProps {
    /**
     * padding multiplier
     */
    n: number;
}

export interface VerticalSpacerProps {
    /**
     * padding multiplier
     */
    n: number;
}

export interface ChevronProps {
    /**
     * chevron icon color
     */
    color?: string;
    /**
     * chevron direction
     */
    direction?: 'north' | 'south' | 'east' | 'west';
    /**
     * inline style
     */
    style?: StyleProp<ViewStyle>;
}

export interface PointerProps {
    /**
     * pointer icon color
     */
    color?: string;
    /**
     * pointer direction
     */
    direction?: 'north' | 'south' | 'east' | 'west';
    /**
     * pointer size
     */
    size?: 'big' | 'medium' | 'small';
    /**
     * inline style
     */
    style?: StyleProp<ViewStyle>;
}

export interface CrossProps {
    /**
     * cross icon color
     */
    color?: string;
    /**
     * onPress event handler
     */
    onPress: (event?: GestureResponderEvent) => void;
}
