import * as React from 'react';

declare module 'react-native' {
    export interface TextProps {
        dataSet?: Record<string, any>;
    }

    export interface TextStyle {
        caretColor?: React.CSSProperties['caretColor'];
    }

    export interface ViewStyle {
        cursor?: React.CSSProperties['cursor'];
        outlineStyle?: React.CSSProperties['outlineStyle'];
        WebkitTapHighlightColor?: React.CSSProperties['WebkitTapHighlightColor'];
        transition?: React.CSSProperties['transition'];
        transformOrigin?: React.CSSProperties['transformOrigin'];
        userSelect?: React.CSSProperties['userSelect'];
        willChange?: React.CSSProperties['willChange'];
    }
}
