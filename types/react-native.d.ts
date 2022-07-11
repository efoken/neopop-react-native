import * as React from 'react';

declare module 'react-native' {
    export interface TextProps {
        dataSet?: Record<string, any>;
    }

    export interface TextStyle {
        caretColor?: React.CSSProperties['caretColor'];
        cursor?: React.CSSProperties['cursor'];
        outlineStyle?: React.CSSProperties['outlineStyle'];
        userSelect?: React.CSSProperties['userSelect'];
        willChange?: React.CSSProperties['willChange'];
    }

    export interface ViewStyle {
        transition?: React.CSSProperties['transition'];
    }
}
