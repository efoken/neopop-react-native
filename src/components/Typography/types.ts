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

export type FontOverflow = 'ellipsis' | 'clip';

export enum FontOpacity {
    HEADING = 0.9,
    SUB_HEADING = 0.7,
    BODY_TEXT = 0.5,
    BODY_TEXT_LIGHTER = 0.3,
}

export interface TypographyProps extends TextProps {
    /**
     * as paragraph/span
     */
    as?: 'p' | 'span';
    /**
     * text content
     */
    children: React.ReactNode;
    /**
     * text color
     */
    color?: string;
    /**
     * font size
     */
    fontSize: number;
    /**
     * typography variant
     */
    fontType: FontType;
    /**
     * font weight
     */
    fontWeight: FontWeight;
    /**
     * line-clamp to truncate text at a specific number of lines
     */
    lineClamp?: number;
    /**
     * text overflow
     */
    overflow?: FontOverflow;
}
