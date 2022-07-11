import {
    NativeSyntheticEvent,
    StyleProp,
    TextInput,
    TextInputFocusEventData,
    TextInputProps,
    ViewStyle,
} from 'react-native';
import type { FontNameSpace } from '../../types';

export interface InputFieldColorConfig {
    caretColor?: string;
    errorColor?: string;
    labelColor?: string;
    placeholderColor?: string;
    textColor?: string;
}

export type InputFieldColorModes = 'dark' | 'light';

export interface InputFieldProps extends TextInputProps {
    colorConfig?: InputFieldColorConfig;
    colorMode?: InputFieldColorModes;
    errorMessage?: string;
    hasError?: boolean;
    inputMode?: 'text' | 'search' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'none';
    inputRef?: React.MutableRefObject<TextInput | null>;
    isDisabled?: boolean;
    label?: string;
    maxLength?: number;
    name?: string;
    nativeID?: string;
    onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onChange?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    placeholder?: string;
    scrollIntoView?: boolean;
    style?: StyleProp<ViewStyle>;
    tabIndex?: number;
    textStyle?: {
        input: FontNameSpace;
        label: FontNameSpace;
    };
    value?: any;
}
