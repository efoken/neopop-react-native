import * as React from 'react';
import { View } from 'react-native';
import { mainColors, typographyGuide } from '../../primitives';
import Back from '../Back';
import { Column } from '../Helpers';
import Typography from '../Typography';
import { FontOpacity } from '../Typography/types';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({
    color,
    description,
    heading,
    onBackPress,
    textStyle = {
        heading: typographyGuide.header.heading,
        description: typographyGuide.header.description,
    },
}) => {
    const fallbackColor = color ?? mainColors.white;

    return (
        <Column>
            <Back color={fallbackColor} onPress={onBackPress} />
            {heading && (
                <View style={{ paddingTop: 10 }}>
                    <Typography
                        {...textStyle.heading}
                        color={fallbackColor}
                        style={{ maxWidth: '75%', opacity: FontOpacity.HEADING }}
                    >
                        {heading}
                    </Typography>
                </View>
            )}
            {description && (
                <View style={{ paddingTop: 5 }}>
                    <Typography
                        {...textStyle.description}
                        color={fallbackColor}
                        style={{ maxWidth: '75%', opacity: FontOpacity.BODY_TEXT }}
                    >
                        {description}
                    </Typography>
                </View>
            )}
        </Column>
    );
};

export default Header;
