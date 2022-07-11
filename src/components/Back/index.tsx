import * as React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { mainColors, typographyGuide } from '../../primitives';
import { Row, VerticalSpacer } from '../Helpers';
import Typography from '../Typography';
import { BackProps } from './types';

const Back: React.FC<BackProps> = ({
    color,
    heading,
    onPress,
    rightElement,
    textStyle = typographyGuide.back.heading,
}) => (
    <Row h="center" style={{ paddingHorizontal: 0, paddingVertical: 12 }}>
        <Row h="center">
            <TouchableWithoutFeedback onPress={onPress}>
                <Row h="center" style={{ height: 36 }}>
                    <Svg width={32} height={12} viewBox="0 0 32 12" fill="none">
                        <Path
                            d="M31 6L0.999999 6"
                            stroke={color ?? mainColors.white}
                            strokeWidth={1.5}
                            strokeLinecap="square"
                            strokeLinejoin="round"
                        />
                        <Path
                            d="M7 12C7 8.68629 4.31371 6 1 6"
                            stroke={color ?? mainColors.white}
                            strokeWidth={1.5}
                        />
                        <Path
                            d="M1 6C4.31371 6 7 3.31371 7 0"
                            stroke={color ?? mainColors.white}
                            strokeWidth={1.5}
                        />
                    </Svg>
                </Row>
            </TouchableWithoutFeedback>
            <VerticalSpacer n={4} />
            {heading && (
                <Typography {...textStyle} color={color ?? mainColors.white}>
                    {heading}
                </Typography>
            )}
        </Row>
        <View style={{ marginLeft: 'auto' }}>{rightElement ?? null}</View>
    </Row>
);

export default Back;
