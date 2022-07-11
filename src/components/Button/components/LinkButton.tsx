import * as React from 'react';
import { Pressable } from 'react-native';
import { fontVariant } from '../../../primitives';
import Typography from '../../Typography';
import useStyles from '../styles';
import { ButtonProps } from '../types';

const LinkButton: React.FC<ButtonProps> = ({
    children,
    color,
    colorConfig,
    colorMode,
    elevationDirection,
    fullWidth,
    icon,
    kind,
    showArrow,
    size,
    spacingConfig,
    style,
    textStyle,
    variant,
    ...props
}) => {
    const customTextStyle = textStyle ?? fontVariant.BodyMedium11;

    const styles = useStyles({
        color,
    });

    return (
        <Pressable style={[styles.linkButtonWrapper, style]} {...props}>
            <Typography {...customTextStyle} color={color}>
                {children}
            </Typography>
        </Pressable>
    );
};

export default LinkButton;
