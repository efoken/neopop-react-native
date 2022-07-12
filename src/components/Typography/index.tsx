import * as React from 'react';
import { Text } from 'react-native';
import useStyles from './styles';
import { FontType, TypographyProps } from './types';

const Typography: React.FC<TypographyProps> = ({
    as,
    children,
    color,
    fontSize,
    fontType,
    fontWeight,
    lineClamp,
    overflow,
    style,
    ...props
}) => {
    const styles = useStyles({ color, fontSize, fontType, fontWeight, lineClamp, overflow });

    switch (as) {
        case 'p':
            return (
                <Text
                    ellipsizeMode={overflow === 'ellipsis' ? 'tail' : overflow}
                    numberOfLines={overflow && (lineClamp ?? 1)}
                    style={[
                        styles.paragraphWrapper,
                        {
                            fontFamily:
                                fontType === FontType.SERIF_HEADING ? 'serif' : 'sans-serif',
                        },
                        style,
                    ]}
                    {...props}
                >
                    {children}
                </Text>
            );
        case 'span':
            return (
                <Text
                    ellipsizeMode={overflow === 'ellipsis' ? 'tail' : overflow}
                    numberOfLines={overflow && (lineClamp ?? 1)}
                    style={[
                        styles.spanWrapper,
                        {
                            fontFamily:
                                fontType === FontType.SERIF_HEADING ? 'serif' : 'sans-serif',
                        },
                        style,
                    ]}
                    {...props}
                >
                    {children}
                </Text>
            );
        default:
            return (
                <Text
                    ellipsizeMode={overflow === 'ellipsis' ? 'tail' : overflow}
                    numberOfLines={overflow && (lineClamp ?? 1)}
                    style={[
                        styles.typographyWrapper,
                        {
                            fontFamily:
                                fontType === FontType.SERIF_HEADING ? 'serif' : 'sans-serif',
                        },
                        style,
                    ]}
                    {...props}
                >
                    {children}
                </Text>
            );
    }
};

export default Typography;
