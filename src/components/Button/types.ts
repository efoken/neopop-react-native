import { ImageSourcePropType, PressableProps } from 'react-native';
import type { FontNameSpace } from '../../types';

interface EdgeColors {
    bottom: string;
    left: string;
    right: string;
    top: string;
}

export enum ButtonElevationDirections {
    br = 'bottom-right',
    tr = 'top-right',
    bl = 'bottom-left',
    tl = 'top-left',
    bc = 'bottom-center',
    tc = 'top-center',
    rc = 'right-center',
    lc = 'left-center',
}

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
    children?: React.ReactNode;
    color?: string;
    colorConfig?: ButtonColorConfig;
    colorMode?: ButtonColorModes;
    disabled?: boolean;
    elevationDirection?: ButtonElevationDirections;
    fullWidth?: boolean;
    icon?: ImageSourcePropType;
    kind?: ButtonKinds;
    showArrow?: boolean;
    size?: ButtonSizes;
    spacingConfig?: ButtonSpacingConfig;
    textStyle?: FontNameSpace;
    variant?: ButtonVariants;
}
