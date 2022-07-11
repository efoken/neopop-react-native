import {
    ButtonColorModes,
    ButtonKinds,
    ButtonSizes,
    ButtonSpacingConfig,
    ButtonVariants,
} from '../components/Button/types';
import { colorGuide } from './colors';
import { typographyGuide } from './typography';

export const getButtonColors = (
    mode: ButtonColorModes,
    variant: ButtonVariants,
    kind: ButtonKinds,
) => {
    const colors =
        mode === 'dark' ? colorGuide.darkComponents.buttons : colorGuide.lightComponents.buttons;

    const transparentEdge =
        kind === 'elevated'
            ? {
                  top: 'transparent',
                  left: 'transparent',
              }
            : {};

    return variant === 'primary'
        ? {
              ...colors.primary,
              mode,
              edgeColors: { ...colors.primary.edgeColors, ...transparentEdge },
          }
        : {
              ...colors.secondary,
              mode,
              edgeColors: { ...colors.secondary.edgeColors, ...transparentEdge },
          };
};

const getSize = (number: string) => {
    switch (number) {
        case '50':
            return 'big';
        case '40':
            return 'medium';
        case '30':
            return 'small';
        default:
            return 'medium';
    }
};

export const getSpacingConfig = (size: ButtonSizes): ButtonSpacingConfig => {
    switch (size) {
        case 'big':
            return {
                height: 50,
                iconHeight: 20,
                paddingHorizontal: 30,
                paddingVertical: 0,
            };
        case 'medium':
            return {
                height: 40,
                iconHeight: 16,
                paddingHorizontal: 20,
                paddingVertical: 0,
            };
        case 'small':
            return {
                height: 30,
                iconHeight: 14,
                paddingHorizontal: 25,
                paddingVertical: 0,
            };
        default:
            return {
                height: 40,
                iconHeight: 16,
                paddingHorizontal: 20,
                paddingVertical: 0,
            };
    }
};

export const getTextStyle = (size: ButtonSizes) => {
    switch (size) {
        case 'big':
            return typographyGuide.buttons.big;
        case 'medium':
            return typographyGuide.buttons.medium;
        case 'small':
            return typographyGuide.buttons.small;
        default:
            return typographyGuide.buttons.medium;
    }
};

export const getButtonConfig = (name: string) => {
    const colorMode = name.slice(1, 2) === 'l' ? 'light' : 'dark';
    const variant = name.slice(2, 3) === 's' ? 'secondary' : 'primary';
    const size = name.slice(3, 5);
    const kind = name.slice(5, 6) === 'p' ? 'elevated' : 'flat';
    const arrow = name.slice(6, 7);
    return {
        colorConfig: getButtonColors(colorMode, variant, kind),
        spacingConfig: getSpacingConfig(getSize(size)),
        colorMode,
        size,
        kind,
        variant,
        showArrow: Boolean(Number(arrow)),
    };
};
