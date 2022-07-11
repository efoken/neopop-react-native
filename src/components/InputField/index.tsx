import * as React from 'react';
import { Platform, TextInput, View } from 'react-native';
import { colorGuide, mainColors, typographyGuide } from '../../primitives';
import { hexToRGBA, isEmpty } from '../../utils';
import Typography from '../Typography';
import useStyles from './styles';
import { InputFieldProps } from './types';

const InputField: React.FC<InputFieldProps> = ({
    colorConfig,
    colorMode = 'dark',
    errorMessage = 'error message',
    hasError,
    inputMode = 'text',
    inputRef,
    isDisabled,
    label,
    name,
    nativeID,
    scrollIntoView,
    textStyle,
    ...props
}) => {
    const customRef = React.useRef<TextInput | null>(null);
    const labelRef = React.useRef<any>(null);
    // useScrollIntoView({ scrollIntoView: scrollIntoView, ref: customRef });
    // useAutoFocus({ autoFocus: autoFocus, ref: customRef, currentValue: value });

    React.useEffect(() => {
        if (Platform.OS === 'web') {
            if (customRef.current != null && name != null) {
                (customRef.current as any).name = name;
            }
            if (labelRef.current != null) {
                labelRef.current.htmlFor = nativeID;
            }
        }
    }, [nativeID]);

    const getLabelColor = () => (hasError ? colorConfig?.errorColor : colorConfig?.labelColor);

    const getLabelText = () => (hasError ? errorMessage : label);

    const defaultColorConfig =
        colorMode === 'dark'
            ? colorGuide.darkComponents.inputFields
            : colorGuide.lightComponents.inputFields;

    const colors = isEmpty(colorConfig) ? defaultColorConfig : colorConfig ?? defaultColorConfig;

    const styles = useStyles({
        colorConfig: colors,
        textStyle: {
            input: textStyle?.input ?? typographyGuide.inputFields.text,
            label: textStyle?.label ?? typographyGuide.inputFields.label,
        },
    });

    return (
        <View style={styles.container}>
            {label && (
                <View
                    ref={labelRef}
                    {...(Platform.OS === 'web' && {
                        accessibilityRole: 'label' as any,
                    })}
                    style={styles.label}
                >
                    <Typography
                        {...(textStyle?.label ?? typographyGuide.inputFields.label)}
                        color={getLabelColor()}
                    >
                        {getLabelText()}
                    </Typography>
                </View>
            )}
            <TextInput
                ref={(ref) => {
                    // eslint-disable-next-line no-param-reassign
                    customRef.current = inputRef ? (inputRef.current = ref) : ref;
                }}
                editable={!isDisabled}
                nativeID={nativeID}
                placeholderTextColor={colors.placeholderColor ?? hexToRGBA(mainColors.black, 0.3)}
                keyboardType={
                    {
                        decimal: 'decimal-pad' as const,
                        email: 'email-address' as const,
                        none: 'default' as const,
                        numeric: 'number-pad' as const,
                        search: 'web-search' as const,
                        tel: 'name-phone-pad' as const,
                        text: 'default' as const,
                        url: 'url' as const,
                    }[inputMode]
                }
                style={styles.input}
                {...props}
            />
        </View>
    );
};

export default InputField;
