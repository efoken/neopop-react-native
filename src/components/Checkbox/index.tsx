import * as React from 'react';
import { Platform, Pressable, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import useToggle from '../../hooks/useToggle';
import { colorGuide } from '../../primitives';
import { isEmpty } from '../../utils';
import { Row, VerticalSpacer } from '../Helpers';
import useStyles from './styles';
import { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({
    children,
    colorConfig,
    colorMode = 'dark',
    isChecked: isToggleChecked,
    name,
    nativeID,
    onChange,
    style,
    ...props
}) => {
    const { isChecked, handleChange } = useToggle({ isChecked: isToggleChecked, onChange });

    const defaultColorConfig =
        colorMode === 'dark'
            ? colorGuide.darkComponents.checkbox
            : colorGuide.lightComponents.checkbox;

    const colors = isEmpty(colorConfig) ? defaultColorConfig : colorConfig ?? defaultColorConfig;

    const styles = useStyles({
        children,
        colorConfig: colors,
        isChecked,
    });

    return (
        <Pressable
            {...(Platform.OS === 'web'
                ? {
                      accessibilityRole: 'label' as any,
                      focusable: false,
                  }
                : {
                      nativeID,
                  })}
            style={[styles.checkboxLabel, style]}
            {...props}
        >
            {({ pressed }) => (
                <>
                    {Platform.OS === 'web' && (
                        <input
                            checked={isChecked}
                            id={nativeID}
                            name={name}
                            style={{
                                cursor: 'pointer',
                                height: 0,
                                opacity: 0,
                                position: 'absolute',
                                width: 0,
                            }}
                            type="checkbox"
                            onChange={handleChange}
                        />
                    )}
                    <Row>
                        <View style={styles.checkmarkWrapper}>
                            <View
                                style={[
                                    styles.checkmarkWrapperBefore,
                                    pressed && styles.checkmarkWrapperPressedBefore,
                                ]}
                            />
                            <View style={[styles.checkmark, pressed && styles.checkmarkPressed]}>
                                <Svg
                                    style={styles.tickSvg}
                                    width={10}
                                    height={8}
                                    viewBox="0 0 11 8"
                                    fill="none"
                                >
                                    <Path
                                        d="M1.45456 3.99973L4.18183 6.72701L10.5455 1.27246"
                                        stroke={colors.background}
                                        strokeWidth={1.36364}
                                    />
                                </Svg>
                            </View>
                            <View
                                style={[
                                    styles.checkmarkWrapperAfter,
                                    pressed && styles.checkmarkWrapperPressedAfter,
                                ]}
                            />
                        </View>
                        {children && (
                            <>
                                <VerticalSpacer n={3} />
                                {children}
                            </>
                        )}
                    </Row>
                </>
            )}
        </Pressable>
    );
};

export default Checkbox;
