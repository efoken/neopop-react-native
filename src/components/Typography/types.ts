import { TextProps } from 'react-native';

export enum FontType {
    HEADING = 'heading',
    CAPS = 'caps',
    BODY = 'body',
    SERIF_HEADING = 'serif-heading',
}

export enum FontWeight {
    EXTRA_BOLD = '800',
    BOLD = '700',
    SEMI_BOLD = '600',
    MEDIUM = '500',
    REGULAR = '400',
    THIN = '300',
}

export enum FontOverflow {
    ELLIPSIS = 'ellipsis',
    CLIP = 'clip',
}

export enum FontOpacity {
    HEADING = 0.9,
    SUB_HEADING = 0.7,
    BODY_TEXT = 0.5,
    BODY_TEXT_LIGHTER = 0.3,
}

export interface TypographyProps extends TextProps {
    as?: 'p' | 'span';
    children: React.ReactNode;
    color?: string;
    fontSize: number;
    fontType: FontType;
    fontWeight: FontWeight;
    lineClamp?: number;
    overflow?: FontOverflow;
}
