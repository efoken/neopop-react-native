import * as React from 'react';
import { ViewProps } from 'react-native';

export interface CheckboxColorConfig {
    background: string;
    border: string;
    leftPlunk: string;
    topPlunk: string;
}

export type CheckboxColorModes = 'dark' | 'light';

export interface CheckboxProps extends ViewProps {
    children?: React.ReactNode;
    /**
     * checkbox color config
     */
    colorConfig?: CheckboxColorConfig;
    /**
     * dark or light
     */
    colorMode?: CheckboxColorModes;
    /**
     * if true, the component is checked
     */
    isChecked: boolean;
    name?: string;
    /**
     * onChange event handler
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
