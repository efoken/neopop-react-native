import * as React from 'react';
import { Pressable } from 'react-native';
import useLayout from '../../../hooks/useLayout';
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

    const { handleLayout, ...layout } = useLayout();

    const styles = useStyles({
        color,
        layout,
    });

    return (
        <Pressable style={[styles.linkButtonWrapper, style]} onLayout={handleLayout} {...props}>
            <Typography {...customTextStyle} color={color}>
                {children}
            </Typography>
        </Pressable>
    );
};

export default LinkButton;
