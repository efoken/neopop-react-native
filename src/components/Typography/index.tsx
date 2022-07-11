import * as React from 'react';
import { Text } from 'react-native';
import useStyles from './styles';
import { FontType, TypographyProps } from './types';

const Typography: React.FC<TypographyProps> = ({ as, children, style, ...props }) => {
    const styles = useStyles(props);

    switch (as) {
        case 'p':
            return (
                <Text
                    dataSet={{
                        font: props.fontType === FontType.SERIF_HEADING ? 'serif' : 'sans-serif',
                    }}
                    style={[styles.paragraphWrapper, style]}
                    {...props}
                >
                    {children}
                </Text>
            );
        case 'span':
            return (
                <Text
                    dataSet={{
                        font: props.fontType === FontType.SERIF_HEADING ? 'serif' : 'sans-serif',
                    }}
                    style={[styles.spanWrapper, style]}
                    {...props}
                >
                    {children}
                </Text>
            );
        default:
            return (
                <Text
                    dataSet={{
                        font: props.fontType === FontType.SERIF_HEADING ? 'serif' : 'sans-serif',
                    }}
                    style={[styles.typographyWrapper, style]}
                    {...props}
                >
                    {children}
                </Text>
            );
    }
};

export default Typography;
