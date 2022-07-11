import * as React from 'react';
import { Image, View } from 'react-native';
import { typographyGuide } from '../../primitives';
import { getTagColors } from '../../primitives/tags';
import { isEmpty } from '../../utils';
import Typography from '../Typography';
import useStyles from './styles';
import { TagProps } from './types';

const Tag: React.FC<TagProps> = ({
    children,
    colorConfig,
    colorMode = 'dark',
    icon,
    noContainer = false,
    style,
    textStyle,
    type = 'success',
}) => {
    const defaultColorConfig = getTagColors(type, colorMode);
    const colors = isEmpty(colorConfig) ? defaultColorConfig : colorConfig ?? defaultColorConfig;

    const styles = useStyles();

    if (noContainer) {
        return (
            <Typography
                {...(textStyle ?? typographyGuide.tags.noContainerText)}
                as="span"
                color={colors.color}
            >
                {children}
            </Typography>
        );
    }

    return (
        <View style={[styles.tagContainer, { backgroundColor: colors.background }, style]}>
            {icon ? (
                <View style={styles.tagIconContainer}>
                    <Image source={icon} style={styles.tagIcon} />
                </View>
            ) : null}
            <Typography {...(textStyle ?? typographyGuide.tags.containerText)} color={colors.color}>
                {children}
            </Typography>
        </View>
    );
};

export default Tag;
