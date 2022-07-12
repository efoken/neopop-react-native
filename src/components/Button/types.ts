import { ImageSourcePropType, PressableProps, StyleProp, ViewStyle } from 'react-native';
import type { FontNameSpace } from '../../types';

interface EdgeColors {
    bottom: string;
    left: string;
    right: string;
    top: string;
}

export type ButtonElevationDirections =
    | 'bottom-right'
    | 'top-right'
    | 'bottom-left'
    | 'top-left'
    | 'bottom-center'
    | 'top-center'
    | 'right-center'
    | 'left-center';

export type ButtonVariants = 'primary' | 'secondary';

export type ButtonKinds = 'flat' | 'elevated' | 'link';

export type ButtonSizes = 'big' | 'medium' | 'small';

export type ButtonColorModes = 'dark' | 'light';

export interface ButtonColorConfig {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    edgeColors?: EdgeColors;
    disabledColors?: {
        backgroundColor?: string;
        borderColor?: string;
        color?: string;
        edgeColors?: EdgeColors;
    };
}

export interface ButtonSpacingConfig {
    height?: number;
    iconHeight?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
}

export interface ButtonProps extends PressableProps {
    /**
     * use to render the center text or can pass any React Element
     */
    children?: React.ReactNode;
    color?: string;
    /**
     * object for taking in colors
     */
    colorConfig?: ButtonColorConfig;
    /**
     * mode of the button
     */
    colorMode?: ButtonColorModes;
    /**
     * if true, button is disabled
     */
    disabled?: boolean;
    /**
     * specifies the direction for an `elevated` button. this will decide which
     * plunk to hide or show when button is pressed.
     */
    elevationDirection?: ButtonElevationDirections;
    /**
     * flex the button to take full-width of the container
     */
    fullWidth?: boolean;
    /**
     * url for any image to be set, this aligns left to the text
     */
    icon?: ImageSourcePropType;
    /**
     * different kind of button
     */
    kind?: ButtonKinds;
    /**
     * arrow icon in the button
     */
    showArrow?: boolean;
    /**
     * used to decide the paddings, height, and typography style
     */
    size?: ButtonSizes;
    /**
     * object for taking in spacing details
     */
    spacingConfig?: ButtonSpacingConfig;
    /**
     * custom styles if any
     */
    style?: StyleProp<ViewStyle>;
    /**
     * text style - passes configs for `Typography`
     */
    textStyle?: FontNameSpace;
    /**
     * variant of `flat` or `elevated` button
     */
    variant?: ButtonVariants;
}
