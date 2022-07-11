import { ImageSourcePropType } from 'react-native';
import type { FontNameSpace } from '../../types';
import { InputFieldColorConfig } from '../InputField/types';

export interface SearchBarColorConfig {
    activeBorder: string;
    backgroundColor: string;
    border: string;
    closeIcon: string;
}

export type SearchBarColorModes = 'dark' | 'light';

export interface SearchBarProps {
    /**
     * search container color config
     */
    colorConfig?: SearchBarColorConfig;
    /**
     * dark or light
     */
    colorMode?: SearchBarColorModes;
    /**
     * url of icon inside input field
     */
    icon?: ImageSourcePropType;
    /**
     * input field color config
     */
    inputFieldColorConfig?: InputFieldColorConfig;
    /**
     * onChange event handler
     */
    onSearchInput: (value: string) => void;
    /**
     * onSubmit event handler
     */
    onSubmit?: () => void;
    /**
     * input field placeholder
     */
    placeholder?: string;
    /**
     * font styles to be used for the input text field
     */
    textStyle?: FontNameSpace;
}
