import * as React from 'react';
import {
    Image,
    NativeSyntheticEvent,
    Platform,
    TextInput,
    TextInputFocusEventData,
    TextInputSubmitEditingEventData,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { colorGuide, typographyGuide } from '../../primitives';
import { isEmpty } from '../../utils';
import { Cross } from '../Helpers';
import InputField from '../InputField';
import useStyles from './styles';
import { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({
    colorConfig,
    colorMode = 'dark',
    icon,
    inputFieldColorConfig,
    onSearchInput,
    onSubmit,
    placeholder = 'search',
    textStyle = typographyGuide.searchBar.input,
}) => {
    const [searchText, setSearchText] = React.useState('');
    const [isActive, setIsActive] = React.useState(false);
    const inputRef = React.useRef<TextInput | null>(null);

    const handleChange = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        const value = event.nativeEvent.text;
        setSearchText(value);
        onSearchInput(value);
    };

    const handleSubmit = (
        event:
            | React.FormEvent<HTMLFormElement>
            | NativeSyntheticEvent<TextInputSubmitEditingEventData>,
    ) => {
        event.preventDefault();
        inputRef?.current?.blur();
        onSubmit?.();
    };

    const handleClearData = () => {
        setSearchText('');
        onSearchInput('');
    };

    const defaultColorConfig =
        colorMode === 'dark'
            ? colorGuide.darkComponents.searchBar
            : colorGuide.lightComponents.searchBar;

    const defaultInputFieldColorConfig =
        colorMode === 'dark'
            ? colorGuide.darkComponents.inputFields
            : colorGuide.lightComponents.inputFields;

    const colors = isEmpty(colorConfig) ? defaultColorConfig : colorConfig ?? defaultColorConfig;

    const inputFieldColors = isEmpty(inputFieldColorConfig)
        ? defaultInputFieldColorConfig
        : inputFieldColorConfig ?? defaultInputFieldColorConfig;

    const styles = useStyles({
        colorConfig: colors,
    });

    const inputField = (
        <InputField
            autoFocus={isActive}
            colorConfig={inputFieldColors}
            inputRef={inputRef}
            placeholder={placeholder}
            textStyle={{
                input: textStyle,
                label: typographyGuide.inputFields.label,
            }}
            value={searchText}
            onChange={handleChange}
        />
    );

    return (
        <TouchableWithoutFeedback
            onBlur={() => setIsActive(false)}
            onPress={() => setIsActive(true)}
        >
            <View style={[styles.container, isActive && styles.containerActive]}>
                {icon && <Image source={icon} style={styles.icon} />}
                <View style={styles.input}>
                    {Platform.OS === 'web' ? (
                        <form style={{ margin: 0, padding: 0 }} onSubmit={handleSubmit}>
                            {inputField}
                            <input type="submit" style={{ display: 'none' }} />
                        </form>
                    ) : (
                        React.cloneElement(inputField, {
                            onSubmitEditing: handleSubmit,
                        })
                    )}
                </View>
                {!!searchText && <Cross color={colors.closeIcon} onPress={handleClearData} />}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default SearchBar;
