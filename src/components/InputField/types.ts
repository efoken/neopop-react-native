import {
    KeyboardTypeOptions,
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
    /**
     * specifies that an element should automatically get focus when the page
     * loads
     */
    autoFocus?: boolean;
    /**
     * can be used for passing additional color configurations
     */
    colorConfig?: InputFieldColorConfig;
    /**
     * dark or light
     */
    colorMode?: InputFieldColorModes;
    /**
     * defines error message
     */
    errorMessage?: string;
    /**
     * specifies error state
     */
    hasError?: boolean;
    /**
     * ref attribute for input field
     */
    inputRef?: React.MutableRefObject<TextInput | null>;
    /**
     * disable state
     */
    isDisabled?: boolean;
    /**
     * allows browser to display an appropriate virtual keyboard
     */
    keyboardType?: KeyboardTypeOptions;
    /**
     * specifies caption for the element
     */
    label?: string;
    /**
     * specifies the maximum value
     */
    maxLength?: number;
    /**
     * specifies the name
     */
    name?: string;
    /**
     * the unique identifier for this field
     */
    nativeID?: string;
    /**
     * event when an element loses focus
     */
    onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    /**
     * event when the user commits a value change to a form control
     */
    onChange?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    /**
     * event when the user sets focus on an element
     */
    onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    /**
     * defines placeholder for the field
     */
    placeholder?: string;
    scrollIntoView?: boolean;
    /**
     * for inline styles
     */
    style?: StyleProp<ViewStyle>;
    /**
     * indicates the element can be focused, and participates in sequential
     * keyboard navigation
     */
    tabIndex?: number;
    /**
     * can be used for passing font styles for label and input
     */
    textStyle?: {
        input: FontNameSpace;
        label: FontNameSpace;
    };
    /**
     * specifies the value of an element
     */
    value?: any;
}
