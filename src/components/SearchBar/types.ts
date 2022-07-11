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
    colorConfig?: SearchBarColorConfig;
    colorMode?: SearchBarColorModes;
    icon?: ImageSourcePropType;
    inputFieldColorConfig?: InputFieldColorConfig;
    onSearchInput: (value: string) => void;
    onSubmit?: () => void;
    placeholder?: string;
    textStyle?: FontNameSpace;
}
